"use client";

/* R3F idiom: three.js objects, uniforms and refs are mutated imperatively inside useFrame (outside React render),
   which the React Compiler immutability rules cannot model. */
/* eslint-disable react-hooks/immutability */

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useEffect, useMemo, useRef, useState, type RefObject } from "react";
import * as THREE from "three";

/* ------------------------------------------------------------------ */
/* Liquid gradient orb: brand gradient, fresnel rim, cursor + click   */
/* ripples, all in a tiny custom shader (no external assets).         */
/* ------------------------------------------------------------------ */
const vertex = /* glsl */ `
  uniform float uTime;
  uniform float uPulse;
  uniform vec2 uMouse;
  varying vec3 vNormal;
  varying vec3 vPos;
  varying vec3 vView;

  float wave(vec3 p, float t) {
    return sin(p.x * 1.7 + t * 0.6) * sin(p.y * 1.9 - t * 0.5) * sin(p.z * 1.6 + t * 0.4);
  }

  void main() {
    vec3 p = position;
    float amp = 0.2 + length(uMouse) * 0.1;
    float d = wave(p * 1.4, uTime) * amp + wave(p * 3.1, uTime * 1.3) * 0.055;
    d += uPulse * 0.22 * sin(length(p) * 7.0 - uTime * 9.0);
    p += normal * d;
    vec4 mv = modelViewMatrix * vec4(p, 1.0);
    vPos = p;
    vNormal = normalize(normalMatrix * normal);
    vView = -mv.xyz;
    gl_Position = projectionMatrix * mv;
  }
`;

const fragment = /* glsl */ `
  uniform float uTime;
  uniform float uDark;
  varying vec3 vNormal;
  varying vec3 vPos;
  varying vec3 vView;

  void main() {
    vec3 c1 = vec3(0.627, 0.125, 0.941);  // #A020F0
    vec3 c2 = vec3(0.263, 0.220, 0.961);  // #4338F5
    vec3 c3 = vec3(0.031, 0.482, 1.000);  // #087BFF
    vec3 c4 = vec3(0.031, 0.749, 0.918);  // #08BFEA

    float t = clamp(vPos.y * 0.42 + 0.5 + sin(vPos.x * 1.5 + uTime * 0.4) * 0.14, 0.0, 1.0);
    vec3 col = t < 0.33 ? mix(c1, c2, t / 0.33)
             : t < 0.66 ? mix(c2, c3, (t - 0.33) / 0.33)
             : mix(c3, c4, (t - 0.66) / 0.34);

    vec3 n = normalize(vNormal);
    vec3 v = normalize(vView);
    float fres = pow(1.0 - max(dot(n, v), 0.0), 2.6);
    float diffuse = dot(n, normalize(vec3(0.45, 0.8, 0.6))) * 0.5 + 0.5;
    col *= 0.72 + 0.42 * diffuse;

    vec3 rim = mix(vec3(1.0), c4, 0.45);
    col += fres * rim * mix(0.5, 0.95, uDark);

    // specular glint
    vec3 h = normalize(normalize(vec3(0.45, 0.8, 0.6)) + v);
    col += pow(max(dot(n, h), 0.0), 48.0) * 0.55;

    gl_FragColor = vec4(col, 1.0);
  }
`;

type Shared = {
  mouse: RefObject<{ x: number; y: number }>;
  scroll: RefObject<number>;
  pulse: RefObject<number>;
  dark: boolean;
};

function Orb({ mouse, pulse, dark }: Shared) {
  const mat = useRef<THREE.ShaderMaterial>(null);
  const uniforms = useMemo(
    () => ({
      uTime: { value: 0 },
      uPulse: { value: 0 },
      uDark: { value: 0 },
      uMouse: { value: new THREE.Vector2() },
    }),
    [],
  );

  useFrame((state, dt) => {
    const m = mat.current;
    if (!m) return;
    const u = m.uniforms;
    u.uTime.value += dt;
    u.uDark.value += ((dark ? 1 : 0) - u.uDark.value) * Math.min(1, dt * 4);
    u.uMouse.value.lerp(new THREE.Vector2(mouse.current.x, mouse.current.y), 0.06);
    pulse.current = pulse.current * 0.93;
    u.uPulse.value = pulse.current;
  });

  return (
    <mesh>
      <sphereGeometry args={[1.35, 128, 128]} />
      <shaderMaterial ref={mat} uniforms={uniforms} vertexShader={vertex} fragmentShader={fragment} />
    </mesh>
  );
}

/* Orbiting rings with small satellite nodes: the "connected services" idea */
function Rings({ dark }: { dark: boolean }) {
  const groups = useRef<(THREE.Group | null)[]>([]);
  const cfg = useMemo(
    () => [
      { r: 2.15, tilt: [1.2, 0.3, 0] as const, speed: 0.35, color: "#a020f0", size: 0.09 },
      { r: 2.65, tilt: [0.5, 0.9, 0.4] as const, speed: -0.25, color: "#087bff", size: 0.075 },
      { r: 3.15, tilt: [1.0, -0.6, 0.9] as const, speed: 0.18, color: "#08bfea", size: 0.1 },
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
            <torusGeometry args={[c.r, 0.006, 8, 220]} />
            <meshBasicMaterial color={c.color} transparent opacity={dark ? 0.55 : 0.4} />
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

function Wire({ dark }: { dark: boolean }) {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((_, dt) => {
    if (ref.current) {
      ref.current.rotation.y += dt * 0.08;
      ref.current.rotation.x += dt * 0.04;
    }
  });
  return (
    <mesh ref={ref}>
      <icosahedronGeometry args={[1.95, 2]} />
      <meshBasicMaterial color={dark ? "#7aa7ff" : "#4338f5"} wireframe transparent opacity={dark ? 0.16 : 0.12} />
    </mesh>
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
    const n = 900;
    const rand = mulberry32(7);
    const p = new Float32Array(n * 3);
    const c = new Float32Array(n * 3);
    const palette = ["#a020f0", "#4338f5", "#087bff", "#08bfea"].map((h) => new THREE.Color(h));
    for (let i = 0; i < n; i++) {
      const r = 3.4 + rand() * 4.6;
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

function Rig({ mouse, scroll, pulse, dark }: Shared) {
  const group = useRef<THREE.Group>(null);
  const size = useThree((s) => s.size);
  const viewport = useThree((s) => s.viewport);

  useFrame((_, dt) => {
    const g = group.current;
    if (!g) return;
    const wide = size.width >= 1000; // matches the CSS lg breakpoint (minus scrollbar)
    const k = Math.min(1, dt * 3);
    const s = scroll.current;
    // keep the whole system (rings included) inside the right-hand zone on desktop
    const fit = Math.min(1.05, Math.max(0.5, size.width / 1500));
    const targetX = wide ? viewport.width * 0.27 : 0;
    const targetY = (wide ? 0.05 : viewport.height * 0.3) + s * 1.6;
    const targetScale = (wide ? fit : Math.min(0.68, size.width / 600)) * (1 - s * 0.35);
    g.position.x += (targetX - g.position.x) * k;
    g.position.y += (targetY - g.position.y) * k;
    g.scale.setScalar(g.scale.x + (targetScale - g.scale.x) * k);
    g.rotation.y += (mouse.current.x * 0.5 - g.rotation.y) * Math.min(1, dt * 2) + dt * 0.12;
    g.rotation.x += (-mouse.current.y * 0.3 - g.rotation.x) * Math.min(1, dt * 2);
  });

  return (
    <group ref={group}>
      <Orb mouse={mouse} scroll={scroll} pulse={pulse} dark={dark} />
      <Wire dark={dark} />
      <Rings dark={dark} />
      <Particles dark={dark} />
    </group>
  );
}

export default function HeroScene({ progress, active, onReady }: { progress: RefObject<number>; active: boolean; onReady?: () => void }) {
  const mouse = useRef({ x: 0, y: 0 });
  const pulse = useRef(0);
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
    return () => {
      mo.disconnect();
      window.removeEventListener("pointermove", move);
      window.removeEventListener("pointerdown", down);
    };
  }, []);

  return (
    <Canvas
      dpr={[1, 1.6]}
      frameloop={active ? (reduce ? "demand" : "always") : "never"}
      camera={{ position: [0, 0, 8], fov: 42 }}
      gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
      style={{ pointerEvents: "none" }}
      onCreated={() => onReady?.()}
    >
      <Rig mouse={mouse} scroll={progress} pulse={pulse} dark={dark} />
    </Canvas>
  );
}
