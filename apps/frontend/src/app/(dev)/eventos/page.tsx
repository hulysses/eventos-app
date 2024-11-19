import { eventos } from "@/core";
import Image from "next/image";
import Link from "next/link";

export default function EventosPage() {
  return (
    <div className="gap-5 grid grid-cols-3">
      {eventos.map((evento) => (
        <div
          key={evento.id}
          className="bg-zinc-800 rounded-lg overflow-hidden flex flex-col w-full"
        >
          <div className="relative w-full h-44">
            <Image
              src={evento.imagem}
              fill
              alt={evento.nome}
              className="object-cover"
            />
          </div>
          <div className="flex flex-col flex-1 p-7 gap-5">
            <span className="text-lg font-black">{evento.nome}</span>
            <p className="flex-1 text-sm text-zinc-400">{evento.descricao}</p>
            <div className="flex gap-5">
              <Link
                href={`/eventos/admin/${evento.id}/${evento.senha}`}
                className="flex-1 botao vermelho"
              >
                Admin
              </Link>
              <Link
                href={`/convite/${evento.alias}/${evento.senha}`}
                className="flex-1 botao verde"
              >
                Convite
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
