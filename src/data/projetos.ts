import { Projeto } from "src/models/projeto.model";

export const projetosData: Projeto[] = [
  {
    id: '1',
    titulo: 'Download Musicas Youtube',
    imagem:
      '../../assets/img/308407765-db2e6efc-dfa1-488f-9f81-28605f6aae0d.png',
    descricao:
      'O que motivou a criação dessa ferramenta foi a necessidade de adicionar musicas Mp3 a um pendrive para poder ouvir no carro. Com o avanço das ferramentas de streaming houve uma queda em quantiade e qualidade nas ferramentas de downloads, principalmente para downloads em massa, quando surgiu a demanda, percebi que as ferramentas que utilizava ou estava defasadas e deixaram de funcionar ou passaram a cobrar pelo serviço.',
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
      'Blog criado em angular como projeto da Formação em Angular da DIO - Digitan Inovation, integração entre as paginas e noticias, design minimalista e objetivo.',
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
    imagem:
      'https://github.com/paulosergiocf/Portifolio/blob/main/src/assets/img/Imagem%20colada%201.png?raw=true',
    descricao:
      'Aplicação Web para gerenciar a sortear amigos secretos. aplicação tem o objetivo de tornar facil se segura os entros de fim de ano.',
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

  {
    id: '4',
    titulo: 'Calculadora de Área',
    imagem:
      'https://user-images.githubusercontent.com/49497668/134603520-d42185ba-c087-41d1-899e-9b94777af7f4.png',
    descricao:
      'Esta calculadora foi criada com o objetivo de facilitar conversões de área mais utilizadas em certidões de registro de imóveis rurais no estado do paraná.',
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
];
