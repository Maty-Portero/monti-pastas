import FormReserva from "../../components/FormReserva";

export default function ReservasPage() {
  return (
    <main className="bg-[var(--color-char)] min-h-screen py-16 md:py-24">
      <div className="max-w-lg mx-auto px-5">
        <div className="text-center mb-10">
          <span className="font-[family-name:var(--font-mono)] text-xs uppercase tracking-widest text-[var(--color-parmesan)]">
            Reservá tu mesa
          </span>
          <h1 className="font-[family-name:var(--font-display)] font-extrabold text-4xl text-[var(--color-cream)] mt-2">
            Te guardamos el lugar
          </h1>
          <p className="text-[var(--color-cream)]/70 mt-3 text-sm">
            Completá el formulario y te confirmamos por WhatsApp o teléfono.
          </p>
        </div>

        <FormReserva />
      </div>
    </main>
  );
}