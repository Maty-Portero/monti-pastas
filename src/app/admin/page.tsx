import { redirect } from "next/navigation";
import { createClient } from "../../lib/supabase-server";
import TablaReservas from "../../components/admin/TablaReservas";
import CerrarSesion from "../../components/admin/CerrarSesion";

export default async function AdminPage() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/admin/login");
  }

  const { data: reservas, error } = await supabase
    .from("reservas")
    .select("*")
    .order("fecha", { ascending: true })
    .order("hora", { ascending: true });

  return (
    <main className="min-h-screen bg-[var(--color-char)] max-w-5xl mx-auto px-5 py-10">
      <div className="flex justify-between items-center mb-8">
        <h1 className="font-[family-name:var(--font-display)] font-extrabold text-3xl text-[var(--color-cream)]">
          Reservas
        </h1>
        <CerrarSesion />
      </div>

      {error && (
        <div className="bg-red-950 border border-red-500 text-red-200 p-4 rounded-xl mb-6 text-sm">
          <strong>Error de Supabase:</strong> {error.message}
        </div>
      )}

      <TablaReservas reservasIniciales={reservas || []} />
    </main>
  );
}