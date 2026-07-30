import Image from "next/image";
import { WHATSAPP_LINK } from "@/lib/constants";

export default function Home() {
  return (
    <main className="landing-shell">
      <section className="landing-poster" aria-label="Arsenal de Ferramentas">
        <Image
          src="/arsenal-site.png"
          alt="Arsenal de Ferramentas: produtos com 50%, 60% e 70% de desconto, grupo gratuito e sem spam"
          width={832}
          height={1800}
          priority
          className="poster-image"
          sizes="(max-width: 832px) 100vw, 832px"
        />

        <a
          href={WHATSAPP_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="poster-cta"
          aria-label="Entrar no grupo Arsenal de Ferramentas no WhatsApp"
        >
          <span className="sr-only">Entrar no grupo</span>
        </a>
      </section>
    </main>
  );
}
