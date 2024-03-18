import { Stack } from "./stack.model";

export interface Projeto {
  id: number;
  titulo: string;
  imagem: string;
  descricao: string;
  stacks: Stack[];
  deploy: string;
  repositorio: string;
}
