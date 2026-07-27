import { ArrowRight, BadgeCheck, CheckCircle2, Clock3, Users } from "lucide-react";
import { WHATSAPP_LINK } from "@/lib/constants";
import Countdown from "./Countdown";

export default function Hero() {
  return (
    <section id="inicio" className="relative isolate overflow-hidden px-4 pb-14 pt-28 sm:px-6 sm:pt-36 lg:pb-24">
      <div className="absolute inset-0 -z-20 bg-[#0B0B0B]" />
      <div className="absolute left-1/2 top-20 -z-10 h-72 w-72 -translate-x-1/2 rounded-full bg-[#FFC107]/10 blur-3xl sm:h-96 sm:w-96" />

      <div className="mx-auto max-w-5xl text-center">
        <div className="mx-auto flex w-fit items-center gap-2 rounded-full border border-[#FFC107]/35 bg-[#FFC107]/10 px-4 py-2 text-xs font-black uppercase tracking-[.14em] text-[#FFC107] sm:text-sm">
          <BadgeCheck size={17} /> Grupo VIP gratuito no WhatsApp
        </div>

        <a
          href={WHATSAPP_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-[#FFC107] px-7 py-4 text-base font-black text-black shadow-[0_0_34px_rgba(255,193,7,.28)] transition hover:-translate-y-1 hover:brightness-110 sm:w-auto sm:px-10 sm:py-5 sm:text-lg"
        >
          Entrar no Grupo VIP <ArrowRight size={22} />
        </a>

        <p className="mt-3 text-xs font-semibold text-zinc-400 sm:text-sm">Acesso gratuito • Sem spam • Saia quando quiser</p>

        <h1 className="mt-7 text-4xl font-black leading-[1.06] text-white sm:text-5xl lg:text-7xl">
          As melhores ofertas de ferramentas <span className="text-[#FFC107]">antes que acabem</span>
        </h1>

        <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-zinc-300 sm:mt-6 sm:text-xl">
          Receba promoções selecionadas de Bosch, Makita, DeWalt, Stanley e outras grandes marcas diretamente no WhatsApp.
        </p>

        <div className="mx-auto mt-7 grid max-w-2xl grid-cols-3 gap-2 sm:gap-4">
          <div className="rounded-xl border border-white/10 bg-white/[.035] px-2 py-3 text-center">
            <Users className="mx-auto text-[#FFC107]" size={20} />
            <strong className="mt-1 block text-sm text-white sm:text-base">Grupo ativo</strong>
          </div>
          <div className="rounded-xl border border-white/10 bg-white/[.035] px-2 py-3 text-center">
            <CheckCircle2 className="mx-auto text-[#FFC107]" size={20} />
            <strong className="mt-1 block text-sm text-white sm:text-base">Ofertas filtradas</strong>
          </div>
          <div className="rounded-xl border border-white/10 bg-white/[.035] px-2 py-3 text-center">
            <Clock3 className="mx-auto text-[#FFC107]" size={20} />
            <strong className="mt-1 block text-sm text-white sm:text-base">Todos os dias</strong>
          </div>
        </div>

        <p className="mt-7 text-sm font-semibold text-zinc-300">Próxima seleção de ofertas em:</p>
        <Countdown />
      </div>
    </section>
  );
}
