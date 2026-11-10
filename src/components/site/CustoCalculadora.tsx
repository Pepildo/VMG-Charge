import { useState } from "react";

import { Slider } from "@/components/ui/slider";
import { EMPRESA } from "@/lib/empresa";
import { calcularCusto, formatarReais } from "@/lib/preco";

export function CustoCalculadora() {
  const [kwh, setKwh] = useState(30);
  const custo = calcularCusto(kwh);

  return (
    <div className="rounded-xl bg-card p-7 text-card-foreground shadow-soft md:p-9">
      <h3 className="text-2xl font-bold">Quanto vai dar?</h3>
      <p className="mt-1 text-sm text-muted-foreground">
        Arraste a barra e veja o valor da sua recarga.
      </p>

      <div className="mt-8 grid grid-cols-2 gap-4 border-y border-border py-5">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">Energia</p>
          <p className="mt-1 font-display text-3xl font-extrabold md:text-4xl">{kwh} kWh</p>
        </div>
        <div className="text-right">
          <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">Total</p>
          <p className="mt-1 font-display text-3xl font-extrabold text-forest md:text-4xl">
            {formatarReais(custo)}
          </p>
        </div>
      </div>

      <Slider
        className="mt-7"
        min={5}
        max={100}
        step={1}
        value={[kwh]}
        onValueChange={(v) => setKwh(v[0] ?? 0)}
        aria-label="Quantidade de energia em kWh"
      />
      <div className="mt-2 flex justify-between text-xs text-muted-foreground">
        <span>5 kWh</span>
        <span>100 kWh</span>
      </div>

      <p className="mt-6 text-xs text-muted-foreground">
        Conta feita com {formatarReais(EMPRESA.precoKwh)} por kWh. O valor que vale é o que aparece
        no carregador no fim da recarga.
      </p>
    </div>
  );
}
