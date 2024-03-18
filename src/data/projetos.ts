import { Projeto } from "src/models/projeto.model";

export const projetosData: Projeto[] = [
  {
    id: 1,
    titulo: 'Download Musicas Youtube',
    imagem:
      'https://github.com/paulosergiocf/Portifolio/assets/49497668/50933eb6-a77b-4e4b-b2d6-057918b03d66',
    descricao:
      'O que motivou a criação dessa ferramenta foi a necessidade de adicionar musicas Mp3 a um pendrive para poder ouvir no carro. Com o avanço das ferramentas de streaming houve uma queda em quantiade e qualidade nas ferramentas de downloads, principalmente para downloads em massa, quando surgiu a demanda, percebi que as ferramentas que utilizava ou estava defasadas e deixaram de funcionar ou passaram a cobrar pelo serviço.',
    stacks: [
      {
        nome: 'python',
        imagem:
          'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg',
      },
    ],
    deploy:
      'https://github.com/paulosergiocf/Download-Musicas-Youtube/releases/tag/v1.0-Alpha',
    repositorio: 'https://github.com/paulosergiocf/Download-Musicas-Youtube',
  },

  {
    id: 2,
    titulo: 'Blog',
    imagem:
      'https://github.com/paulosergiocf/Portifolio/assets/49497668/8eccf821-5f62-42db-9155-a1b97b5b83b9',
    descricao:
      'Blog criado em angular como projeto da Formação em Angular da DIO - Digitan Inovation, integração entre as paginas e noticias, design minimalista e objetivo.',
    stacks: [
      {
        nome: 'Angular',
        imagem:
          'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/angular/angular-original.svg',
      },
    ],
    deploy: '',
    repositorio: 'https://github.com/paulosergiocf/blog',
  },

  {
    id: 3,
    titulo: 'Amigo Secreto',
    imagem:
      'https://github.com/paulosergiocf/Portifolio/assets/49497668/c259b7b8-e9ce-4fff-ac93-6edf4cf3d7a2',
    descricao:
      'Aplicação Web para gerenciar a sortear amigos secretos. aplicação tem o objetivo de tornar facil se segura os entros de fim de ano.',
    stacks: [
      {
        nome: 'python',
        imagem:
          'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg',
      },
      {
        nome: 'Django',
        imagem:
          'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/django/django-plain.svg',
      },
      {
        nome: 'Postgres',
        imagem:
          'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg',
      },
    ],
    deploy: '',
    repositorio: 'https://github.com/paulosergiocf/AmigoSecreto',
  },

  {
    id: 4,
    titulo: 'Calculadora de Área',
    imagem:
      'https://github.com/paulosergiocf/Portifolio/assets/49497668/af56875e-60fb-4a5e-bfa3-a9d805139e54',
    descricao:
      'Esta calculadora foi criada com o objetivo de facilitar conversões de área mais utilizadas em certidões de registro de imóveis rurais no estado do paraná.',
    stacks: [
      {
        nome: 'python',
        imagem:
          'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg',
      },
    ],
    deploy: '',
    repositorio: 'https://github.com/paulosergiocf/CalculadoraDeArea',
  },

  {
    id: 5,
    titulo: 'Desenhar com Azimutes/Rumos e distâncias no CAD.',
    imagem:
      'https://github.com/paulosergiocf/Portifolio/assets/49497668/017ed003-8b7f-4520-a06c-428d0b27dfc9',
    descricao:
      'Desenvolvi este programa com o objetivo de testar e aprimorar minhas habilidades com python, e tambem gerar scripts com azimutes e distâncias de maneira mais fácil.',
    stacks: [
      {
        nome: 'python',
        imagem:
          'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg',
      },
    ],
    deploy:
      'https://github.com/paulosergiocf/Desenhar-azimute-rumo-e-distancias/releases/tag/v1.0',
    repositorio:
      'https://github.com/paulosergiocf/Desenhar-azimute-rumo-e-distancias',
  },
];
