import { describe, expect, it } from "vitest";

import { EMPRESA } from "./empresa";
import { calcularCusto } from "./preco";

describe("preço da recarga", () => {
  it("cobra R$ 2,15 por kWh", () => {
    expect(EMPRESA.precoKwh).toBe(2.15);
  });

  it("40 kWh custam R$ 86,00", () => {
    expect(calcularCusto(40)).toBe(86);
  });

  it("arredonda para centavos", () => {
    expect(calcularCusto(1.5)).toBe(3.23);
  });

  it("não cobra nada para 0 kWh", () => {
    expect(calcularCusto(0)).toBe(0);
  });
});
