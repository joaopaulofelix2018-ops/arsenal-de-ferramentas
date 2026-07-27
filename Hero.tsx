import { ArrowRight, CheckCircle2 } from "lucide-react";
import { WHATSAPP_LINK } from "@/lib/constants";
import Countdown from "./Countdown";
import Logo from "./Logo";

export default function Hero() {
  return (
    <section id="inicio" className="relative isolate overflow-hidden px-4 pb-20 pt-36 sm:px-6 lg:pb-28">
      <div className="absolute inset-0 -z-20 bg-[#0B0B0B]" />
      <div className="absolute left-1/2 top-24 -z-10 h-96 w-96 -translate-x-1/2 rounded-full bg-[#FFC107]/10 blur-3xl" />
      <div className="mx-auto max-w-5xl text-center">
        <div className="flex justify-center"><Logo /></div>
        <span className="mt-6 inline-flex rounded-full border border-[#FFC107]/30 bg-[#FFC107]/10 px-4 py-2 text-xs font-bold uppercase tracking-[.18em] text-[#FFC107]">Grupo VIP gratuito no WhatsApp</span>
        <h1 className="mt-7 text-4xl font-black leading-tight text-white sm:text-5xl lg:text-7xl">As melhores ofertas de ferramentas <span className="text-[#FFC107]">antes que acabem</span></h1>
        <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-zinc-300 sm:text-xl">Receba promoções selecionadas de Bosch, Makita, DeWalt, Stanley e outras grandes marcas diretamente no WhatsApp.</p>
        <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-[#FFC107] px-8 py-5 text-base font-black text-black shadow-glow transition hover:-translate-y-1 hover:brightness-110 sm:w-auto sm:text-lg">Entrar no Grupo VIP <ArrowRight size={21} /></a>
        <div className="mt-5 flex flex-wrap justify-center gap-x-5 gap-y-2 text-sm text-zinc-400"><span className="flex items-center gap-1"><CheckCircle2 size={16} className="text-[#FFC107]" /> Gratuito</span><span className="flex items-center gap-1"><CheckCircle2 size={16} className="text-[#FFC107]" /> Sem spam</span><span className="flex items-center gap-1"><CheckCircle2 size={16} className="text-[#FFC107]" /> Saia quando quiser</span></div>
        <p className="mt-9 text-sm font-semibold text-zinc-300">Próxima seleção de ofertas em:</p>
        <Countdown />
      </div>
    </section>
  );
}
