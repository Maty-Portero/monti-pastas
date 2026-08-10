"use client";
import { useState } from "react";
import { supabase } from "../../lib/supabase";

type Reserva = {
  id: string;
  nombre: string;
  telefono: string;
  email: string | null;
  fecha: string;
  hora: string;
  cantidad_personas: number;
  comentario: string | null;
  estado: string;
};

export default function TablaReservas({
  reservasIniciales,
}: {
  reservasIniciales: Reserva[];
}) {
  const [reservas, setReservas] = useState(reservasIniciales);

  const cambiarEstado = async (id: string, nuevoEstado: string) => {
    const { error } = await supabase
      .from("reservas")
      .update({ estado: nuevoEstado })
      .eq("id", id);

    if (!error) {
      setReservas((prev) =>
        prev.map((r) => (r.id === id ? { ...r, estado: nuevoEstado } : r))
      );
    }
  };

  const colorEstado = (estado: string) => {
    if (estado === "confirmada") return "bg-green-800";
    if (estado === "cancelada") return "bg-red-900";
    return "bg-[var(--color-parmesan)]/40";
  };

  if (reservas.length === 0) {
    return (
      <p className="text-[var(--color-cream)]/60 text-center py-10">
        No hay reservas todavía.
      </p>
    );
  }

  return (
    <div className="space-y-3">
      {reservas.map((r) => (
        <div
          key={r.id}
          className="bg-[var(--color-lava-dark)] border border-[var(--color-parmesan)]/40 rounded-2xl p-4 flex flex-col md:flex-row md:items-center md:justify-between gap-3"
        >
          <div>
            <p className="text-[var(--color-cream)] font-bold">
              {r.nombre} · {r.cantidad_personas} personas
            </p>
            <p className="text-[var(--color-cream)]/70 text-sm">
              {r.fecha} — {r.hora} · {r.telefono}
            </p>
            {r.comentario && (
              <p className="text-[var(--color-cream)]/50 text-xs mt-1">
                &ldquo;{r.comentario}&rdquo;
              </p>
            )}
          </div>

          <div className="flex items-center gap-2">
            <span
              className={`text-xs px-2 py-1 rounded-full text-[var(--color-cream)] ${colorEstado(
                r.estado
              )}`}
            >
              {r.estado}
            </span>
            <button
              onClick={() => cambiarEstado(r.id, "confirmada")}
              className="text-xs bg-green-800 text-[var(--color-cream)] px-3 py-1 rounded-full"
            >
              Confirmar
            </button>
            <button
              onClick={() => cambiarEstado(r.id, "cancelada")}
              className="text-xs bg-red-900 text-[var(--color-cream)] px-3 py-1 rounded-full"
            >
              Cancelar
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}