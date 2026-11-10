import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Clock,
  CreditCard,
  Headphones,
  MapPin,
  MessageCircle,
  Navigation,
  Plug,
  ShieldCheck,
  Smile,
  Zap,
  Mail,
  Phone,
} from "lucide-react";

import postoImg from "@/assets/posto-dia.jpg";
import clienteImg from "@/assets/cliente-carregando.jpg";
import conectorImg from "@/assets/mao-conector.jpg";
import { CustoCalculadora } from "@/components/site/CustoCalculadora";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import {
  EMPRESA,
  ENDERECO_COMPLETO,
  MAPA_EMBED_URL,
  MAPA_LINK_URL,
  WHATSAPP_URL,
} from "@/lib/empresa";
import { calcularCusto, formatarReais } from "@/lib/preco";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "VMG Power — Eletroposto no centro de Sete Lagoas" },
      {
        name: "description",
        content:
          "Carregue seu carro elétrico na VMG Power, Rua Quintino Bocaiúva 131, Sete Lagoas – MG. R$ 2,15 por kWh, sem mensalidade.",
      },
      { property: "og:title", content: "VMG Power — Eletroposto no centro de Sete Lagoas" },
      {
        property: "og:description",
        content: "Recarga de carro elétrico em Sete Lagoas por R$ 2,15 o kWh. Veja como usar, preços e como chegar.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function SectionTitle({ kicker, title, light = false }: { kicker: string; title: string; light?: boolean }) {
  return (
    <div className="max-w-2xl">
      <p className={`text-sm font-bold uppercase tracking-wider ${light ? "text-primary" : "text-forest"}`}>
        {kicker}
      </p>
      <h2 className={`mt-2 text-3xl font-extrabold leading-tight md:text-[2.6rem] ${light ? "text-ink-foreground" : ""}`}>
        {title}
      </h2>
    </div>
  );
}

const DIFERENCIAIS = [
  { icon: Plug, titulo: "Plugou, carregou", texto: "Sem app obrigatório e sem cadastro. Conectou o cabo, a recarga começa." },
  { icon: ShieldCheck, titulo: "Seguro", texto: "Equipamento instalado dentro das normas, com proteção para você e para o carro." },
  { icon: Headphones, titulo: "Gente de verdade", texto: "Deu alguma dúvida? Chama no WhatsApp que a gente responde." },
  { icon: Smile, titulo: "Sem pegadinha", texto: "Um preço só por kWh. Nada de mensalidade ou taxa escondida." },
];

const PASSOS = [
  { titulo: "Estacione", texto: "Pare na vaga em frente ao carregador que estiver livre." },
  { titulo: "Conecte o cabo", texto: "Encaixe o conector na entrada do seu carro até ouvir o clique." },
  { titulo: "Pague e inicie", texto: "Siga a tela do carregador. Aceitamos Pix, crédito e débito." },
  { titulo: "Acompanhe e finalize", texto: "Veja quanto já carregou. Quando quiser, encerre e guarde o cabo." },
];

const EXEMPLOS = [
  { nome: "Uma completada no dia a dia", kwh: 10 },
  { nome: "Meia bateria de um compacto", kwh: 25 },
  { nome: "Bateria média, de 0 a 100%", kwh: 50 },
];

const DUVIDAS = [
  {
    p: "Quanto custa carregar?",
    r: `${formatarReais(EMPRESA.precoKwh)} por kWh. Você paga só a energia que entrou no carro, sem mensalidade e sem taxa de adesão.`,
  },
  {
    p: "Quanto tempo demora?",
    r: "Depende do carro e de quanto a bateria está vazia. Uma recarga parcial costuma levar de 30 minutos a algumas horas.",
  },
  {
    p: "Meu carro é compatível?",
    r: "Atendemos os conectores mais usados no Brasil. Se tiver dúvida, manda o modelo do seu carro no WhatsApp antes de vir.",
  },
  {
    p: "Como eu pago?",
    r: "Pix, cartão de crédito ou débito, direto no carregador.",
  },
  {
    p: "Preciso agendar?",
    r: "Não precisa. É só chegar e usar um carregador livre. Se quiser garantir, avisa a gente pelo WhatsApp.",
  },
];

function Index() {
  return (
    <>
      {/* Início */}
      <section className="relative overflow-hidden bg-ink">
        <img
          src={postoImg}
          alt="Carro elétrico carregando em um eletroposto em rua de Minas Gerais"
          width={1920}
          height={1088}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-overlay-hero" />
        <div className="relative mx-auto max-w-6xl px-5 pb-36 pt-20 md:pb-44 md:pt-28">
          <p className="flex items-center gap-2 text-sm font-semibold text-primary">
            <MapPin className="size-4" /> Centro de Sete Lagoas – MG
          </p>
          <h1 className="mt-4 max-w-2xl text-4xl font-extrabold leading-[1.08] text-ink-foreground md:text-6xl">
            Seu carro elétrico carregado aqui pertinho.
          </h1>
          <p className="mt-5 max-w-lg text-lg text-ink-foreground/85">
            Chegou, plugou, carregou. Você paga só a energia que usar:{" "}
            <strong className="text-ink-foreground">{formatarReais(EMPRESA.precoKwh)} por kWh</strong>, sem
            mensalidade e sem cadastro.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild variant="hero" size="xl">
              <Link to="/" hash="como-usar">Ver como funciona</Link>
            </Button>
            <Button asChild variant="onDark" size="xl">
              <a href={MAPA_LINK_URL} target="_blank" rel="noreferrer">
                <Navigation /> Traçar rota
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Faixa de informações */}
      <section className="relative z-10 mx-auto -mt-20 max-w-6xl px-5 md:-mt-24">
        <div className="grid gap-6 rounded-xl bg-ink-soft p-7 text-ink-foreground shadow-soft sm:grid-cols-2 md:p-9 lg:grid-cols-4">
          {[
            { icon: Zap, valor: formatarReais(EMPRESA.precoKwh), legenda: "por kWh, preço único" },
            { icon: Clock, valor: "24 horas", legenda: "aberto todos os dias" },
            { icon: CreditCard, valor: "Pix e cartão", legenda: "crédito ou débito" },
            { icon: MapPin, valor: "Centro", legenda: EMPRESA.endereco.rua },
          ].map(({ icon: Icon, valor, legenda }) => (
            <div key={valor} className="flex items-center gap-4">
              <Icon className="size-9 shrink-0 text-primary" strokeWidth={1.6} />
              <div>
                <p className="font-display text-2xl font-extrabold leading-none">{valor}</p>
                <p className="mt-1 text-sm text-ink-muted">{legenda}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Quem somos */}
      <section id="quem-somos" className="mx-auto max-w-6xl px-5 py-24">
        <div className="grid items-center gap-12 md:grid-cols-[0.9fr_1.1fr]">
          <img
            src={clienteImg}
            alt="Cliente sorrindo enquanto conecta o carregador no carro elétrico"
            loading="lazy"
            width={1200}
            height={1408}
            className="aspect-[4/5] w-full rounded-xl object-cover"
          />
          <div>
            <SectionTitle kicker="Quem somos" title="Um eletroposto de Sete Lagoas, feito para quem roda por aqui." />
            <div className="mt-6 space-y-4 text-lg leading-relaxed text-muted-foreground">
              <p>
                A VMG Power nasceu de uma necessidade simples: quem tem carro elétrico em Sete Lagoas
                precisava de um lugar perto, confiável e com preço claro para carregar.
              </p>
              <p>
                Montamos o nosso posto no centro da cidade, na Rua Quintino Bocaiúva, para você
                carregar enquanto resolve as coisas do dia, toma um café ou trabalha por perto.
              </p>
              <p>
                Aqui não tem letra miúda. Você vê o preço antes, acompanha a recarga e paga só o que
                usou. E se precisar, tem sempre alguém do outro lado do WhatsApp.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-20 grid gap-x-10 gap-y-10 border-t border-border pt-14 sm:grid-cols-2 lg:grid-cols-4">
          {DIFERENCIAIS.map(({ icon: Icon, titulo, texto }) => (
            <div key={titulo}>
              <Icon className="size-8 text-forest" strokeWidth={1.7} />
              <h3 className="mt-4 text-xl font-bold">{titulo}</h3>
              <p className="mt-2 text-muted-foreground">{texto}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Como usar */}
      <section id="como-usar" className="bg-secondary py-24">
        <div className="mx-auto max-w-6xl px-5">
          <div className="grid items-end gap-10 md:grid-cols-2">
            <SectionTitle kicker="Como usar" title="Carregar é tão fácil quanto abastecer." />
            <p className="text-lg text-muted-foreground md:pb-2">
              Primeira vez num eletroposto? Sem problema. São só quatro passos, e o carregador vai te
              guiando pela tela.
            </p>
          </div>

          <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {PASSOS.map((p, i) => (
              <div key={p.titulo} className="border-t-2 border-forest pt-5">
                <p className="font-display text-sm font-extrabold text-forest">PASSO {i + 1}</p>
                <h3 className="mt-2 text-xl font-bold">{p.titulo}</h3>
                <p className="mt-2 text-muted-foreground">{p.texto}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 grid overflow-hidden rounded-xl bg-card md:grid-cols-2">
            <img
              src={conectorImg}
              alt="Mão segurando o conector de recarga ao lado do carro"
              loading="lazy"
              width={1200}
              height={912}
              className="h-64 w-full object-cover md:h-full"
            />
            <div className="p-8 md:p-10">
              <h3 className="text-2xl font-bold">Ficou com alguma dúvida na hora?</h3>
              <p className="mt-3 text-muted-foreground">
                Manda uma mensagem que a gente te ajuda a iniciar a recarga, passo a passo.
              </p>
              <Button asChild variant="forest" size="xl" className="mt-6">
                <a href={WHATSAPP_URL} target="_blank" rel="noreferrer">
                  <MessageCircle /> Chamar no WhatsApp
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Preços */}
      <section id="precos" className="bg-ink py-24 text-ink-foreground">
        <div className="mx-auto grid max-w-6xl gap-12 px-5 lg:grid-cols-2">
          <div>
            <SectionTitle kicker="Preços" title="Um preço só. Simples assim." light />
            <p className="mt-8 font-display text-6xl font-extrabold md:text-7xl">
              {formatarReais(EMPRESA.precoKwh)}
              <span className="ml-3 text-2xl font-semibold text-ink-muted">por kWh</span>
            </p>
            <p className="mt-4 max-w-md text-ink-muted">
              Sem mensalidade e sem cadastro obrigatório. O valor aparece na tela do carregador em
              tempo real.
            </p>

            <div className="mt-10 divide-y divide-ink-foreground/10 border-y border-ink-foreground/10">
              {EXEMPLOS.map((e) => (
                <div key={e.nome} className="flex items-center justify-between gap-4 py-4">
                  <div>
                    <p className="font-semibold">{e.nome}</p>
                    <p className="text-sm text-ink-muted">{e.kwh} kWh</p>
                  </div>
                  <p className="font-display text-2xl font-extrabold text-primary">
                    {formatarReais(calcularCusto(e.kwh))}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:pt-10">
            <CustoCalculadora />
          </div>
        </div>
      </section>

      {/* Dúvidas */}
      <section id="duvidas" className="mx-auto max-w-6xl px-5 py-24">
        <div className="grid gap-12 md:grid-cols-[0.8fr_1.2fr]">
          <div>
            <SectionTitle kicker="Dúvidas" title="Perguntas que sempre fazem pra gente." />
            <p className="mt-5 text-muted-foreground">Não achou o que procurava?</p>
            <Button asChild variant="link" className="px-0 text-base font-semibold text-forest">
              <a href={WHATSAPP_URL} target="_blank" rel="noreferrer">
                Pergunta direto no WhatsApp →
              </a>
            </Button>
          </div>
          <Accordion type="single" collapsible defaultValue="Quanto custa carregar?">
            {DUVIDAS.map((d) => (
              <AccordionItem key={d.p} value={d.p}>
                <AccordionTrigger className="text-left text-lg font-semibold">{d.p}</AccordionTrigger>
                <AccordionContent className="text-base text-muted-foreground">{d.r}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Localização */}
      <section id="localizacao" className="border-t border-border bg-muted py-24">
        <div className="mx-auto max-w-6xl px-5">
          <SectionTitle kicker="Localização" title="Passa aqui na Quintino Bocaiúva." />

          <div className="mt-12 grid gap-8 lg:grid-cols-[1fr_1.5fr]">
            <div className="flex flex-col gap-6 rounded-xl bg-card p-8">
              {[
                { icon: MapPin, titulo: "Endereço", valor: ENDERECO_COMPLETO, href: MAPA_LINK_URL },
                { icon: Phone, titulo: "Telefone e WhatsApp", valor: EMPRESA.telefone, href: WHATSAPP_URL },
                { icon: Mail, titulo: "E-mail", valor: EMPRESA.email, href: `mailto:${EMPRESA.email}` },
                { icon: Clock, titulo: "Horário", valor: EMPRESA.horario },
              ].map(({ icon: Icon, titulo, valor, href }) => (
                <div key={titulo} className="flex gap-4">
                  <Icon className="mt-0.5 size-5 shrink-0 text-forest" />
                  <div>
                    <p className="text-sm text-muted-foreground">{titulo}</p>
                    {href ? (
                      <a
                        href={href}
                        target={href.startsWith("http") ? "_blank" : undefined}
                        rel="noreferrer"
                        className="font-semibold hover:text-forest"
                      >
                        {valor}
                      </a>
                    ) : (
                      <p className="font-semibold">{valor}</p>
                    )}
                  </div>
                </div>
              ))}

              <div className="mt-auto flex flex-wrap gap-3 pt-2">
                <Button asChild variant="hero" size="lg">
                  <a href={MAPA_LINK_URL} target="_blank" rel="noreferrer">
                    <Navigation /> Traçar rota
                  </a>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <a href={WHATSAPP_URL} target="_blank" rel="noreferrer">
                    <MessageCircle /> WhatsApp
                  </a>
                </Button>
              </div>
            </div>

            <div className="overflow-hidden rounded-xl border border-border">
              <iframe
                title="Mapa da VMG Power"
                src={MAPA_EMBED_URL}
                className="h-[400px] w-full lg:h-full lg:min-h-[460px]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
