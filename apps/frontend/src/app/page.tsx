import Pagina from "@/components/template/Pagina";
import { Evento } from "@/core";

export default function Home() {
  const e: Partial<Evento> = {};
  return (
    <Pagina>
      <h1 className="text-4xl font-bold">
        <div>Início</div>
      </h1>
    </Pagina>
  );
}
