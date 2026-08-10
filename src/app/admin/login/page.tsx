"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "../../../lib/supabase";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      setError("Email o contraseña incorrectos");
      return;
    }

    router.push("/admin");
    router.refresh();
  };

  return (
    <main className="min-h-screen bg-[var(--color-char)] flex items-center justify-center px-5">
      <form
        onSubmit={handleLogin}
        className="bg-[var(--color-lava-dark)] border-2 border-[var(--color-parmesan)] rounded-3xl p-8 w-full max-w-sm"
      >
        <h1 className="font-[family-name:var(--font-display)] font-extrabold text-2xl text-[var(--color-cream)] mb-6 text-center">
          Panel Monti
        </h1>

        <div className="mb-4">
          <label className="block text-xs uppercase tracking-wide text-[var(--color-parmesan)] mb-1">
            Email
          </label>
          <input
            required
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full bg-[var(--color-char)] text-[var(--color-cream)] px-4 py-2 rounded-xl border border-[var(--color-cream)]/20 focus:border-[var(--color-parmesan)] outline-none"
          />
        </div>

        <div className="mb-6">
          <label className="block text-xs uppercase tracking-wide text-[var(--color-parmesan)] mb-1">
            Contraseña
          </label>
          <input
            required
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full bg-[var(--color-char)] text-[var(--color-cream)] px-4 py-2 rounded-xl border border-[var(--color-cream)]/20 focus:border-[var(--color-parmesan)] outline-none"
          />
        </div>

        {error && <p className="text-red-300 text-sm mb-4">{error}</p>}

        <button
          type="submit"
          className="w-full gradiente-lava text-[var(--color-cream)] px-6 py-3 rounded-full font-bold hover:brightness-110 transition"
        >
          Ingresar
        </button>
      </form>
    </main>
  );
}