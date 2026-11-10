import { EMPRESA } from "./empresa";

/** Custo da recarga em reais, arredondado para centavos. */
export function calcularCusto(kwh: number, precoKwh: number = EMPRESA.precoKwh): number {
  if (!Number.isFinite(kwh) || kwh <= 0) return 0;
  // toFixed(6) removes float noise (1.5 × 2.15 = 3.2249999…) before rounding half up.
  return Math.round(Number((kwh * precoKwh).toFixed(6)) * 100) / 100;
}

export function formatarReais(valor: number): string {
  return valor.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
}
