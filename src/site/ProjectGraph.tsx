import { useEffect, useRef, useState } from "react";
import { profile, type Project } from "../data/site";
import { getImagePath } from "../utils/paths";

export type Group = "security" | "learning" | "other";
export interface GraphNode {
  project: Project;
  group: Group;
  x: number;
  y: number;
}

const COLOR: Record<Group, string> = { security: "78,205,178", learning: "238,170,79", other: "163,180,230" };

interface Body {
  x: number; y: number; vx: number; vy: number; rx: number; ry: number;
  phase: number; drag: boolean; bouncy: boolean; lit: number;
}

interface Props {
  nodes: GraphNode[];
  active: string | null;
  focus: Group | null;
  onActive: (id: string | null) => void;
  label: string;
  open: string;
  code: string;
  tagline: (p: Project) => string;
}

export default function ProjectGraph({ nodes, active, focus, onActive, label, open, code, tagline }: Props) {
  const box = useRef<HTMLDivElement>(null);
  const canvas = useRef<HTMLCanvasElement>(null);
  const els = useRef<(HTMLAnchorElement | null)[]>([]);
  const state = useRef({ active, focus });
  useEffect(() => {
    state.current = { active, focus };
  }, [active, focus]);

  useEffect(() => {
    const host = box.current!;
    const cv = canvas.current!;
    const ctx = cv.getContext("2d")!;
    const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
    const noHover = matchMedia("(hover: none)").matches;
    let w = 0;
    let h = 0;
    let raf = 0;
    let last = performance.now();
    const born = last;
    let mesh: { x: number; y: number }[] = [];
    let meshEdges: [number, number, number][] = [];
    const pointer = { x: -999, y: -999, on: false };
    const bodies: Body[] = nodes.map((_, i) => ({ x: 0, y: 0, vx: 0, vy: 0, rx: 0, ry: 0, phase: i * 1.7, drag: false, bouncy: false, lit: 0 }));

    const layout = () => {
      const r = host.getBoundingClientRect();
      w = r.width;
      h = r.height;
      const dpr = Math.min(devicePixelRatio || 1, 2);
      cv.width = w * dpr;
      cv.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const pull = w < 460 ? 0.8 : 1;
      nodes.forEach((n, i) => {
        const b = bodies[i];
        const rx = w * (0.5 + (n.x - 0.5) * pull);
        const ry = h * n.y;
        if (b.rx === 0) {
          b.x = rx;
          b.y = ry;
        }
        b.rx = rx;
        b.ry = ry;
      });
      let seed = 23;
      const rnd = () => (seed = (seed * 16807) % 2147483647) / 2147483647;
      mesh = [];
      const wanted = Math.round((w * h) / 5200);
      for (let t = 0; mesh.length < wanted && t < wanted * 40; t++) {
        const p = { x: rnd() * w, y: rnd() * h };
        if (mesh.every((m) => Math.hypot(m.x - p.x, m.y - p.y) > 34)) mesh.push(p);
      }
      meshEdges = [];
      mesh.forEach((a, i) => {
        mesh.forEach((b, j) => {
          const d = Math.hypot(a.x - b.x, a.y - b.y);
          if (j > i && d < 74) meshEdges.push([i, j, d]);
        });
      });
    };

    const frame = (now: number) => {
      const dt = Math.min((now - last) / 1000, 0.04);
      last = now;
      const t = (now - born) / 1000;
      const { active: act, focus: foc } = state.current;
      const cx = w / 2;
      const cy = h / 2;

      nodes.forEach((n, i) => {
        const b = bodies[i];
        const on = act === n.project.id ? 1 : 0;
        b.lit += (on - b.lit) * Math.min(dt * 12, 1);
        if (!b.drag) {
          const float = reduce ? 0 : 5;
          let tx = b.rx + Math.cos(t * 0.55 + b.phase) * float;
          let ty = b.ry + Math.sin(t * 0.7 + b.phase) * float;
          if (pointer.on && !reduce) {
            const d = Math.hypot(pointer.x - b.rx, pointer.y - b.ry);
            const pulled = Math.max(0, 1 - d / 150) * 16;
            if (d > 1) {
              tx += ((pointer.x - b.rx) / d) * pulled;
              ty += ((pointer.y - b.ry) / d) * pulled;
            }
          }
          // Critically damped by default; a little bounce only after a thrown release.
          const omega = b.bouncy ? 11 : 13;
          const zeta = b.bouncy ? 0.62 : 1;
          b.vx += (omega * omega * (tx - b.x) - 2 * zeta * omega * b.vx) * dt;
          b.vy += (omega * omega * (ty - b.y) - 2 * zeta * omega * b.vy) * dt;
          b.x += b.vx * dt;
          b.y += b.vy * dt;
          if (b.bouncy && Math.hypot(b.vx, b.vy) < 6 && Math.hypot(tx - b.x, ty - b.y) < 2) b.bouncy = false;
        }
        const el = els.current[i];
        if (el) {
          el.style.translate = `${b.x}px ${b.y}px`;
          const dim = (act && act !== n.project.id) || (!act && foc && foc !== n.group);
          el.dataset.dim = dim ? "true" : "false";
          el.dataset.on = on ? "true" : "false";
        }
      });

      ctx.clearRect(0, 0, w, h);
      const meshIn = reduce ? 1 : Math.min(t / 1.1, 1);
      ctx.lineWidth = 1;
      ctx.strokeStyle = `rgba(170,220,195,${0.075 * meshIn})`;
      ctx.beginPath();
      for (const [i, j] of meshEdges) {
        ctx.moveTo(mesh[i].x, mesh[i].y);
        ctx.lineTo(mesh[j].x, mesh[j].y);
      }
      ctx.stroke();
      ctx.fillStyle = `rgba(170,220,195,${0.2 * meshIn})`;
      for (const m of mesh) {
        ctx.beginPath();
        ctx.arc(m.x, m.y, 1.3, 0, 7);
        ctx.fill();
      }

      nodes.forEach((n, i) => {
        const b = bodies[i];
        const enter = reduce ? 1 : easeOut(Math.max(0, Math.min((t - 0.15 - i * 0.09) / 0.7, 1)));
        const dim = (act && act !== n.project.id) || (!act && foc && foc !== n.group);
        const base = dim ? 0.14 : 0.5;
        const alpha = base + b.lit * 0.5;
        const ex = cx + (b.x - cx) * enter;
        const ey = cy + (b.y - cy) * enter;
        ctx.strokeStyle = `rgba(${COLOR[n.group]},${alpha})`;
        ctx.lineWidth = 1.4 + b.lit * 1.2;
        ctx.beginPath();
        ctx.moveTo(cx, cy);
        ctx.lineTo(ex, ey);
        ctx.stroke();
        if (!reduce && enter === 1) {
          for (let k = 0; k < 2; k++) {
            const p = (t * (0.16 + i * 0.012) + k / 2 + b.phase) % 1;
            ctx.fillStyle = `rgba(${COLOR[n.group]},${Math.min(alpha + 0.25, 1)})`;
            ctx.beginPath();
            ctx.arc(cx + (b.x - cx) * p, cy + (b.y - cy) * p, 2.3 + b.lit, 0, 7);
            ctx.fill();
          }
        }
      });
      if (!reduce) raf = requestAnimationFrame(frame);
    };
    const easeOut = (x: number) => 1 - Math.pow(1 - x, 4);

    const start = () => {
      cancelAnimationFrame(raf);
      last = performance.now();
      raf = requestAnimationFrame(frame);
    };

    const toLocal = (e: PointerEvent) => {
      const r = host.getBoundingClientRect();
      return { x: e.clientX - r.left, y: e.clientY - r.top };
    };
    const onMove = (e: PointerEvent) => {
      if (e.pointerType !== "mouse") return;
      const p = toLocal(e);
      pointer.x = p.x;
      pointer.y = p.y;
      pointer.on = p.x > 0 && p.y > 0 && p.x < w && p.y < h;
    };

    const cleanups = nodes.map((_, i) => {
      const el = els.current[i]!;
      const b = bodies[i];
      let grab = { x: 0, y: 0 };
      let startAt = { x: 0, y: 0 };
      let moved = false;
      let history: { x: number; y: number; t: number }[] = [];
      const down = (e: PointerEvent) => {
        if (reduce || e.button !== 0) return;
        el.setPointerCapture(e.pointerId);
        const p = toLocal(e);
        grab = { x: p.x - b.x, y: p.y - b.y };
        startAt = p;
        moved = false;
        b.drag = true;
        b.bouncy = false;
        b.vx = b.vy = 0;
        history = [{ ...p, t: e.timeStamp }];
        el.dataset.drag = "true";
      };
      const move = (e: PointerEvent) => {
        if (!b.drag) return;
        const p = toLocal(e);
        if (Math.hypot(p.x - startAt.x, p.y - startAt.y) > 6) moved = true;
        const nx = p.x - grab.x;
        const ny = p.y - grab.y;
        const band = (v: number, lo: number, hi: number) => {
          if (v < lo) return lo - rubber(lo - v);
          if (v > hi) return hi + rubber(v - hi);
          return v;
        };
        b.x = band(nx, 24, w - 24);
        b.y = band(ny, 24, h - 24);
        history.push({ ...p, t: e.timeStamp });
        if (history.length > 5) history.shift();
      };
      const rubber = (o: number) => (o * 120 * 0.55) / (120 + 0.55 * o);
      const up = () => {
        if (!b.drag) return;
        b.drag = false;
        el.dataset.drag = "false";
        const a = history[0];
        const z = history[history.length - 1];
        const span = Math.max(z.t - a.t, 1) / 1000;
        b.vx = (z.x - a.x) / span;
        b.vy = (z.y - a.y) / span;
        b.bouncy = Math.hypot(b.vx, b.vy) > 60 || moved;
      };
      const click = (e: MouseEvent) => {
        if (moved) {
          e.preventDefault();
        } else if (noHover) {
          // Phones have no hover, so the first tap previews the project instead of leaving the page.
          e.preventDefault();
          onActive(state.current.active === nodes[i].project.id ? null : nodes[i].project.id);
        }
      };
      el.addEventListener("pointerdown", down);
      el.addEventListener("pointermove", move);
      el.addEventListener("pointerup", up);
      el.addEventListener("pointercancel", up);
      el.addEventListener("click", click);
      return () => {
        el.removeEventListener("pointerdown", down);
        el.removeEventListener("pointermove", move);
        el.removeEventListener("pointerup", up);
        el.removeEventListener("pointercancel", up);
        el.removeEventListener("click", click);
      };
    });

    const ro = new ResizeObserver(() => {
      layout();
      if (reduce) frame(performance.now());
    });
    ro.observe(host);
    layout();
    if (reduce) frame(performance.now());
    else start();
    window.addEventListener("pointermove", onMove, { passive: true });
    const vis = () => {
      if (document.hidden) cancelAnimationFrame(raf);
      else if (!reduce) start();
    };
    document.addEventListener("visibilitychange", vis);
    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      window.removeEventListener("pointermove", onMove);
      document.removeEventListener("visibilitychange", vis);
      cleanups.forEach((c) => c());
    };
  }, [nodes, onActive]);

  const shown = nodes.find((n) => n.project.id === active && n.project.image);
  const [card, setCard] = useState<Project | null>(null);
  if (shown && shown.project !== card) setCard(shown.project);

  return (
    <>
    <div ref={box} className="graph" role="group" aria-label={label}>
      <canvas ref={canvas} aria-hidden="true" />
      <div className="hub" aria-hidden="true">
        <i /><i />
        <img src={getImagePath(profile.photo)} alt="" width="72" height="72" />
      </div>
      {nodes.map((n, i) => (
        <a
          key={n.project.id}
          ref={(el) => { els.current[i] = el; }}
          href={n.project.demoLink ?? n.project.link}
          className={`gnode is-${n.group}`}
          style={{ "--i": i } as React.CSSProperties}
          draggable={false}
          onPointerEnter={(e) => { if (e.pointerType === "mouse") onActive(n.project.id); }}
          onPointerLeave={(e) => { if (e.pointerType === "mouse") onActive(null); }}
          onFocus={(e) => { if (e.currentTarget.matches(":focus-visible")) onActive(n.project.id); }}
          onBlur={(e) => { if (e.currentTarget.matches(":hover") || !matchMedia("(hover: none)").matches) onActive(null); }}
        >
          <b />
          <span>{n.project.title}</span>
        </a>
      ))}
      <div className="glimpse" data-on={!!shown} aria-hidden="true">
        {nodes.filter((n) => n.project.image).map((n) => (
          <img key={n.project.id} src={getImagePath(n.project.image!)} alt="" data-on={shown?.project.id === n.project.id} className={n.project.imageKind === "phone" ? "is-phone" : undefined} />
        ))}
      </div>
    </div>
    <div className="tapcard" data-on={!!shown}>
      <div>
        {card && (
          <>
            <img src={getImagePath(card.image!)} alt="" className={card.imageKind === "phone" ? "is-phone" : undefined} />
            <p><strong>{card.title}</strong> · {tagline(card)}</p>
            <p className="tapcard-links">
              <a href={card.demoLink ?? card.link}>{open}</a>
              {card.link && <a href={card.link} className="quiet">{code}</a>}
            </p>
          </>
        )}
      </div>
    </div>
    </>
  );
}
