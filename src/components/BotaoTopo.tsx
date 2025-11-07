import { BotaoTopoEstilo } from "./buttonTopo";

export function BotaoTopo() {
  return (
    <BotaoTopoEstilo onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
      Voltar ao Topo
    </BotaoTopoEstilo>
  );
}
