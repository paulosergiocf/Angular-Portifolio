import { Projeto } from "src/models/projeto.model";

export const projetosData: Projeto[] = [
  {
    id: '1',
    titulo: 'Download Musicas Youtube',
    imagem:
      'https://private-user-images.githubusercontent.com/49497668/308407765-db2e6efc-dfa1-488f-9f81-28605f6aae0d.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MDkyMjA4MDcsIm5iZiI6MTcwOTIyMDUwNywicGF0aCI6Ii80OTQ5NzY2OC8zMDg0MDc3NjUtZGIyZTZlZmMtZGZhMS00ODhmLTlmODEtMjg2MDVmNmFhZTBkLnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNDAyMjklMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjQwMjI5VDE1MjgyN1omWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTg3NzQ5Y2Q3ZTFmNzA5NWEzNGUxZTFjZjZmN2M1Y2QyNTlmZmRjNjNlZDVjYmNkNGI4NzNiZTUyOWVhZmYxYWUmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0.c0afi_Ve-u_woyNoK-wohxYRggoke8z91FOVfilaINc',
    descricao: 'Ferramenta para baixar musica do youtube.',
    stacks: [
      {
        nome: 'python',
        imagem: '',
      },
      {
        nome: 'Tkinter',
        imagem: '',
      },
    ],
  },

  {
    id: '2',
    titulo: 'Blog',
    imagem: '../../assets/img/Imagem colada.png',
    descricao:
      'Blog criado em angular como projeto da Formação em Angular da DIO - Digitan Inovation',
    stacks: [
      {
        nome: 'python',
        imagem: '',
      },
      {
        nome: 'Angular',
        imagem: '',
      },
    ],
  },

  {
    id: '3',
    titulo: 'Amigo Secreto',
    imagem: '../../assets/img/Imagem colada 1.png',
    descricao: 'Aplicação Web para gerenciar a sortea amigos secretos.',
    stacks: [
      {
        nome: 'python',
        imagem: '',
      },
      {
        nome: 'Django',
        imagem: '',
      },
    ],
  },
];
