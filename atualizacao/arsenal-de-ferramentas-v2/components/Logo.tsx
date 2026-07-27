import { OFFICIAL_LOGO } from "@/lib/constants";
import SafeImage from "./SafeImage";

export default function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <SafeImage
      src={OFFICIAL_LOGO}
      fallbackSrc="/logo-fallback.svg"
      alt="Logo oficial Arsenal de Ferramentas"
      width={compact ? 138 : 220}
      height={compact ? 58 : 92}
      priority
      sizes={compact ? "138px" : "220px"}
      wrapperClassName="shrink-0 rounded-lg bg-transparent"
      className="h-auto w-auto"
    />
  );
}
