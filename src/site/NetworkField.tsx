import { useEffect, useRef } from "react";

type Node = { x: number; y: number; vx: number; vy: number; ox: number; oy: number };

const LINK = 118;
const REACH = 190;

// The banner's network, alive: the pointer becomes a node that the mesh links to.
export default function NetworkField() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current!;
    const ctx = canvas.getContext("2d")!;
    const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
    const fine = matchMedia("(hover: hover) and (pointer: fine)").matches;
    let w = 0;
    let h = 0;
    let nodes: Node[] = [];
    let raf = 0;
    let last = performance.now();
    // Critically damped, so the pointer node trails without overshooting.
    const pointer = { x: -999, y: -999, vx: 0, vy: 0, tx: -999, ty: -999, on: 0, target: 0 };
    let seed = 41;
    const rnd = () => (seed = (seed * 16807) % 2147483647) / 2147483647;

    const build = () => {
      const rect = canvas.parentElement!.getBoundingClientRect();
      w = rect.width;
      h = rect.height;
      const dpr = Math.min(devicePixelRatio || 1, 2);
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      seed = 41;
      const wanted = Math.round((w * h) / 7200);
      nodes = [];
      for (let tries = 0; nodes.length < wanted && tries < wanted * 40; tries++) {
        const x = rnd() * w;
        const y = rnd() * h;
        if (nodes.every((n) => Math.hypot(n.x - x, n.y - y) > 46)) {
          nodes.push({ x, y, ox: x, oy: y, vx: (rnd() - 0.5) * 5, vy: (rnd() - 0.5) * 5 });
        }
      }
    };

    const draw = () => {
      ctx.clearRect(0, 0, w, h);
      for (let i = 0; i < nodes.length; i++) {
        const a = nodes[i];
        for (let j = i + 1; j < nodes.length; j++) {
          const b = nodes[j];
          const d = Math.hypot(a.x - b.x, a.y - b.y);
          if (d < LINK) {
            ctx.strokeStyle = `rgba(32,64,128,${0.17 * (1 - d / LINK)})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }
      for (const n of nodes) {
        const d = Math.hypot(n.x - pointer.x, n.y - pointer.y);
        const near = pointer.on * Math.max(0, 1 - d / REACH);
        if (near > 0) {
          ctx.strokeStyle = `rgba(14,150,128,${0.75 * near})`;
          ctx.lineWidth = 1.3;
          ctx.beginPath();
          ctx.moveTo(pointer.x, pointer.y);
          ctx.lineTo(n.x, n.y);
          ctx.stroke();
        }
        ctx.fillStyle = near > 0.02 ? `rgba(14,150,128,${0.45 + 0.55 * near})` : "rgba(32,64,128,.42)";
        ctx.beginPath();
        ctx.arc(n.x, n.y, 1.8 + 1.4 * near, 0, 7);
        ctx.fill();
      }
      if (pointer.on > 0.01) {
        ctx.fillStyle = `rgba(14,150,128,${pointer.on})`;
        ctx.beginPath();
        ctx.arc(pointer.x, pointer.y, 4, 0, 7);
        ctx.fill();
        ctx.strokeStyle = `rgba(14,150,128,${0.4 * pointer.on})`;
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.arc(pointer.x, pointer.y, 20, 0, 7);
        ctx.stroke();
      }
    };

    const tick = (now: number) => {
      const dt = Math.min((now - last) / 1000, 0.05);
      last = now;
      const omega = 16;
      pointer.vx += (omega * omega * (pointer.tx - pointer.x) - 2 * omega * pointer.vx) * dt;
      pointer.vy += (omega * omega * (pointer.ty - pointer.y) - 2 * omega * pointer.vy) * dt;
      pointer.x += pointer.vx * dt;
      pointer.y += pointer.vy * dt;
      pointer.on += (pointer.target - pointer.on) * Math.min(dt * 9, 1);
      for (const n of nodes) {
        n.x += n.vx * dt;
        n.y += n.vy * dt;
        if (Math.abs(n.x - n.ox) > 22) n.vx *= -1;
        if (Math.abs(n.y - n.oy) > 22) n.vy *= -1;
      }
      draw();
      raf = requestAnimationFrame(tick);
    };

    const start = () => {
      cancelAnimationFrame(raf);
      last = performance.now();
      raf = requestAnimationFrame(tick);
    };
    const onMove = (e: PointerEvent) => {
      const r = canvas.getBoundingClientRect();
      const x = e.clientX - r.left;
      const y = e.clientY - r.top;
      if (pointer.target === 0 && pointer.on < 0.02) {
        pointer.x = x;
        pointer.y = y;
        pointer.vx = pointer.vy = 0;
      }
      pointer.tx = x;
      pointer.ty = y;
      pointer.target = y < r.height ? 1 : 0;
    };
    const onLeave = () => {
      pointer.target = 0;
    };
    const onVisibility = () => {
      if (document.hidden) cancelAnimationFrame(raf);
      else if (!reduce) start();
    };
    const onResize = () => {
      build();
      if (reduce) draw();
    };

    build();
    if (reduce) {
      draw();
    } else {
      start();
      if (fine) {
        window.addEventListener("pointermove", onMove, { passive: true });
        document.documentElement.addEventListener("pointerleave", onLeave);
      }
    }
    document.addEventListener("visibilitychange", onVisibility);
    window.addEventListener("resize", onResize);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("pointermove", onMove);
      document.documentElement.removeEventListener("pointerleave", onLeave);
      document.removeEventListener("visibilitychange", onVisibility);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <div className="field" aria-hidden="true">
      <canvas ref={ref} />
    </div>
  );
}
