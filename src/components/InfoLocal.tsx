export default function InfoLocal() {
  const direccion = "Av. Salvador María del Carril 2900, C1419, Agronomía, CABA";
  const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(
    direccion
  )}&output=embed`;

  const horarios = [
    { dia: "Lunes a Jueves", horario: "12:00 – 00:00" },
    { dia: "Viernes y Sábado", horario: "12:00 – 01:00" },
    { dia: "Domingo", horario: "12:00 – 00:00" },
  ];

  return (
    <section id="ubicacion" className="bg-[var(--color-char)] py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-5 grid md:grid-cols-2 gap-10">
        <div className="bg-[var(--color-lava-dark)] rounded-3xl p-8 border-2 border-[var(--color-parmesan)]/40">
          <span className="font-[family-name:var(--font-mono)] text-xs uppercase tracking-widest text-[var(--color-parmesan)]">
            Cómo llegar
          </span>
          <h2 className="font-[family-name:var(--font-display)] font-extrabold text-3xl text-[var(--color-cream)] mt-2 mb-6">
            Te esperamos en Agronomía 🐾
          </h2>

          <div className="space-y-1 mb-6">
            <p className="text-[var(--color-cream)]/90">{direccion}</p>
            <a
              href={`https://www.google.com/maps?q=${encodeURIComponent(direccion)}`}
              target="_blank"
              className="text-[var(--color-parmesan)] text-sm underline underline-offset-4"
            >
              Abrir en Google Maps →
            </a>
          </div>

          <div className="border-t border-[var(--color-cream)]/20 pt-6">
            <span className="font-[family-name:var(--font-mono)] text-xs uppercase tracking-widest text-[var(--color-parmesan)]">
              Horarios
            </span>
            <ul className="mt-3 space-y-2">
              {horarios.map((h) => (
                <li
                  key={h.dia}
                  className="flex justify-between text-sm text-[var(--color-cream)]/90 font-[family-name:var(--font-mono)]"
                >
                  <span>{h.dia}</span>
                  <span>{h.horario}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="border-t border-[var(--color-cream)]/20 mt-6 pt-6 flex flex-wrap gap-3">
            <a
              href="tel:01154851299"
              className="border-2 border-[var(--color-cream)]/40 text-[var(--color-cream)] px-4 py-2 rounded-full text-sm font-bold hover:border-[var(--color-parmesan)] transition"
            >
              Llamar
            </a>
            <a
              href="https://wa.me/5491154851299"
              target="_blank"
              className="gradiente-lava text-[var(--color-cream)] px-4 py-2 rounded-full text-sm font-bold hover:brightness-110 transition"
            >
              WhatsApp
            </a>
          </div>
        </div>

        <div className="rounded-3xl overflow-hidden border-4 border-[var(--color-lava)] min-h-[320px]">
          <iframe
            src={mapSrc}
            width="100%"
            height="100%"
            style={{ border: 0, minHeight: "320px" }}
            loading="lazy"
            title="Ubicación Monti Bar de Pastas"
          />
        </div>
      </div>
    </section>
  );
}