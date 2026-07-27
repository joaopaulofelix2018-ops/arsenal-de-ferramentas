import { MessageCircle } from "lucide-react";
import { WHATSAPP_LINK } from "@/lib/constants";

export default function MobileStickyCTA() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-white/10 bg-black/95 p-3 backdrop-blur sm:hidden">
      <a
        href={WHATSAPP_LINK}
        target="_blank"
        rel="noopener noreferrer"
        className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#FFC107] px-5 py-4 font-black text-black shadow-lg"
      >
        <MessageCircle size={20} /> Entrar no Grupo VIP
      </a>
    </div>
  );
}
