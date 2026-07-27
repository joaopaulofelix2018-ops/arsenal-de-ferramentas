"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

const messages = [
  "João de São Paulo acabou de entrar no grupo",
  "Carlos de Curitiba aproveitou uma oferta Bosch",
  "Marcos de Campinas economizou em uma Makita",
];

export default function SocialProof() {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const first = window.setTimeout(() => setVisible(true), 7000);
    const rotation = window.setInterval(() => setIndex((value) => (value + 1) % messages.length), 6000);
    return () => {
      window.clearTimeout(first);
      window.clearInterval(rotation);
    };
  }, []);

  return (
    <div className="pointer-events-none fixed bottom-5 left-5 z-40 hidden max-w-sm sm:block">
      <AnimatePresence mode="wait">
        {visible && (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            transition={{ duration: 0.25 }}
            className="rounded-xl border border-[#FFC107]/50 bg-zinc-950/95 px-4 py-3 text-sm text-zinc-200 shadow-xl backdrop-blur"
          >
            🔥 {messages[index]}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
