import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[var(--color-char)]">
      <div className="max-w-6xl mx-auto px-5 py-16 md:py-24 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <span className="inline-block font-[family-name:var(--font-mono)] text-xs text-[var(--color-parmesan)] uppercase tracking-widest mb-4">
            Bar de Pastas · Agronomía
          </span>

          <p className="mt-6 text-lg text-[var(--color-cream)]/80 max-w-md">
            Menú completo, promos del día y pedidos directos. Sin comisiones, sin vueltas.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="/menu"
              className="gradiente-lava text-[var(--color-cream)] px-6 py-3 rounded-full font-bold hover:brightness-110 transition"
            >
              Ver el menú
            </a>
            <a
              href="/reservas"
              className="border-2 border-[var(--color-cream)]/40 text-[var(--color-cream)] px-6 py-3 rounded-full font-bold hover:border-[var(--color-lava)] transition"
            >
              Reservar mesa
            </a>
          </div>
        </div>

        {/* Sello con el logo real */}
        <div className="flex justify-center md:justify-end">
          <div className="relative w-56 h-56 rounded-full border-4 border-[var(--color-brass)] bg-[var(--color-cream)] rotate-[-6deg] shadow-2xl overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center p-10">
              <Image
                src="/images/logo.png"
                alt="Logo Monti Pastas"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}