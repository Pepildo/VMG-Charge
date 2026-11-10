export const EMPRESA = {
  nome: "VMG Power",
  slogan: "Energia limpa para quem está sempre em movimento.",
  endereco: {
    rua: "Rua Quintino Bocaiúva, 131",
    cidade: "Sete Lagoas",
    estado: "MG",
  },
  telefone: "(31) 99202-1710",
  whatsapp: "5531992021710",
  email: "pedro@imop.com.br",
  horario: "Aberto 24 horas, todos os dias",
  precoKwh: 2.15,
} as const;

export const ENDERECO_COMPLETO = `${EMPRESA.endereco.rua} – ${EMPRESA.endereco.cidade}, ${EMPRESA.endereco.estado}`;

export const MAPA_EMBED_URL = `https://www.google.com/maps?q=${encodeURIComponent(
  `${EMPRESA.endereco.rua}, ${EMPRESA.endereco.cidade} - ${EMPRESA.endereco.estado}`,
)}&output=embed`;

export const MAPA_LINK_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  `${EMPRESA.endereco.rua}, ${EMPRESA.endereco.cidade} - ${EMPRESA.endereco.estado}`,
)}`;

export const WHATSAPP_URL = `https://wa.me/${EMPRESA.whatsapp}?text=${encodeURIComponent(
  "Olá! Gostaria de mais informações sobre o eletroposto VMG Power.",
)}`;
