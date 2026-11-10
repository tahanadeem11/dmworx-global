export type Inquiry = {
  name: string;
  email: string;
  phone: string;
  company: string;
  service: string;
  budget: string;
  details: string;
};

export type InquiryResult = { ok: true } | { ok: false; reason: "not-configured" | "failed"; message: string };

/**
 * Backend wiring point.
 * Set NEXT_PUBLIC_CONTACT_ENDPOINT (e.g. a route handler, Formspree, or email API proxy) and the
 * form will POST JSON there. Until then the form reports honestly that it is not connected,
 * and never pretends an inquiry was sent.
 */
export async function submitInquiry(data: Inquiry): Promise<InquiryResult> {
  const endpoint = process.env.NEXT_PUBLIC_CONTACT_ENDPOINT;
  if (!endpoint) {
    return { ok: false, reason: "not-configured", message: "The online form isn't connected to an email service yet." };
  }
  try {
    const res = await fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    if (!res.ok) throw new Error(String(res.status));
    return { ok: true };
  } catch {
    return { ok: false, reason: "failed", message: "Something went wrong sending your message. Please try again or contact us directly." };
  }
}

export function validate(d: Inquiry) {
  const e: Partial<Record<keyof Inquiry, string>> = {};
  if (d.name.trim().length < 2) e.name = "Please enter your full name.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(d.email.trim())) e.email = "Please enter a valid email address.";
  if (d.phone.trim() && !/^[+\d][\d\s().-]{6,}$/.test(d.phone.trim())) e.phone = "Please enter a valid phone number.";
  if (!d.service) e.service = "Please choose a service.";
  if (d.details.trim().length < 10) e.details = "Please tell us a little about your project (10+ characters).";
  return e;
}
