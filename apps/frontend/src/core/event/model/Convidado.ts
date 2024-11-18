export default interface Convidado {
  id: string;
  nome: string;
  email: string;
  confirmado: boolean;
  possuiAcompanhante: string;
  qtdAcompanhantes: number;
}