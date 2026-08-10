export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[var(--color-char)]">
      <div className="max-w-6xl mx-auto px-5 py-16 md:py-24 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <span className="inline-block font-[family-name:var(--font-mono)] text-xs text-[var(--color-parmesan)] uppercase tracking-widest mb-4">
            Bar de Pastas · Agronomía
          </span>

          <h1 className="font-[family-name:var(--font-display)] font-extrabold text-5xl md:text-6xl leading-[1.0] text-[var(--color-cream)]">
            El volcán de ñoquis
            <br />
            <span className="text-[var(--color-lava)]">te espera</span> 🌋
          </h1>

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

        {/* Sello "gota de lava" con el rating */}
        <div className="flex justify-center md:justify-end">
          <div className="w-52 h-52 rounded-full gradiente-lava flex flex-col items-center justify-center text-center shadow-2xl">
            <span className="font-[family-name:var(--font-display)] font-extrabold text-5xl text-[var(--color-cream)]">
              4.5
            </span>
            <span className="text-[var(--color-parmesan)] text-sm">★★★★★</span>
            <span className="font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-wider mt-1 text-[var(--color-cream)]/80">
              1.863 opiniones
              <br />
              Google Maps
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}