"use client";
import { useRouter } from "next/navigation";
import { supabase } from "../../lib/supabase";

export default function CerrarSesion() {
  const router = useRouter();

  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.push("/admin/login");
    router.refresh();
  };

  return (
    <button
      onClick={handleLogout}
      className="text-sm text-[var(--color-parmesan)] underline"
    >
      Cerrar sesión
    </button>
  );
}