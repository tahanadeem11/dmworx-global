import { Check, Heart, MapPin, MessageCircle, Play, Search, ShieldCheck, Star } from "lucide-react";
import type { ReactNode } from "react";
import type { VisualId } from "@/data/services";

const Win = ({ children, className = "" }: { children: ReactNode; className?: string }) => (
  <div className={`glass float-y rounded-2xl p-4 ${className}`}>{children}</div>
);
const Bar = ({ w, h = "h-2", c = "bg-line" }: { w: string; h?: string; c?: string }) => (
  <span className={`block rounded-full ${h} ${c}`} style={{ width: w }} />
);

const visuals: Record<VisualId, () => ReactNode> = {
  map: () => (
    <>
      <div className="absolute inset-6 overflow-hidden rounded-3xl border border-line bg-alt2">
        <svg viewBox="0 0 300 220" className="h-full w-full opacity-70" aria-hidden>
          {[40, 90, 140, 190].map((y) => <path key={y} d={`M0 ${y} Q80 ${y - 30} 150 ${y} T300 ${y}`} stroke="var(--line)" strokeWidth="10" fill="none" />)}
          {[60, 130, 200, 260].map((x) => <path key={x} d={`M${x} 0 L${x - 20} 220`} stroke="var(--line)" strokeWidth="8" />)}
        </svg>
      </div>
      <div className="absolute left-1/2 top-[34%] -translate-x-1/2">
        <span className="absolute inset-0 -m-4 animate-[pulse-ring_2.4s_ease-out_infinite] rounded-full bg-electric/40" />
        <span className="bg-brand grid h-14 w-14 place-items-center rounded-full rounded-bl-none text-white shadow-xl"><MapPin className="h-7 w-7" /></span>
      </div>
      <Win className="absolute bottom-8 left-8 right-16">
        <div className="flex gap-0.5 text-electric">{[0, 1, 2, 3, 4].map((i) => <Star key={i} className="h-4 w-4 fill-current" />)}</div>
        <div className="mt-2 space-y-1.5"><Bar w="80%" /><Bar w="55%" /></div>
      </Win>
    </>
  ),
  search: () => (
    <div className="absolute inset-6 space-y-3">
      <Win className="flex items-center gap-3 !rounded-full !py-3"><Search className="h-4 w-4 text-electric" /><Bar w="55%" c="bg-electric/30" /></Win>
      {[100, 82, 66, 50].map((w, i) => (
        <div key={i} className={`rounded-2xl border border-line p-4 ${i === 0 ? "bg-brand-2 text-white" : "bg-solid"}`}>
          <div className="flex items-center justify-between"><Bar w={`${w}%`} c={i === 0 ? "bg-white/70" : "bg-line"} /><span className="ml-3 font-display text-sm font-bold">#{i + 1}</span></div>
          <div className="mt-2"><Bar w="70%" h="h-1.5" c={i === 0 ? "bg-white/40" : "bg-line"} /></div>
        </div>
      ))}
    </div>
  ),
  browser: () => (
    <div className="absolute inset-6">
      <div className="glass h-full overflow-hidden rounded-2xl">
        <div className="flex items-center gap-1.5 border-b border-line px-4 py-3">{["bg-purple", "bg-royal", "bg-cyan"].map((c) => <span key={c} className={`h-2.5 w-2.5 rounded-full ${c}`} />)}<span className="ml-3 h-4 flex-1 rounded-full bg-line" /></div>
        <div className="space-y-3 p-4">
          <div className="bg-brand-2 h-24 rounded-xl" />
          <div className="grid grid-cols-3 gap-3">{[0, 1, 2].map((i) => <div key={i} className="h-16 rounded-xl border border-line bg-solid" />)}</div>
          <Bar w="70%" /><Bar w="45%" />
        </div>
      </div>
    </div>
  ),
  phone: () => (
    <>
      <div className="absolute left-1/2 top-4 bottom-4 w-44 -translate-x-1/2 rounded-[2.2rem] border-4 border-fg/80 bg-solid p-3 shadow-2xl">
        <div className="mx-auto h-1.5 w-12 rounded-full bg-line" />
        <div className="bg-brand-2 mt-4 h-20 rounded-2xl" />
        <div className="mt-3 space-y-2">{[0, 1, 2].map((i) => <div key={i} className="flex items-center gap-2 rounded-xl border border-line p-2"><span className="bg-brand h-7 w-7 rounded-lg" /><div className="flex-1 space-y-1"><Bar w="80%" h="h-1.5" /><Bar w="50%" h="h-1.5" /></div></div>)}</div>
      </div>
      <Win className="absolute right-2 top-12 !p-3"><Check className="h-5 w-5 text-electric" /></Win>
      <Win className="absolute bottom-12 left-0 !p-3"><MessageCircle className="h-5 w-5 text-purple" /></Win>
    </>
  ),
  social: () => (
    <div className="absolute inset-6 grid grid-cols-3 gap-3">
      {[["#a020f0", "#4338f5"], ["#4338f5", "#08bfea"], ["#7026d9", "#087bff"], ["#087bff", "#08bfea"], ["#a020f0", "#087bff"], ["#4338f5", "#a020f0"]].map(([a, b], i) => (
        <div key={i} className="relative rounded-2xl" style={{ background: `linear-gradient(135deg,${a},${b})`, transform: `translateY(${i % 2 ? 14 : 0}px)` }}>
          {i === 1 && <Win className="absolute -bottom-3 -right-3 !p-2"><Heart className="h-4 w-4 fill-current text-purple" /></Win>}
          {i === 4 && <Win className="absolute -left-3 -top-3 !p-2"><MessageCircle className="h-4 w-4 text-electric" /></Win>}
        </div>
      ))}
    </div>
  ),
  design: () => (
    <>
      <svg viewBox="0 0 300 260" className="absolute inset-6 h-[calc(100%-3rem)] w-[calc(100%-3rem)]" aria-hidden>
        <defs><linearGradient id="dg" x1="0" x2="1"><stop offset="0" stopColor="#a020f0" /><stop offset="1" stopColor="#08bfea" /></linearGradient></defs>
        <circle cx="90" cy="90" r="55" fill="url(#dg)" opacity="0.9" />
        <rect x="130" y="70" width="110" height="110" rx="22" fill="#4338f5" opacity="0.85" transform="rotate(12 185 125)" />
        <path d="M40 215 C100 150 160 250 260 190" stroke="url(#dg)" strokeWidth="6" fill="none" strokeLinecap="round" strokeDasharray="400" strokeDashoffset="400" style={{ animation: "dash 2.5s ease-out forwards" }} />
        {[40, 260].map((x, i) => <rect key={x} x={x - 6} y={i ? 184 : 209} width="12" height="12" fill="#fff" stroke="#087bff" strokeWidth="2" />)}
      </svg>
      <div className="absolute bottom-6 right-6 flex gap-2">{["#a020f0", "#4338f5", "#087bff", "#08bfea"].map((c) => <span key={c} className="h-8 w-8 rounded-full border-2 border-white shadow" style={{ background: c }} />)}</div>
    </>
  ),
  ads: () => (
    <div className="absolute inset-6 flex flex-col gap-3">
      <Win className="flex-1">
        <div className="flex h-full items-end gap-2">{[30, 45, 38, 60, 52, 78, 95].map((h, i) => <span key={i} className="bg-brand flex-1 rounded-t-md" style={{ height: `${h}%`, opacity: 0.5 + i * 0.07 }} />)}</div>
      </Win>
      <div className="grid grid-cols-3 gap-3">{["CTR", "CPC", "CVR"].map((k) => <div key={k} className="rounded-2xl border border-line bg-solid p-3 text-center"><div className="text-xs text-muted">{k}</div><div className="text-brand font-display text-lg font-bold">—</div></div>)}</div>
    </div>
  ),
  cart: () => (
    <div className="absolute inset-6 grid grid-cols-2 gap-3">
      {[0, 1, 2, 3].map((i) => (
        <div key={i} className="rounded-2xl border border-line bg-solid p-3">
          <div className="h-20 rounded-xl" style={{ background: `linear-gradient(135deg, ${["#a020f0", "#4338f5", "#087bff", "#08bfea"][i]}, #fff3)` }} />
          <div className="mt-3 space-y-1.5"><Bar w="75%" h="h-1.5" /><Bar w="40%" h="h-1.5" c="bg-electric/40" /></div>
          {i === 1 && <span className="bg-brand mt-2 block rounded-full py-1.5 text-center text-[11px] font-semibold text-white">Add to cart</span>}
        </div>
      ))}
    </div>
  ),
  brand: () => (
    <div className="absolute inset-6 grid grid-cols-2 gap-3">
      <div className="bg-brand-2 grid place-items-center rounded-3xl"><span className="font-display text-6xl font-bold text-white">Aa</span></div>
      <div className="grid grid-rows-[1fr_auto] gap-3">
        <div className="grid grid-cols-2 gap-2">{["#a020f0", "#4338f5", "#087bff", "#08bfea"].map((c) => <span key={c} className="rounded-2xl" style={{ background: c }} />)}</div>
        <Win className="!p-3"><Bar w="80%" h="h-2.5" c="bg-fg/70" /><div className="mt-2"><Bar w="55%" /></div></Win>
      </div>
    </div>
  ),
  video: () => (
    <div className="absolute inset-6 flex flex-col gap-3">
      <div className="bg-brand-2 relative flex-1 rounded-3xl"><span className="absolute left-1/2 top-1/2 grid h-16 w-16 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-white/90 shadow-xl"><Play className="ml-1 h-7 w-7 fill-current text-royal" /></span></div>
      <div className="glass rounded-2xl p-3"><div className="relative h-2 rounded-full bg-line"><span className="bg-brand absolute inset-y-0 left-0 w-1/2 rounded-full" /><span className="absolute left-1/2 top-1/2 h-4 w-4 -translate-y-1/2 rounded-full border-2 border-electric bg-white" /></div>
        <div className="mt-3 flex gap-1.5">{[30, 50, 20, 40, 60].map((w, i) => <span key={i} className="h-5 rounded-md bg-electric/20" style={{ width: `${w}%` }} />)}</div></div>
    </div>
  ),
  maintenance: () => (
    <div className="absolute inset-6 flex flex-col justify-center gap-3">
      <div className="bg-brand-2 mx-auto mb-2 grid h-20 w-20 place-items-center rounded-3xl text-white shadow-xl"><ShieldCheck className="h-10 w-10" /></div>
      {["Updates applied", "Backup completed", "Uptime monitored", "Security scan clear"].map((t) => <Win key={t} className="flex items-center gap-3 !py-2.5"><span className="bg-brand grid h-5 w-5 place-items-center rounded-full text-white"><Check className="h-3 w-3" /></span><span className="text-sm">{t}</span></Win>)}
    </div>
  ),
  hosting: () => (
    <div className="absolute inset-6 flex flex-col justify-center gap-3">
      {[0, 1, 2].map((i) => (
        <div key={i} className="flex items-center justify-between rounded-2xl border border-line bg-solid px-5 py-4">
          <div className="space-y-1.5"><Bar w="7rem" h="h-2.5" c="bg-fg/60" /><Bar w="4.5rem" h="h-1.5" /></div>
          <div className="flex gap-1.5">{[0, 1, 2].map((d) => <span key={d} className="h-2.5 w-2.5 rounded-full bg-cyan" style={{ opacity: d <= i ? 1 : 0.25 }} />)}</div>
        </div>
      ))}
      <div className="bg-brand mx-auto rounded-full px-5 py-2 font-mono text-xs text-white">https://yourdomain.com</div>
    </div>
  ),
  packages: () => (
    <div className="absolute inset-6 flex items-end justify-center gap-3">
      {[["Starter", "55%"], ["Growth", "78%"], ["Scale", "100%"]].map(([n, h], i) => (
        <div key={n} className={`flex w-1/3 flex-col justify-end rounded-3xl p-4 ${i === 1 ? "bg-brand-2 text-white" : "border border-line bg-solid"}`} style={{ height: h }}>
          <span className="font-display text-sm font-bold">{n}</span>
          <div className="mt-3 space-y-1.5">{[0, 1, 2].slice(0, i + 1).map((k) => <Bar key={k} w="85%" h="h-1.5" c={i === 1 ? "bg-white/50" : "bg-line"} />)}</div>
        </div>
      ))}
    </div>
  ),
};

export function ServiceVisual({ id }: { id: VisualId }) {
  return (
    <div className="relative mx-auto aspect-[5/4] w-full max-w-[34rem]" aria-hidden>
      <div className="bg-brand absolute inset-4 rounded-[2.5rem] opacity-20 blur-3xl" />
      <div className="absolute inset-0 rounded-[2.5rem] border border-line bg-surface backdrop-blur" />
      {visuals[id]()}
    </div>
  );
}
