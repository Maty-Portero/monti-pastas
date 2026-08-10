type Plato = {
  nombre: string;
  descripcion?: string;
  precio: string;
};

type Categoria = {
  nombre: string;
  platos: Plato[];
};

const menu: Categoria[] = [
  {
    nombre: "Para Picar",
    platos: [
      { nombre: "Papas con Cheddar", precio: "6.200" },
      { nombre: "Mac and Cheese", precio: "8.500" },
    ],
  },
  {
    nombre: "Pastas",
    platos: [
      { nombre: "Volcán de Ñoquis", descripcion: "El plato viral de Monti", precio: "9.500" },
      { nombre: "Sorrentinos de Jamón y Muzzarella", precio: "8.800" },
      { nombre: "Lasaña Clásica", precio: "9.900" },
      { nombre: "Ravioles de Ricota", precio: "8.900" },
    ],
  },
  {
    nombre: "Principales",
    platos: [
      { nombre: "Milanesa Napolitana", precio: "10.200" },
      { nombre: "Milanesa a Caballo", precio: "10.800" },
    ],
  },
  {
    nombre: "Opciones Veganas",
    platos: [
      { nombre: "Ñoquis Veganos con Salsa de Tomate", precio: "8.900" },
    ],
  },
  {
    nombre: "Bebidas",
    platos: [
      { nombre: "Gaseosa", precio: "2.500" },
      { nombre: "Cerveza", precio: "3.500" },
      { nombre: "Agua Saborizada", precio: "2.200" },
    ],
  },
];

export default function MenuList() {
  return (
    <div className="space-y-12">
      {menu.map((categoria) => (
        <div key={categoria.nombre}>
          <h2 className="font-[family-name:var(--font-display)] font-extrabold text-2xl text-[var(--color-parmesan)] mb-4 border-b-2 border-[var(--color-lava)]/40 pb-2">
            {categoria.nombre}
          </h2>

          <div className="space-y-4">
            {categoria.platos.map((plato) => (
              <div
                key={plato.nombre}
                className="flex justify-between items-baseline gap-4"
              >
                <div>
                  <p className="text-[var(--color-cream)] text-lg">
                    {plato.nombre}
                  </p>
                  {plato.descripcion && (
                    <p className="text-xs text-[var(--color-cream)]/50">
                      {plato.descripcion}
                    </p>
                  )}
                </div>
                <span className="font-[family-name:var(--font-mono)] text-[var(--color-parmesan)] whitespace-nowrap">
                  ${plato.precio}
                </span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}