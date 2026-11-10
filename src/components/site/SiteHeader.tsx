import { Link } from "@tanstack/react-router";
import { Clock, MapPin, Menu, MessageCircle, Phone, X} from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { EMPRESA, ENDERECO_COMPLETO, MAPA_LINK_URL, WHATSAPP_URL } from "@/lib/empresa";

export const SECOES = [
  { hash: "quem-somos", label: "Quem somos" },
  { hash: "como-usar", label: "Como usar" },
  { hash: "precos", label: "Preços" },
  { hash: "duvidas", label: "Dúvidas" },
  { hash: "localizacao", label: "Localização" },
] as const;

export function Logo({ onDark = false }: { onDark?: boolean }) {
  return (
    <Link to="/" className="flex items-center gap-2">
      <span className="flex size-9 items-center justify-center rounded-md bg-primary">
        <img
          src="/favicon.png"
          alt="VMG Charge"
          className="h-8 w-8 object-contain"
        />
      </span>
      <span
        className={`font-display text-xl font-extrabold tracking-tight ${onDark ? "text-ink-foreground" : "text-foreground"}`}
      >
        VMG <span className={onDark ? "text-primary" : "text-forest"}>Charge</span>
      </span>
    </Link>
  );
}

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Barra de informações */}
      <div className="bg-ink text-ink-muted">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-2 text-xs">
          <div className="flex items-center gap-5">
            <a href={MAPA_LINK_URL} target="_blank" rel="noreferrer" className="flex items-center gap-1.5 hover:text-ink-foreground">
              <MapPin className="size-3.5 text-primary" /> {ENDERECO_COMPLETO}
            </a>
            <span className="hidden items-center gap-1.5 md:flex">
              <Clock className="size-3.5 text-primary" /> {EMPRESA.horario}
            </span>
          </div>
          <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="hidden items-center gap-1.5 hover:text-ink-foreground sm:flex">
            <Phone className="size-3.5 text-primary" /> {EMPRESA.telefone}
          </a>
        </div>
      </div>

      <header className="sticky top-0 z-50 border-b border-border bg-card">
        <div className="mx-auto flex h-18 max-w-6xl items-center justify-between px-5 py-3">
          <Logo />

          <nav className="hidden items-center gap-7 lg:flex">
            {SECOES.map((s) => (
              <Link
                key={s.hash}
                to="/"
                hash={s.hash}
                className="text-sm font-semibold uppercase tracking-wide text-foreground/80 transition-colors hover:text-forest"
              >
                {s.label}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:block">
            <Button asChild variant="hero">
              <a href={WHATSAPP_URL} target="_blank" rel="noreferrer">
                <MessageCircle /> Fale com a gente
              </a>
            </Button>
          </div>

          <button
            className="rounded-md p-2 lg:hidden"
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>
        </div>

        {open && (
          <nav className="border-t border-border bg-card px-5 py-3 lg:hidden">
            <div className="flex flex-col">
              {SECOES.map((s) => (
                <Link
                  key={s.hash}
                  to="/"
                  hash={s.hash}
                  onClick={() => setOpen(false)}
                  className="border-b border-border py-3 font-semibold uppercase tracking-wide text-foreground/80 last:border-0"
                >
                  {s.label}
                </Link>
              ))}
              <Button asChild variant="hero" className="my-3">
                <a href={WHATSAPP_URL} target="_blank" rel="noreferrer">
                  <MessageCircle /> Fale com a gente no WhatsApp
                </a>
              </Button>
            </div>
          </nav>
        )}
      </header>
    </>
  );
}
