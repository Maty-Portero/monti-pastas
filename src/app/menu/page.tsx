import MenuList from "../../components/MenuList";

export default function MenuPage() {
  return (
    <main className="bg-[var(--color-char)] min-h-screen py-16 md:py-24">
      <div className="max-w-4xl mx-auto px-5">
        <div className="text-center mb-12">
          <span className="font-[family-name:var(--font-mono)] text-xs uppercase tracking-widest text-[var(--color-parmesan)]">
            Monti Bar de Pastas
          </span>
          <h1 className="font-[family-name:var(--font-display)] font-extrabold text-4xl md:text-5xl text-[var(--color-cream)] mt-2">
            Nuestro Menú
          </h1>
        </div>

        <MenuList />
      </div>
    </main>
  );
}