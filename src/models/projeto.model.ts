import { Stack } from "./stack.model";

export interface Projeto {
  id: string;
  titulo: string;
  imagem: string;
  descricao: string;
  stacks: Stack[];
}
