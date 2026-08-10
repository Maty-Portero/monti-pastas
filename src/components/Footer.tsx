export default function Footer() {
  return (
    <footer className="bg-[var(--color-char)] border-t-2 border-[var(--color-lava)] py-10">
      <div className="max-w-6xl mx-auto px-5 grid md:grid-cols-3 gap-6 text-sm text-[var(--color-cream)]/70">
        <div>
          <h3 className="font-[family-name:var(--font-display)] font-extrabold text-xl text-[var(--color-cream)] mb-2">
            Monti Bar de Pastas
          </h3>
          <p>Av. Salvador María del Carril 2900, C1419, CABA</p>
        </div>
        <div>
          <p>Abre todos los días · 12:00 a 00:00</p>
          <p>011 5485-1299</p>
        </div>
        <div className="md:text-right">
          <a href="https://instagram.com/monti.arg" className="hover:text-[var(--color-lava)]">
            @monti.arg
          </a>
        </div>
      </div>
    </footer>
  );
}