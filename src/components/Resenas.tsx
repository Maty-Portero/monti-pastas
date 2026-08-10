"use client";
import { useEffect, useRef, useState } from "react";

const resenas = [
  {
    autor: "Daniel Etcheverry",
    meta: "Local Guide · 32 opiniones",
    texto:
      "Apenas ingresás te recibe Agustín con una cálida bienvenida. Elegís mesa y menú, y en menos de 10 minutos ya estás degustando.",
    rating: 5,
  },
  {
    autor: "Eliana Viegas",
    meta: "Local Guide · 641 opiniones",
    texto:
      "La atención fue súper rápida. A los 5-10 minutos de pedir ya estaba la estrella de la noche: el volcán de ñoquis. Sigue exquisito.",
    rating: 5,
  },
  {
    autor: "Opinión destacada",
    meta: "Google Maps",
    texto: "Excelente lugar, fui a merendar, muy buena atención y muy buenos precios.",
    rating: 5,
  },
  {
    autor: "Opinión destacada",
    meta: "Google Maps",
    texto: "Pastas express ricas, rápidas y buena relación precio calidad. Volveremos.",
    rating: 5,
  },
  {
    autor: "Actualización de un visitante",
    meta: "Google Maps",
    texto: "La comida, el servicio y el ambiente de 10. Un dato muy bueno es que es pet friendly.",
    rating: 5,
  },
];

export default function Resenas() {
  const [index, setIndex] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const reiniciarTimer = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setIndex((i) => (i + 1) % resenas.length);
    }, 5000);
  };

  useEffect(() => {
    reiniciarTimer();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, []);

  const irA = (nuevoIndex: number) => {
    setIndex(nuevoIndex);
    reiniciarTimer();
  };

  const anterior = () => irA((index - 1 + resenas.length) % resenas.length);
  const siguiente = () => irA((index + 1) % resenas.length);

  return (
    <section id="opiniones" className="bg-[var(--color-cream)] py-16 md:py-24">
      <div className="max-w-3xl mx-auto px-5 text-center">
        <span className="font-[family-name:var(--font-mono)] text-xs uppercase tracking-widest text-[var(--color-lava-dark)]">
          4.5 ★★★★★ · 1.863 opiniones en Google
        </span>
        <h2 className="font-[family-name:var(--font-display)] font-extrabold text-3xl md:text-4xl text-[var(--color-char)] mt-2 mb-10">
          Lo que dice la gente
        </h2>

        <div className="relative bg-white rounded-3xl shadow-lg p-8 md:p-12 min-h-[220px] flex flex-col justify-center border-b-4 border-[var(--color-lava)]">
          <p className="text-lg md:text-xl text-[var(--color-char)] leading-relaxed">
            &ldquo;{resenas[index].texto}&rdquo;
          </p>
          <div className="mt-6">
            <p className="font-bold text-[var(--color-lava-dark)]">
              {resenas[index].autor}
            </p>
            <p className="text-xs text-[var(--color-char)]/60">
              {resenas[index].meta}
            </p>
          </div>
        </div>

        <div className="flex items-center justify-center gap-6 mt-6">
          <button
            type="button"
            onClick={anterior}
            aria-label="Opinión anterior"
            className="touch-manipulation w-12 h-12 rounded-full border-2 border-[var(--color-lava)] text-[var(--color-lava)] active:bg-[var(--color-lava)] active:text-[var(--color-cream)] transition"
          >
            ←
          </button>

          <div className="flex gap-2">
            {resenas.map((_, i) => (
              <button
                type="button"
                key={i}
                onClick={() => irA(i)}
                aria-label={`Ir a opinión ${i + 1}`}
                className={`touch-manipulation w-3 h-3 rounded-full transition ${
                  i === index ? "bg-[var(--color-lava)]" : "bg-[var(--color-lava)]/25"
                }`}
              />
            ))}
          </div>

          <button
            type="button"
            onClick={siguiente}
            aria-label="Siguiente opinión"
            className="touch-manipulation w-12 h-12 rounded-full border-2 border-[var(--color-lava)] text-[var(--color-lava)] active:bg-[var(--color-lava)] active:text-[var(--color-cream)] transition"
          >
            →
          </button>
        </div>
      </div>
    </section>
  );
}