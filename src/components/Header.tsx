"use client";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[var(--color-char)] border-b-2 border-[var(--color-lava)]">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-5 py-3">
        <Link
          href="/"
          className="font-[family-name:var(--font-display)] font-extrabold text-2xl text-[var(--color-cream)]"
        >
          Monti <span className="text-[var(--color-lava)]">🌋</span>
        </Link>

        <nav className="hidden md:flex items-center gap-8 text-sm font-semibold">
          <Link href="/menu" className="hover:text-[var(--color-lava)] transition-colors">
            Menú
          </Link>
          <Link href="/#opiniones" className="hover:text-[var(--color-lava)] transition-colors">
            Opiniones
          </Link>
          <Link
            href="/reservas"
            className="gradiente-lava text-[var(--color-cream)] px-5 py-2 font-bold rounded-full hover:brightness-110 transition"
          >
            Pedir / Reservar
          </Link>
        </nav>

        <button className="md:hidden text-[var(--color-cream)]" onClick={() => setOpen(!open)}>
          ☰
        </button>
      </div>

      {open && (
        <div className="md:hidden flex flex-col gap-4 px-5 pb-5 text-sm font-semibold">
          <Link href="/menu">Menú</Link>
          <Link href="/#opiniones">Opiniones</Link>
          <Link href="/reservas" className="text-[var(--color-lava)]">Pedir / Reservar</Link>
        </div>
      )}
    </header>
  );
}