import { BarChart3, Heart, MessageCircle, Play, Search, ShoppingBag, Star, TrendingUp } from "lucide-react";
import type { ReactNode } from "react";

/** Illustrated marketing mockups used as portfolio thumbnails until real project screenshots exist. */
const Pane = ({ className = "", children }: { className?: string; children: ReactNode }) => (
  <div className={`absolute rounded-2xl border border-white/30 bg-white/15 p-3 shadow-2xl backdrop-blur-md ${className}`}>{children}</div>
);
const Bar = ({ w, o = 0.55 }: { w: string; o?: number }) => <span className="block h-1.5 rounded-full bg-white" style={{ width: w, opacity: o }} />;

function Dashboard() {
  return (
    <>
      <Pane className="left-[8%] top-[14%] w-[62%]">
        <div className="flex items-center justify-between text-[10px] font-semibold uppercase tracking-widest text-white/80">
          <span className="flex items-center gap-1"><BarChart3 className="h-3 w-3" /> Organic traffic</span>
          <span className="flex items-center gap-1"><TrendingUp className="h-3 w-3" /> trend</span>
        </div>
        <svg viewBox="0 0 200 70" className="mt-2 w-full" aria-hidden>
          <path d="M0 58 L25 46 L50 50 L75 32 L100 38 L125 20 L150 24 L175 8 L200 12" fill="none" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M0 58 L25 46 L50 50 L75 32 L100 38 L125 20 L150 24 L175 8 L200 12 V70 H0Z" fill="#fff" opacity="0.15" />
        </svg>
      </Pane>
      <Pane className="bottom-[12%] right-[8%] w-[44%]">
        <div className="flex items-end gap-1.5">
          {[40, 62, 50, 78, 66, 94].map((h, i) => <span key={i} className="w-full rounded-sm bg-white" style={{ height: h * 0.5, opacity: 0.4 + i * 0.1 }} />)}
        </div>
        <div className="mt-2 space-y-1.5"><Bar w="70%" /><Bar w="45%" o={0.35} /></div>
      </Pane>
      <Pane className="bottom-[16%] left-[8%] flex w-[34%] items-center gap-2"><Search className="h-4 w-4 text-white" /><Bar w="60%" /></Pane>
    </>
  );
}

function Branding() {
  return (
    <>
      <div className="absolute left-[10%] top-[14%] grid h-[44%] w-[38%] place-items-center rounded-3xl bg-white/90 shadow-2xl">
        <span className="font-display text-5xl font-bold text-royal sm:text-6xl">Aa</span>
      </div>
      <Pane className="right-[8%] top-[14%] grid w-[40%] grid-cols-2 gap-2">
        {["#a020f0", "#4338f5", "#087bff", "#08bfea"].map((c) => <span key={c} className="aspect-square rounded-xl border border-white/40" style={{ background: c }} />)}
      </Pane>
      <Pane className="bottom-[12%] left-[10%] w-[78%]">
        <div className="flex items-center gap-3">
          <span className="grid h-9 w-9 place-items-center rounded-xl bg-white font-display text-sm font-bold text-purple">DM</span>
          <div className="flex-1 space-y-1.5"><Bar w="55%" o={0.85} /><Bar w="38%" o={0.4} /></div>
        </div>
      </Pane>
    </>
  );
}

function AppScreens() {
  const phone = (cls: string, accent: number) => (
    <div className={`absolute w-[30%] rounded-[1.4rem] border-[3px] border-white/70 bg-white/20 p-2 shadow-2xl backdrop-blur-md ${cls}`}>
      <div className="mx-auto h-1 w-8 rounded-full bg-white/70" />
      <div className="mt-2 h-14 rounded-xl bg-white/60" style={{ opacity: 0.5 + accent * 0.2 }} />
      <div className="mt-2 space-y-1.5">{[0, 1, 2].map((i) => <div key={i} className="flex items-center gap-1.5"><span className="h-4 w-4 rounded-md bg-white/70" /><Bar w="70%" /></div>)}</div>
    </div>
  );
  return <>{phone("left-[14%] top-[18%] -rotate-6", 0)}{phone("left-[38%] top-[8%]", 1)}{phone("right-[12%] top-[22%] rotate-6", 2)}</>;
}

function Store() {
  const pos = ["left-[6%] top-[14%]", "left-[36%] top-[22%]", "left-[66%] top-[14%]"];
  return (
    <>
      {pos.map((p, i) => (
        <Pane key={i} className={`w-[28%] ${p}`}>
          <div className="aspect-[4/5] rounded-xl bg-white" style={{ opacity: 0.4 + i * 0.18 }} />
          <div className="mt-2 space-y-1.5"><Bar w="75%" /><Bar w="40%" o={0.35} /></div>
          <span className="mt-2 flex items-center justify-center gap-1 rounded-full bg-white py-1 text-[9px] font-bold text-royal"><ShoppingBag className="h-3 w-3" />Add</span>
        </Pane>
      ))}
    </>
  );
}

function Social() {
  const tiles = ["left-[8%] top-[14%]", "left-[36%] top-[22%]", "left-[64%] top-[14%]", "left-[14%] top-[52%]", "left-[42%] top-[58%]"];
  return (
    <>
      {tiles.map((t, i) => (
        <div key={i} className={`absolute aspect-square w-[26%] rounded-2xl border border-white/40 shadow-xl ${t}`} style={{ background: `rgba(255,255,255,${0.18 + (i % 3) * 0.12})` }}>
          {i === 1 && <Heart className="absolute -right-2 -top-2 h-6 w-6 rounded-full bg-white p-1 text-pink-500" style={{ color: "#a020f0" }} />}
          {i === 3 && <MessageCircle className="absolute -right-2 -top-2 h-6 w-6 rounded-full bg-white p-1 text-royal" />}
        </div>
      ))}
      <Pane className="bottom-[10%] right-[8%] flex items-center gap-1 text-[10px] font-bold text-white"><Star className="h-3.5 w-3.5 fill-white" /> +12.4% reach</Pane>
    </>
  );
}

function Video() {
  return (
    <>
      <div className="absolute left-[10%] top-[14%] h-[52%] w-[80%] rounded-3xl border border-white/30 bg-white/15 shadow-2xl backdrop-blur-md">
        <span className="absolute left-1/2 top-1/2 grid h-14 w-14 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-white shadow-xl"><Play className="ml-0.5 h-6 w-6 fill-royal text-royal" /></span>
      </div>
      <Pane className="bottom-[12%] left-[10%] w-[80%]">
        <div className="relative h-1.5 rounded-full bg-white/30"><span className="absolute inset-y-0 left-0 w-[55%] rounded-full bg-white" /></div>
        <div className="mt-2.5 flex gap-1.5">{[28, 18, 34, 14].map((w, i) => <span key={i} className="h-3 rounded bg-white/50" style={{ width: `${w}%` }} />)}</div>
      </Pane>
    </>
  );
}

const arts: Record<string, () => ReactNode> = {
  "project-one": Dashboard,
  "project-two": Branding,
  "project-three": AppScreens,
  "project-four": Store,
  "project-five": Social,
  "project-six": Video,
};

export function ProjectArt({ slug }: { slug: string }) {
  const Art = arts[slug] ?? Dashboard;
  return (
    <div className="absolute inset-0" aria-hidden>
      <div className="dot-grid absolute inset-0 opacity-40" />
      <div className="absolute -right-10 -top-10 h-56 w-56 rounded-full bg-white/15 blur-2xl" />
      <div className="absolute inset-x-0 top-1/2 aspect-[16/11] -translate-y-1/2">
        <Art />
      </div>
    </div>
  );
}
