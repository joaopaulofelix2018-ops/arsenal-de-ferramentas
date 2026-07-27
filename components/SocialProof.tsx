"use client";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
const messages=["João de São Paulo acabou de entrar no grupo","Carlos de Curitiba aproveitou uma oferta Bosch","Marcos de Campinas economizou em uma Makita"];
export default function SocialProof(){const [index,setIndex]=useState(0);useEffect(()=>{const id=window.setInterval(()=>setIndex(v=>(v+1)%messages.length),5000);return()=>window.clearInterval(id)},[]);return <div className="pointer-events-none fixed bottom-24 left-3 z-40 max-w-[calc(100vw-6rem)] sm:left-5"><AnimatePresence mode="wait"><motion.div key={index} initial={{opacity:0,y:15}} animate={{opacity:1,y:0}} exit={{opacity:0,y:8}} transition={{duration:.25}} className="rounded-xl border border-[#FFC107]/50 bg-zinc-950/95 px-4 py-3 text-xs text-zinc-200 shadow-xl backdrop-blur sm:text-sm">🔥 {messages[index]}</motion.div></AnimatePresence></div>}
