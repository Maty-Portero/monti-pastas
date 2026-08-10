"use client";
import { useState } from "react";
import { supabase } from "../lib/supabase";

export default function FormReserva() {
  const [form, setForm] = useState({
    nombre: "",
    telefono: "",
    email: "",
    fecha: "",
    hora: "",
    cantidad_personas: "",
    comentario: "",
  });
  const [trampa, setTrampa] = useState("");
  const [estado, setEstado] = useState<"idle" | "enviando" | "ok" | "error">(
    "idle"
  );

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (trampa) {
      setEstado("ok");
      return;
    }

    setEstado("enviando");

    const { error } = await supabase.from("reservas").insert({
      nombre: form.nombre,
      telefono: form.telefono,
      email: form.email || null,
      fecha: form.fecha,
      hora: form.hora,
      cantidad_personas: Number(form.cantidad_personas),
      comentario: form.comentario || null,
    });

    if (error) {
      console.error(error);
      setEstado("error");
      return;
    }

    setEstado("ok");
    setForm({
      nombre: "",
      telefono: "",
      email: "",
      fecha: "",
      hora: "",
      cantidad_personas: "",
      comentario: "",
    });
  };

  if (estado === "ok") {
    return (
      <div className="bg-[var(--color-lava-dark)] border-2 border-[var(--color-parmesan)] rounded-3xl p-8 text-center">
        <p className="font-[family-name:var(--font-display)] font-extrabold text-2xl text-[var(--color-cream)] mb-2">
          ¡Reserva enviada! 🌋
        </p>
        <p className="text-[var(--color-cream)]/80 text-sm">
          Te vamos a confirmar por teléfono o WhatsApp a la brevedad.
        </p>
        <button
          onClick={() => setEstado("idle")}
          className="mt-6 text-[var(--color-parmesan)] underline text-sm"
        >
          Hacer otra reserva
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-[var(--color-lava-dark)] border-2 border-[var(--color-parmesan)]/50 rounded-3xl p-8 space-y-5"
    >
      <input
        type="text"
        name="pagina_web"
        value={trampa}
        onChange={(e) => setTrampa(e.target.value)}
        tabIndex={-1}
        autoComplete="off"
        style={{
          position: "absolute",
          left: "-9999px",
          width: "1px",
          height: "1px",
          opacity: 0,
        }}
        aria-hidden="true"
      />

      <div>
        <label className="block text-xs uppercase tracking-wide text-[var(--color-parmesan)] mb-1">
          Nombre
        </label>
        <input
          required
          name="nombre"
          value={form.nombre}
          onChange={handleChange}
          className="w-full bg-[var(--color-char)] text-[var(--color-cream)] px-4 py-2 rounded-xl border border-[var(--color-cream)]/20 focus:border-[var(--color-parmesan)] outline-none"
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-xs uppercase tracking-wide text-[var(--color-parmesan)] mb-1">
            Teléfono
          </label>
          <input
            required
            name="telefono"
            value={form.telefono}
            onChange={handleChange}
            className="w-full bg-[var(--color-char)] text-[var(--color-cream)] px-4 py-2 rounded-xl border border-[var(--color-cream)]/20 focus:border-[var(--color-parmesan)] outline-none"
          />
        </div>
        <div>
          <label className="block text-xs uppercase tracking-wide text-[var(--color-parmesan)] mb-1">
            Personas
          </label>
          <input
            required
            type="number"
            min={1}
            name="cantidad_personas"
            value={form.cantidad_personas}
            onChange={handleChange}
            className="w-full bg-[var(--color-char)] text-[var(--color-cream)] px-4 py-2 rounded-xl border border-[var(--color-cream)]/20 focus:border-[var(--color-parmesan)] outline-none"
          />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-xs uppercase tracking-wide text-[var(--color-parmesan)] mb-1">
            Fecha
          </label>
          <input
            required
            type="date"
            name="fecha"
            value={form.fecha}
            onChange={handleChange}
            className="w-full bg-[var(--color-char)] text-[var(--color-cream)] px-4 py-2 rounded-xl border border-[var(--color-cream)]/20 focus:border-[var(--color-parmesan)] outline-none"
          />
        </div>
        <div>
          <label className="block text-xs uppercase tracking-wide text-[var(--color-parmesan)] mb-1">
            Hora
          </label>
          <input
            required
            type="time"
            name="hora"
            value={form.hora}
            onChange={handleChange}
            className="w-full bg-[var(--color-char)] text-[var(--color-cream)] px-4 py-2 rounded-xl border border-[var(--color-cream)]/20 focus:border-[var(--color-parmesan)] outline-none"
          />
        </div>
      </div>

      <div>
        <label className="block text-xs uppercase tracking-wide text-[var(--color-parmesan)] mb-1">
          Email (opcional)
        </label>
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          className="w-full bg-[var(--color-char)] text-[var(--color-cream)] px-4 py-2 rounded-xl border border-[var(--color-cream)]/20 focus:border-[var(--color-parmesan)] outline-none"
        />
      </div>

      <div>
        <label className="block text-xs uppercase tracking-wide text-[var(--color-parmesan)] mb-1">
          Comentario (opcional)
        </label>
        <textarea
          name="comentario"
          value={form.comentario}
          onChange={handleChange}
          rows={3}
          className="w-full bg-[var(--color-char)] text-[var(--color-cream)] px-4 py-2 rounded-xl border border-[var(--color-cream)]/20 focus:border-[var(--color-parmesan)] outline-none"
        />
      </div>

      {estado === "error" && (
        <p className="text-red-300 text-sm">
          Hubo un error al enviar la reserva. Probá de nuevo o llamanos.
        </p>
      )}

      <button
        type="submit"
        disabled={estado === "enviando"}
        className="w-full gradiente-lava text-[var(--color-cream)] px-6 py-3 rounded-full font-bold hover:brightness-110 transition disabled:opacity-50"
      >
        {estado === "enviando" ? "Enviando..." : "Confirmar reserva"}
      </button>
    </form>
  );
}