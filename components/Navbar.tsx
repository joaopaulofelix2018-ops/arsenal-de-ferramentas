"use client";

import { Menu, X } from "lucide-react";
import { useState } from "react";
import { WHATSAPP_LINK } from "@/lib/constants";
import Logo from "./Logo";

const links = [
  ["Ofertas", "#ofertas"],
  ["Marcas", "#marcas"],
  ["Benefícios", "#beneficios"],
  ["Depoimentos", "#depoimentos"],
  ["FAQ", "#faq"]
] as const;

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#0B0B0B]/90 backdrop-blur-xl">
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6">
        <a href="#inicio" aria-label="Ir ao início"><Logo compact /></a>
        <div className="hidden items-center gap-7 lg:flex">
          {links.map(([label, href]) => <a key={href} href={href} className="text-sm text-zinc-300 transition hover:text-[#FFC107]">{label}</a>)}
          <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="rounded-xl bg-[#FFC107] px-5 py-3 font-extrabold text-black transition hover:-translate-y-0.5 hover:brightness-110">Entrar no Grupo VIP</a>
        </div>
        <button className="rounded-lg p-2 text-white lg:hidden" onClick={() => setOpen(!open)} aria-expanded={open} aria-label="Abrir menu">{open ? <X /> : <Menu />}</button>
      </nav>
      {open && (
        <div className="border-t border-white/10 bg-[#0B0B0B] px-4 pb-5 lg:hidden">
          {links.map(([label, href]) => <a key={href} href={href} onClick={() => setOpen(false)} className="block border-b border-white/5 py-4 text-zinc-200">{label}</a>)}
          <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="mt-4 block rounded-xl bg-[#FFC107] px-5 py-4 text-center font-extrabold text-black">Entrar no Grupo VIP</a>
        </div>
      )}
    </header>
  );
}
