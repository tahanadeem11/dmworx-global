"use client";

/* R3F idiom: three.js objects, uniforms and refs are mutated imperatively inside useFrame (outside React render),
   which the React Compiler immutability rules cannot model. */
/* eslint-disable react-hooks/immutability */

import { Canvas, useFrame, useLoader, useThree } from "@react-three/fiber";
import { useEffect, useMemo, useRef, useState, type RefObject } from "react";
import * as THREE from "three";

/* The DM Worx mark is built as a stack of thin layers so it reads as a solid, extruded 3D logo
   (parallax reveals the depth as it tilts toward the cursor). */
const MARK_ASPECT = 724 / 267;
const MARK_W = 3.6;
const MARK_H = MARK_W / MARK_ASPECT;
const LAYERS = 18;
const DEPTH = 0.26;

type Shared = {
  mouse: RefObject<{ x: number; y: number }>;
  scroll: RefObject<number>;
  pulse: RefObject<number>;
  anchor: RefObject<{ x: number; y: number; w: number }>;
  dark: boolean;
};

function LogoMark({ pulse, dark }: Pick<Shared, "pulse" | "dark">) {
  const tex = useLoader(THREE.TextureLoader, "/logos/dm-mark.png");
  const group = useRef<THREE.Group>(null);
  const mats = useRef<THREE.MeshBasicMaterial[]>([]);

  useMemo(() => {
    tex.colorSpace = THREE.SRGBColorSpace;
    tex.anisotropy = 8;
    tex.needsUpdate = true;
  }, [tex]);

  const glow = useMemo(() => {
    const c = document.createElement("canvas");
    c.width = c.height = 256;
    const g = c.getContext("2d")!;
    const grad = g.createRadialGradient(128, 128, 0, 128, 128, 128);
    grad.addColorStop(0, "rgba(67,56,245,0.55)");
    grad.addColorStop(0.45, "rgba(8,123,255,0.22)");
    grad.addColorStop(1, "rgba(8,191,234,0)");
    g.fillStyle = grad;
    g.fillRect(0, 0, 256, 256);
    const t = new THREE.CanvasTexture(c);
    t.colorSpace = THREE.SRGBColorSpace;
    return t;
  }, []);

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    const g = group.current;
    if (g) {
      g.position.y = Math.sin(t * 0.9) * 0.08;
      const k = 1 + pulse.current * 0.12;
      g.scale.setScalar(k);
    }
    pulse.current *= 0.92;
    // soft light sweep across the layers
    mats.current.forEach((m, i) => {
      const base = 0.28 + 0.72 * (i / (LAYERS - 1)) ** 1.4;
      const sweep = 0.5 + 0.5 * Math.sin(t * 1.1 - i * 0.35);
      const v = Math.min(1, base * (dark ? 1 : 1.05) + (i === LAYERS - 1 ? 0 : sweep * 0.08));
      m.color.setRGB(v, v, v);
    });
  });

  return (
    <group ref={group}>
      {/* ambient glow behind the mark */}
      <mesh position={[0, 0, -0.5]}>
        <planeGeometry args={[MARK_W * 2.3, MARK_W * 2.3]} />
        <meshBasicMaterial map={glow} transparent depthWrite={false} blending={THREE.AdditiveBlending} opacity={dark ? 1 : 0.55} toneMapped={false} />
      </mesh>
      {Array.from({ length: LAYERS }).map((_, i) => (
        <mesh key={i} position={[0, 0, -DEPTH + (i / (LAYERS - 1)) * DEPTH]}>
          <planeGeometry args={[MARK_W, MARK_H]} />
          <meshBasicMaterial
            ref={(m) => void (m && (mats.current[i] = m))}
            map={tex}
            transparent
            alphaTest={i === LAYERS - 1 ? 0.02 : 0.5}
            side={THREE.DoubleSide}
            toneMapped={false}
          />
        </mesh>
      ))}
    </group>
  );
}

/* Orbiting rings with small satellite nodes: the "connected services" idea */
function Rings({ dark }: { dark: boolean }) {
  const groups = useRef<(THREE.Group | null)[]>([]);
  const cfg = useMemo(
    () => [
      { r: 2.55, tilt: [1.25, 0.25, 0] as const, speed: 0.32, color: "#a020f0", size: 0.085 },
      { r: 3.05, tilt: [0.55, 0.95, 0.4] as const, speed: -0.22, color: "#087bff", size: 0.07 },
      { r: 3.55, tilt: [1.05, -0.6, 0.9] as const, speed: 0.16, color: "#08bfea", size: 0.095 },
    ],
    [],
  );

  useFrame((_, dt) => {
    groups.current.forEach((g, i) => {
      if (g) g.rotation.z += dt * cfg[i].speed;
    });
  });

  return (
    <>
      {cfg.map((c, i) => (
        <group key={i} rotation={[c.tilt[0], c.tilt[1], c.tilt[2]]}>
          <mesh>
            <torusGeometry args={[c.r, 0.006, 8, 240]} />
            <meshBasicMaterial color={c.color} transparent opacity={dark ? 0.55 : 0.42} />
          </mesh>
          <group ref={(el) => void (groups.current[i] = el)}>
            <mesh position={[c.r, 0, 0]}>
              <sphereGeometry args={[c.size, 24, 24]} />
              <meshBasicMaterial color={c.color} />
            </mesh>
            <mesh position={[c.r, 0, 0]}>
              <sphereGeometry args={[c.size * 2.6, 24, 24]} />
              <meshBasicMaterial color={c.color} transparent opacity={0.14} depthWrite={false} />
            </mesh>
          </group>
        </group>
      ))}
    </>
  );
}

/** Deterministic PRNG so the particle field is stable across renders. */
function mulberry32(a: number) {
  return () => {
    a |= 0;
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function Particles({ dark }: { dark: boolean }) {
  const ref = useRef<THREE.Points>(null);
  const { positions, colors } = useMemo(() => {
    const n = 700;
    const rand = mulberry32(7);
    const p = new Float32Array(n * 3);
    const c = new Float32Array(n * 3);
    const palette = ["#a020f0", "#4338f5", "#087bff", "#08bfea"].map((h) => new THREE.Color(h));
    for (let i = 0; i < n; i++) {
      const r = 3.0 + rand() * 4.2;
      const th = rand() * Math.PI * 2;
      const ph = Math.acos(2 * rand() - 1);
      p[i * 3] = r * Math.sin(ph) * Math.cos(th);
      p[i * 3 + 1] = r * Math.sin(ph) * Math.sin(th) * 0.7;
      p[i * 3 + 2] = r * Math.cos(ph);
      const col = palette[Math.floor(rand() * 4)];
      c.set([col.r, col.g, col.b], i * 3);
    }
    return { positions: p, colors: c };
  }, []);

  useFrame((_, dt) => {
    if (ref.current) {
      ref.current.rotation.y += dt * 0.025;
      ref.current.rotation.x += dt * 0.008;
    }
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
        <bufferAttribute attach="attributes-color" args={[colors, 3]} />
      </bufferGeometry>
      <pointsMaterial size={dark ? 0.04 : 0.05} vertexColors transparent opacity={dark ? 0.85 : 0.7} depthWrite={false} sizeAttenuation />
    </points>
  );
}

function Rig({ mouse, scroll, pulse, anchor, dark }: Shared) {
  const group = useRef<THREE.Group>(null);
  const size = useThree((s) => s.size);
  const viewport = useThree((s) => s.viewport);

  useFrame((_, dt) => {
    const g = group.current;
    if (!g) return;
    const k = Math.min(1, dt * 3);
    const s = scroll.current;
    const wpp = viewport.width / size.width; // world units per css pixel
    const a = anchor.current;

    // place and size the logo system to sit exactly inside the hero's visual slot
    const targetX = a.w > 0 ? a.x * wpp : 0;
    const targetY = (a.w > 0 ? -a.y * wpp : 0) + s * 1.4;
    const fit = a.w > 0 ? (a.w * 0.8 * wpp) / MARK_W : 0.8;
    const targetScale = Math.min(1.5, Math.max(0.35, fit)) * (1 - s * 0.35);

    g.position.x += (targetX - g.position.x) * k;
    g.position.y += (targetY - g.position.y) * k;
    g.scale.setScalar(g.scale.x + (targetScale - g.scale.x) * k);
    const ty = mouse.current.x * 0.5;
    const tx = -mouse.current.y * 0.28;
    g.rotation.y += (ty - g.rotation.y) * Math.min(1, dt * 2.5);
    g.rotation.x += (tx - g.rotation.x) * Math.min(1, dt * 2.5);
  });

  return (
    <group ref={group} scale={0.001}>
      <LogoMark pulse={pulse} dark={dark} />
      <Rings dark={dark} />
      <Particles dark={dark} />
    </group>
  );
}

export default function HeroScene({
  progress,
  active,
  anchorEl,
  onReady,
}: {
  progress: RefObject<number>;
  active: boolean;
  anchorEl: RefObject<HTMLElement | null>;
  onReady?: () => void;
}) {
  const mouse = useRef({ x: 0, y: 0 });
  const pulse = useRef(0);
  const anchor = useRef({ x: 0, y: 0, w: 0 });
  const wrap = useRef<HTMLDivElement>(null);
  const [dark, setDark] = useState(true);
  const [reduce] = useState(() => typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches);

  useEffect(() => {
    const root = document.documentElement;
    const read = () => setDark(root.dataset.theme === "dark");
    read();
    const mo = new MutationObserver(read);
    mo.observe(root, { attributes: true, attributeFilter: ["data-theme"] });

    const move = (e: PointerEvent) => {
      mouse.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouse.current.y = (e.clientY / window.innerHeight) * 2 - 1;
    };
    const down = () => {
      if (window.scrollY < window.innerHeight * 0.9) pulse.current = 1;
    };
    window.addEventListener("pointermove", move, { passive: true });
    window.addEventListener("pointerdown", down, { passive: true });

    // measure the visual slot relative to the canvas (offset of its centre from the canvas centre, in css px)
    const measure = () => {
      const a = anchorEl.current;
      const c = wrap.current;
      if (!a || !c) return;
      const ar = a.getBoundingClientRect();
      const cr = c.getBoundingClientRect();
      anchor.current = {
        x: ar.left + ar.width / 2 - (cr.left + cr.width / 2),
        y: ar.top + ar.height / 2 - (cr.top + cr.height / 2),
        w: ar.width,
      };
    };
    measure();
    const ro = new ResizeObserver(measure);
    if (anchorEl.current) ro.observe(anchorEl.current);
    if (wrap.current) ro.observe(wrap.current);
    window.addEventListener("resize", measure);
    const t = window.setTimeout(measure, 400);

    return () => {
      mo.disconnect();
      ro.disconnect();
      window.clearTimeout(t);
      window.removeEventListener("resize", measure);
      window.removeEventListener("pointermove", move);
      window.removeEventListener("pointerdown", down);
    };
  }, [anchorEl]);

  return (
    <div ref={wrap} className="absolute inset-0">
      <Canvas
        dpr={[1, 1.6]}
        frameloop={active ? (reduce ? "demand" : "always") : "never"}
        camera={{ position: [0, 0, 8], fov: 42 }}
        gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
        style={{ pointerEvents: "none" }}
        onCreated={() => onReady?.()}
      >
        <Rig mouse={mouse} scroll={progress} pulse={pulse} anchor={anchor} dark={dark} />
      </Canvas>
    </div>
  );
}
