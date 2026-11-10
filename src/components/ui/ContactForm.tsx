"use client";

import { CircleAlert, CircleCheck, LoaderCircle, Send } from "lucide-react";
import { useState } from "react";
import { services } from "@/data/services";
import { site } from "@/data/site";
import { submitInquiry, validate, type Inquiry } from "@/lib/contact";

const empty: Inquiry = { name: "", email: "", phone: "", company: "", service: "", budget: "", details: "" };
const budgets = ["Under $1,000", "$1,000 – $5,000", "$5,000 – $15,000", "$15,000+", "Not sure yet"];

const input =
  "w-full rounded-xl border border-line bg-bg px-4 py-3 text-[15px] outline-none transition placeholder:text-muted/70 focus:border-electric focus:shadow-[0_0_0_4px_rgba(8,123,255,0.15)] aria-[invalid=true]:border-red-500";

export function ContactForm({ defaultService = "", id = "inquiry" }: { defaultService?: string; id?: string }) {
  const [data, setData] = useState<Inquiry>({ ...empty, service: defaultService });
  const [errors, setErrors] = useState<Partial<Record<keyof Inquiry, string>>>({});
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const set = (k: keyof Inquiry) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setData((d) => ({ ...d, [k]: e.target.value }));
    if (errors[k]) setErrors((x) => ({ ...x, [k]: undefined }));
  };

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    const found = validate(data);
    setErrors(found);
    if (Object.keys(found).length) {
      setStatus("idle");
      return;
    }
    setStatus("loading");
    const res = await submitInquiry(data);
    if (res.ok) {
      setStatus("success");
      setData({ ...empty, service: defaultService });
    } else {
      setStatus("error");
      setMessage(res.message);
    }
  }

  const field = (k: keyof Inquiry, label: string, node: React.ReactNode, full = false) => (
    <div className={full ? "sm:col-span-2" : ""}>
      <label htmlFor={`${id}-${k}`} className="mb-1.5 block text-sm font-medium">{label}</label>
      {node}
      {errors[k] && <p id={`${id}-${k}-err`} role="alert" className="mt-1.5 text-sm text-red-500">{errors[k]}</p>}
    </div>
  );
  const a11y = (k: keyof Inquiry) => ({
    id: `${id}-${k}`,
    "aria-invalid": !!errors[k],
    "aria-describedby": errors[k] ? `${id}-${k}-err` : undefined,
  });

  return (
    <form onSubmit={onSubmit} noValidate className="grid gap-5 sm:grid-cols-2" aria-label="Project inquiry form">
      {field("name", "Full name *", <input {...a11y("name")} className={input} value={data.name} onChange={set("name")} autoComplete="name" placeholder="Jane Smith" />)}
      {field("email", "Email address *", <input {...a11y("email")} type="email" className={input} value={data.email} onChange={set("email")} autoComplete="email" placeholder="you@company.com" />)}
      {field("phone", "Phone number", <input {...a11y("phone")} type="tel" className={input} value={data.phone} onChange={set("phone")} autoComplete="tel" placeholder="+1 (555) 000-0000" />)}
      {field("company", "Company name", <input {...a11y("company")} className={input} value={data.company} onChange={set("company")} autoComplete="organization" placeholder="Your company" />)}
      {field("service", "Service interested in *",
        <select {...a11y("service")} className={input} value={data.service} onChange={set("service")}>
          <option value="">Select a service</option>
          {services.map((s) => <option key={s.slug} value={s.title}>{s.title}</option>)}
          <option value="Other">Something else</option>
        </select>)}
      {field("budget", "Project budget (optional)",
        <select {...a11y("budget")} className={input} value={data.budget} onChange={set("budget")}>
          <option value="">Select a range</option>
          {budgets.map((b) => <option key={b}>{b}</option>)}
        </select>)}
      {field("details", "Project details *", <textarea {...a11y("details")} rows={5} className={input} value={data.details} onChange={set("details")} placeholder="Tell us about your goals, timeline and anything else we should know." />, true)}

      <div className="sm:col-span-2">
        <button
          type="submit"
          disabled={status === "loading"}
          className="bg-brand inline-flex w-full items-center justify-center gap-2 rounded-full px-8 py-4 font-semibold text-white shadow-[0_10px_30px_-8px_rgba(67,56,245,0.6)] transition hover:shadow-[0_14px_40px_-6px_rgba(8,123,255,0.7)] disabled:opacity-70 sm:w-auto"
        >
          {status === "loading" ? <><LoaderCircle className="h-4 w-4 animate-spin" aria-hidden /> Sending…</> : <><Send className="h-4 w-4" aria-hidden /> Send message</>}
        </button>

        <div aria-live="polite" className="mt-5">
          {status === "success" && (
            <p className="flex items-start gap-3 rounded-2xl border border-electric/30 bg-electric/10 p-4 text-sm">
              <CircleCheck className="mt-0.5 h-5 w-5 shrink-0 text-electric" aria-hidden /> Thank you! Your message has been sent. We&apos;ll be in touch shortly.
            </p>
          )}
          {status === "error" && (
            <div className="flex items-start gap-3 rounded-2xl border border-amber-500/40 bg-amber-500/10 p-4 text-sm">
              <CircleAlert className="mt-0.5 h-5 w-5 shrink-0 text-amber-500" aria-hidden />
              <p>
                {message} Your message was <strong>not</strong> sent. Please email{" "}
                <a className="font-semibold underline" href={`mailto:${site.email}`}>{site.email}</a> or call{" "}
                <a className="font-semibold underline" href={site.phoneHref}>{site.phone}</a>.
              </p>
            </div>
          )}
        </div>
      </div>
    </form>
  );
}
