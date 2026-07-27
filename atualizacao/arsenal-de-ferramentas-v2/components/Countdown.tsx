"use client";

import { useEffect, useState } from "react";

export default function Countdown() {
  const [seconds, setSeconds] = useState(59 * 60 + 59);
  useEffect(() => {
    const id = window.setInterval(() => setSeconds((value) => value > 0 ? value - 1 : 59 * 60 + 59), 1000);
    return () => window.clearInterval(id);
  }, []);
  const units = [
    ["HOR", Math.floor(seconds / 3600)],
    ["MIN", Math.floor((seconds % 3600) / 60)],
    ["SEG", seconds % 60]
  ] as const;
  return <div className="mt-7 flex justify-center gap-3">{units.map(([label, value]) => <div key={label} className="min-w-20 rounded-xl border border-[#FFC107]/50 bg-black/50 px-4 py-3"><strong className="block text-2xl text-[#FFC107]">{String(value).padStart(2, "0")}</strong><span className="text-[10px] tracking-[.25em] text-zinc-400">{label}</span></div>)}</div>;
}
