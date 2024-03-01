import { Contato } from "./contato.models";


export interface Perfil {
  capa: string;
  nome: string;
  atividade: string;
  sobre: string;
  contatos: Contato;

}
