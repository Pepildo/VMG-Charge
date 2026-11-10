import { Link } from "@tanstack/react-router";
import { Clock, Mail, MapPin, Phone } from "lucide-react";

import { Logo, SECOES } from "./SiteHeader";
import { EMPRESA, ENDERECO_COMPLETO, MAPA_LINK_URL, WHATSAPP_URL } from "@/lib/empresa";

export function SiteFooter() {
  return (
    <footer className="bg-ink text-ink-muted">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 md:grid-cols-[1.4fr_1fr_1.4fr]">
        <div className="space-y-4">
          <Logo onDark />
          <p className="max-w-xs text-sm">
            Eletroposto no centro de Sete Lagoas. Chegou, plugou, carregou.
          </p>
        </div>

        <div className="space-y-3 text-sm">
          <h3 className="font-display text-base font-bold text-ink-foreground">Navegue</h3>
          <ul className="space-y-2">
            {SECOES.map((s) => (
              <li key={s.hash}>
                <Link to="/" hash={s.hash} className="hover:text-primary">
                  {s.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-3 text-sm">
          <h3 className="font-display text-base font-bold text-ink-foreground">Contato</h3>
          <ul className="space-y-3">
            <li>
              <a href={MAPA_LINK_URL} target="_blank" rel="noreferrer" className="flex gap-2 hover:text-primary">
                <MapPin className="size-4 shrink-0 text-primary" /> {ENDERECO_COMPLETO}
              </a>
            </li>
            <li>
              <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="flex gap-2 hover:text-primary">
                <Phone className="size-4 shrink-0 text-primary" /> {EMPRESA.telefone}
              </a>
            </li>
            <li>
              <a href={`mailto:${EMPRESA.email}`} className="flex gap-2 hover:text-primary">
                <Mail className="size-4 shrink-0 text-primary" /> {EMPRESA.email}
              </a>
            </li>
            <li className="flex gap-2">
              <Clock className="size-4 shrink-0 text-primary" /> {EMPRESA.horario}
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-ink-foreground/10 py-6 text-center text-xs">
        © {new Date().getFullYear()} {EMPRESA.nome} · Sete Lagoas – MG
      </div>
    </footer>
  );
}
