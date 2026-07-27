"use client";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
const items=[
["O grupo é gratuito?","Sim. A entrada é totalmente gratuita."],
["Vocês vendem ferramentas?","Não. Compartilhamos links de ofertas encontradas em lojas e marketplaces."],
["As promoções são de lojas oficiais?","Priorizamos lojas conhecidas e vendedores confiáveis, mas recomendamos conferir as condições antes da compra."],
["Posso sair do grupo quando quiser?","Sim. Você pode sair a qualquer momento."],
["Tem spam no grupo?","Não. O foco é compartilhar ofertas de ferramentas."],
["Como recebo as promoções?","Depois de entrar, os alertas aparecem diretamente no seu WhatsApp."]
];
export default function FAQ(){const [open,setOpen]=useState<number|null>(0);return <section id="faq" className="bg-zinc-950 px-4 py-20 sm:px-6"><div className="mx-auto max-w-3xl"><h2 className="text-center text-3xl font-black sm:text-4xl">Perguntas frequentes</h2><div className="mt-10 space-y-3">{items.map(([q,a],i)=><div key={q} className="overflow-hidden rounded-2xl border border-white/10 bg-[#111]"><button onClick={()=>setOpen(open===i?null:i)} className="flex w-full items-center justify-between gap-4 p-5 text-left font-bold" aria-expanded={open===i}>{q}<ChevronDown className={`shrink-0 transition ${open===i?"rotate-180 text-[#FFC107]":""}`}/></button>{open===i&&<p className="px-5 pb-5 leading-7 text-zinc-400">{a}</p>}</div>)}</div></div></section>}
