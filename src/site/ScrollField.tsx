import { useEffect, useRef, type RefObject } from "react";
import type { Lang } from "../data/site";
import type { Group } from "./ProjectGraph";

type Tint = [number, number, number];

const TINT: Record<Group | "none", Tint> = {
  none: [150, 210, 180],
  security: [78, 205, 178],
  learning: [238, 170, 79],
  other: [163, 180, 230],
};

const RINGS = [
  { x: 0.04, y: 0.1, r: 190, s: 0.2, a: 0.6, turn: 1 },
  { x: 0.97, y: 0.34, r: 250, s: 0.11, a: 2.4, turn: -1 },
  { x: 0.5, y: 0.58, r: 130, s: 0.3, a: 4.1, turn: 1 },
  { x: 0.08, y: 0.8, r: 280, s: 0.15, a: 1.5, turn: -1 },
];

const SCALE = 330;
const LEVELS = 15;
const LEVEL_STEP = 0.22;
const LEVEL_FROM = -1.54;
// Edge pairs per marching-squares case. Edges: 0 top, 1 right, 2 bottom, 3 left.
const SEGMENTS = [[], [3, 2], [2, 1], [3, 1], [0, 1], [3, 0, 2, 1], [0, 2], [3, 0], [3, 0], [0, 2], [0, 1, 3, 2], [0, 1], [3, 1], [2, 1], [3, 2], []];

function terrain(x: number, y: number, z: number) {
  const wx = x + 0.6 * Math.sin(y * 0.7 + z * 0.9);
  const wy = y + 0.6 * Math.cos(x * 0.6 - z * 0.7);
  return Math.sin(wx * 1.1 + z * 0.5) * Math.cos(wy * 0.9 - z * 0.35) + 0.55 * Math.sin(wx * 2.1 - wy * 1.3 + z * 0.8) + 0.3 * Math.cos(wy * 3.1 + wx * 0.7 - z * 1.1);
}

interface Props {
  focus: Group | null;
  lang: Lang;
  text: RefObject<HTMLElement | null>;
}

export default function ScrollField({ focus, lang, text }: Props) {
  const canvas = useRef<HTMLCanvasElement>(null);
  const target = useRef<Group | null>(focus);
  const kick = useRef<() => void>(() => {});

  useEffect(() => {
    target.current = focus;
    kick.current();
  }, [focus, lang]);

  useEffect(() => {
    const cv = canvas.current!;
    const ctx = cv.getContext("2d")!;
    const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
    let w = 0;
    let h = 0;
    let cell = 16;
    let cols = 0;
    let rows = 0;
    let grid = new Float32Array(0);
    let raf = 0;
    let last = 0;
    // The field arrives by flowing into place; after that it trails the scroll on a critically damped spring.
    let pos = reduce ? 0 : window.scrollY - 260;
    let vel = 0;
    const tint: Tint = [...TINT[target.current ?? "none"]];

    const contours = (major: boolean) => {
      ctx.beginPath();
      for (let n = 0; n < LEVELS; n++) {
        if ((n % 4 === 0) !== major) continue;
        const level = LEVEL_FROM + n * LEVEL_STEP;
        for (let j = 0; j < rows; j++) {
          for (let i = 0; i < cols; i++) {
            const top = j * (cols + 1) + i;
            const bottom = top + cols + 1;
            const a = grid[top];
            const b = grid[top + 1];
            const c = grid[bottom + 1];
            const d = grid[bottom];
            const kind = (a > level ? 8 : 0) | (b > level ? 4 : 0) | (c > level ? 2 : 0) | (d > level ? 1 : 0);
            if (kind === 0 || kind === 15) continue;
            const x = i * cell;
            const y = j * cell;
            const edge = SEGMENTS[kind];
            for (let e = 0; e < edge.length; e++) {
              const side = edge[e];
              const px = side === 0 ? x + (cell * (level - a)) / (b - a) : side === 1 ? x + cell : side === 2 ? x + (cell * (level - d)) / (c - d) : x;
              const py = side === 0 ? y : side === 1 ? y + (cell * (level - b)) / (c - b) : side === 2 ? y + cell : y + (cell * (level - a)) / (d - a);
              if (e % 2 === 0) ctx.moveTo(px, py);
              else ctx.lineTo(px, py);
            }
          }
        }
      }
      ctx.lineWidth = major ? 1.3 : 0.8;
      ctx.strokeStyle = `rgba(${tint.join(",")},${major ? 0.24 : 0.13})`;
      ctx.stroke();
    };

    const rings = () => {
      const size = w < 700 ? 0.62 : 1;
      const margin = 300 * size;
      const span = h + margin * 2;
      const color = tint.join(",");
      for (const ring of RINGS) {
        const r = ring.r * size;
        const cx = ring.x * w;
        const cy = ((((ring.y * span - pos * ring.s) % span) + span) % span) - margin;
        ctx.lineWidth = 1;
        ctx.setLineDash([3, 7]);
        ctx.lineDashOffset = pos * ring.s * 0.4 * ring.turn;
        ctx.strokeStyle = `rgba(${color},.22)`;
        ctx.beginPath();
        ctx.arc(cx, cy, r, 0, Math.PI * 2);
        ctx.stroke();
        ctx.setLineDash([]);
        ctx.strokeStyle = `rgba(${color},.14)`;
        ctx.beginPath();
        ctx.arc(cx, cy, r * 0.62, 0, Math.PI * 2);
        ctx.stroke();
        const turn = ring.a + pos * 0.0019 * ring.turn;
        ctx.fillStyle = `rgba(${color},.62)`;
        ctx.beginPath();
        ctx.arc(cx + Math.cos(turn) * r, cy + Math.sin(turn) * r, 3.5, 0, Math.PI * 2);
        ctx.moveTo(cx - Math.cos(turn * 1.4) * r * 0.62 + 2.5, cy - Math.sin(turn * 1.4) * r * 0.62);
        ctx.arc(cx - Math.cos(turn * 1.4) * r * 0.62, cy - Math.sin(turn * 1.4) * r * 0.62, 2.5, 0, Math.PI * 2);
        ctx.fill();
      }
    };

    // Quiets the lines behind the text column so reading stays easy.
    const clearText = () => {
      const box = text.current?.getBoundingClientRect();
      if (!box) return;
      const left = Math.max(box.left - 70, 0);
      const right = Math.min(box.right + 70, w);
      const fade = ctx.createLinearGradient(left, 0, right, 0);
      const edge = 70 / (right - left);
      fade.addColorStop(0, "rgba(0,0,0,0)");
      fade.addColorStop(edge, "rgba(0,0,0,.5)");
      fade.addColorStop(1 - edge, "rgba(0,0,0,.5)");
      fade.addColorStop(1, "rgba(0,0,0,0)");
      ctx.globalCompositeOperation = "destination-out";
      ctx.fillStyle = fade;
      ctx.fillRect(left, 0, right - left, h);
      ctx.globalCompositeOperation = "source-over";
    };

    const draw = () => {
      const shift = pos * 0.22;
      const z = pos * 0.00085;
      for (let j = 0; j <= rows; j++) {
        for (let i = 0; i <= cols; i++) {
          grid[j * (cols + 1) + i] = terrain((i * cell) / SCALE, (j * cell + shift) / SCALE, z);
        }
      }
      ctx.clearRect(0, 0, w, h);
      ctx.lineCap = "round";
      contours(false);
      contours(true);
      rings();
      clearText();
    };

    const frame = (now: number) => {
      raf = 0;
      const dt = last ? Math.min((now - last) / 1000, 0.04) : 1 / 60;
      last = now;
      const goal = window.scrollY;
      const omega = 9;
      vel += (omega * omega * (goal - pos) - 2 * omega * vel) * dt;
      pos += vel * dt;
      const wanted = TINT[target.current ?? "none"];
      let shade = 0;
      for (let c = 0; c < 3; c++) {
        tint[c] += (wanted[c] - tint[c]) * Math.min(dt * 5, 1);
        shade += Math.abs(wanted[c] - tint[c]);
      }
      draw();
      if (Math.abs(goal - pos) > 0.3 || Math.abs(vel) > 1 || shade > 1) raf = requestAnimationFrame(frame);
      else last = 0;
    };

    const start = () => {
      if (reduce) {
        tint.splice(0, 3, ...TINT[target.current ?? "none"]);
        draw();
      } else if (!raf) {
        raf = requestAnimationFrame(frame);
      }
    };
    kick.current = start;

    const size = new ResizeObserver(() => {
      const box = cv.getBoundingClientRect();
      w = box.width;
      h = box.height;
      const dpr = Math.min(devicePixelRatio || 1, w < 700 ? 1.5 : 2);
      cv.width = w * dpr;
      cv.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      cell = w < 700 ? 13 : 12;
      cols = Math.ceil(w / cell);
      rows = Math.ceil(h / cell);
      grid = new Float32Array((cols + 1) * (rows + 1));
      draw();
      start();
    });
    size.observe(cv);

    if (!reduce) window.addEventListener("scroll", start, { passive: true });
    return () => {
      size.disconnect();
      window.removeEventListener("scroll", start);
      cancelAnimationFrame(raf);
      kick.current = () => {};
    };
  }, [text]);

  return (
    <div className="field" aria-hidden="true" data-focus={focus ?? "none"}>
      <i className="is-security" />
      <i className="is-learning" />
      <i className="is-other" />
      <canvas ref={canvas} />
    </div>
  );
}
