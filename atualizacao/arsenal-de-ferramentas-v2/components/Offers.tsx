import { WHATSAPP_LINK } from "@/lib/constants";
import SafeImage from "./SafeImage";

const products = [
  {
    brand: "Bosch",
    name: "Parafusadeira 18V profissional",
    old: "R$ 899,90",
    price: "R$ 599,90",
    discount: "33% OFF",
    image: "https://images.unsplash.com/photo-1572981779307-38b8cabb2407?auto=format&fit=crop&w=1000&q=85",
  },
  {
    brand: "Makita",
    name: "Kit furadeira e parafusadeira",
    old: "R$ 1.499,90",
    price: "R$ 999,90",
    discount: "33% OFF",
    image: "https://images.unsplash.com/photo-1504148455328-c376907d081c?auto=format&fit=crop&w=1000&q=85",
  },
  {
    brand: "DeWalt",
    name: "Furadeira de impacto profissional",
    old: "R$ 799,90",
    price: "R$ 549,90",
    discount: "31% OFF",
    image: "https://images.unsplash.com/photo-1530124566582-a618bc2615dc?auto=format&fit=crop&w=1000&q=85",
  },
  {
    brand: "Stanley",
    name: "Nível laser profissional",
    old: "R$ 699,90",
    price: "R$ 399,90",
    discount: "43% OFF",
    image: "https://images.unsplash.com/photo-1586864387967-d02ef85d93e8?auto=format&fit=crop&w=1000&q=85",
  },
];

export default function Offers() {
  return (
    <section id="ofertas" className="bg-zinc-950 px-4 py-16 sm:px-6 sm:py-20">
      <div className="mx-auto max-w-7xl">
        <h2 className="text-center text-3xl font-black sm:text-4xl">Ofertas em <span className="text-[#FFC107]">destaque</span></h2>
        <p className="mx-auto mt-3 max-w-xl text-center text-zinc-400">Fotos reais ilustrativas do tipo de promoção compartilhada no grupo.</p>

        <div className="mt-9 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {products.map((p) => (
            <article key={p.name} className="overflow-hidden rounded-2xl border border-white/10 bg-[#111] transition hover:-translate-y-1 hover:border-[#FFC107]/60">
              <SafeImage
                src={p.image}
                alt={`${p.brand} ${p.name}`}
                width={800}
                height={600}
                sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 25vw"
                wrapperClassName="aspect-[4/3] w-full bg-white"
                className="h-full w-full object-cover"
              />

              <div className="p-5">
                <div className="flex items-center justify-between gap-3">
                  <span className="font-black text-[#FFC107]">{p.brand}</span>
                  <span className="rounded-md bg-[#FFC107] px-2 py-1 text-xs font-black text-black">{p.discount}</span>
                </div>
                <h3 className="mt-2 min-h-12 font-bold text-white">{p.name}</h3>
                <p className="mt-4 text-sm text-zinc-500 line-through">{p.old}</p>
                <p className="text-2xl font-black text-white">{p.price}</p>
                <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="mt-5 block rounded-xl bg-[#FFC107] py-3 text-center font-black text-black transition hover:brightness-110">
                  Ver Oferta
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
