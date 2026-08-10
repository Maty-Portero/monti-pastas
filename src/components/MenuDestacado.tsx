const platos = [
  { nombre: "Volcán de Ñoquis", precio: "9.500", tag: "El plato viral 🌋" },
  { nombre: "Sorrentinos de Jamón y Muzzarella", precio: "8.800", tag: "Popular" },
  { nombre: "Milanesa Napolitana", precio: "10.200", tag: "" },
  { nombre: "Lasaña Clásica", precio: "9.900", tag: "" },
  { nombre: "Mac and Cheese", precio: "8.500", tag: "Nuevo" },
  { nombre: "Papas con Cheddar", precio: "6.200", tag: "Para picar" },
];

export default function MenuDestacado() {
  return (
    <section id="menu-destacado" className="bg-[var(--color-char)] py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-5">
        <div className="text-center mb-12">
          <span className="font-[family-name:var(--font-mono)] text-xs uppercase tracking-widest text-[var(--color-parmesan)]">
            Directo de la cocina
          </span>
          <h2 className="font-[family-name:var(--font-display)] font-extrabold text-3xl md:text-4xl text-[var(--color-cream)] mt-2">
            Platos destacados
          </h2>
        </div>

        <div className="bg-[#2a1f1a] border-2 border-[var(--color-lava)] rounded-3xl p-6 md:p-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-6">
          {platos.map((plato) => (
            <div
              key={plato.nombre}
              className="flex justify-between items-baseline border-b border-dashed border-[var(--color-cream)]/25 pb-2"
            >
              <div>
                <p className="font-[family-name:var(--font-display)] font-bold text-lg text-[var(--color-cream)]">
                  {plato.nombre}
                </p>
                {plato.tag && (
                  <span className="text-[10px] uppercase tracking-wider text-[var(--color-parmesan)]">
                    {plato.tag}
                  </span>
                )}
              </div>
              <span className="font-[family-name:var(--font-mono)] text-[var(--color-parmesan)] whitespace-nowrap ml-3">
                ${plato.precio}
              </span>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <a
            href="/menu"
            className="inline-block gradiente-lava text-[var(--color-cream)] px-6 py-3 rounded-full font-bold hover:brightness-110 transition"
          >
            Ver el menú completo
          </a>
        </div>
      </div>
    </section>
  );
}