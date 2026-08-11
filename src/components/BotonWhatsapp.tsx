export default function BotonWhatsapp() {
  const numero = "5491154851299";
  const mensaje = encodeURIComponent(
    "Hola! Vi la página de Monti y quería hacer una consulta 🌋🍝"
  );

  return (
    <a
      href={`https://wa.me/${numero}?text=${mensaje}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Escribir por WhatsApp"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-[#25D366] flex items-center justify-center shadow-2xl hover:scale-110 active:scale-95 transition-transform"
    >
      <svg viewBox="0 0 24 24" className="w-8 h-8 fill-white">
        <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38a9.87 9.87 0 0 0 4.74 1.21h.01c5.46 0 9.9-4.45 9.9-9.91C21.96 6.45 17.5 2 12.04 2zm5.83 14.1c-.24.68-1.4 1.31-1.94 1.34-.5.03-1.02.14-3.42-.72-2.9-1.04-4.75-3.97-4.9-4.16-.14-.19-1.17-1.56-1.17-2.98 0-1.41.74-2.11 1-2.4.26-.29.57-.36.76-.36.19 0 .38 0 .55.01.18.01.42-.07.65.5.24.58.82 2 .89 2.14.07.14.12.31.02.5-.1.19-.15.31-.29.48-.14.16-.3.36-.43.49-.14.14-.29.29-.13.57.17.29.75 1.24 1.6 2 1.1.98 2.03 1.29 2.32 1.43.29.14.46.12.63-.07.17-.19.72-.84.91-1.13.19-.29.38-.24.63-.14.26.1 1.64.77 1.92.91.29.14.48.21.55.33.07.12.07.7-.17 1.38z" />
      </svg>
    </a>
  );
}