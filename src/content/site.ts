export type ProjectCover = "campaign" | "institution" | "study" | "lab" | "system";

export type Project = {
  slug: string;
  number: string;
  title: string;
  subtitle: string;
  year: string;
  tags: string[];
  featured: boolean;
  cover: ProjectCover;
  image?: string;
  gallery?: { src: string; alt: string }[];
  href?: string;
  hrefLabel?: string;
  instagram?: string;
  summary: string;
  problem: string;
  direction: string;
  execution: string;
  result: string;
};

export const site = {
  name: "Aristides Evandro C. Argentin",
  nameFull: "Aristides Evandro Caldeira Argentin",
  shortName: "Aristides",
  initials: "AE",
  role: "Design, comunicação e sistemas",
  location: "Goiânia, GO",
  bornIn: "Paulínia, SP",
  email: "aristidesevandro@gmail.com",
  phone: "(62) 98600-2002",
  whatsapp: "https://wa.me/5562986002002",
  linkedin: "https://www.linkedin.com/in/aristides-evandro/",
  github: "https://github.com/AristidesEvan",
  portrait: "/retrato.jpg",
  portraitAlt:
    "Retrato de Aristides Evandro C. Argentin, camiseta branca, fundo claro",
  tagline: "Eu desenho a conversa e construo o que desenho.",
  metaDescription:
    "Desenho a peça. Construo o que desenhei. Design, comunicação e sistemas — da curiosidade de escola ao ofício.",
  heroEpigraph:
    "Design is not just what it looks like and feels like. Design is how it works.",
  heroEpigraphBy: "Steve Jobs",
  heroTitle: ["Desenho a peça.", "Construo o que", "desenhei."],
  heroLead:
    "Desenho desde antes de saber que aquilo tinha nome — cartaz de escola, camiseta de time, o layout de um post que ninguém pediu, só porque parecia bonito assim. Anos depois essa curiosidade virou ofício: passei pela Coordenação de Educação a Distância da PUC Goiás como desenhista industrial gráfico e fui me aprofundando, ano após ano, até assumir a análise de tecnologia da informação na Comissão de Admissão Discente — dashboards, automações, sistemas que sustentam quem vem depois de mim. O que você está vendo aqui é essa mesma curiosidade que nunca parou de perguntar “como isso funciona por dentro?”",
  aboutLead:
    "Nasci em Paulínia, no interior de São Paulo, e cresci entre farda e teclado em Goiânia. Duas graduações — Gestão de TI pela UNIP-GO, Análise e Desenvolvimento de Sistemas pela PUC Goiás — não por acaso: sempre me interessou menos a ferramenta em si e mais o que ela resolve pra alguém do outro lado.",
  aboutBody: [
    "O desenho me puxava desde antes de ter nome de cargo. De 2022 a 2025 fui desenhista industrial gráfico na Coordenação de Educação a Distância (CEAD) da PUC Goiás. O trabalho ia de sites em HTML, CSS, JavaScript e PHP até a administração do servidor Linux que hospedava tudo isso — passando por artes de post, logo, objetos de aprendizagem no Moodle e a produção de conteúdo pro Instagram e YouTube. Em março de 2025 fui promovido a analista de tecnologia da informação na CAD, a Comissão de Admissão Discente: CRM de captação, dashboards, mini SaaS internos e o site oficial, até deixar a instituição em 2026. O cargo mudou porque eu queria o motor — entender, por dentro, o sistema que sustenta quem vem depois.",
    "Subi do zero o site da Coordenação de Educação a Distância e o perfil @cead.pucgoias. Já na CAD, escrevi programas que tiravam da equipe o trabalho mais braçal — como lançar, um a um e à mão, a nota do Enem de cada candidato. É esse o ofício, no fim: entender a peça, construir o canal, e automatizar o que não precisa de julgamento humano.",
  ],
  pillars: [
    "Ritmo",
    "Ofício",
    "Sistemas",
    "Tipo",
    "Dados",
    "Conversa",
  ],
  methodEyebrow: "Percurso",
  methodTitle: "Como as ferramentas chegaram.",
  method: [
    {
      number: "01",
      title: "Origem",
      body: "Aos quinze anos, informática básica com internet no Senac. No colégio militar, alamar no peito e Arduino no terceiro ano. A máquina entrou cedo.",
    },
    {
      number: "02",
      title: "Desenho",
      body: "Figma, Canva, Photoshop, Illustrator. Peça, logo, post, grid. Na CEAD isso virou canal: o que a pessoa vê precisa caber na tela e ainda parecer feito por gente.",
    },
    {
      number: "03",
      title: "Código",
      body: "HTML, CSS, JavaScript, PHP. Java na formação. Git no dia a dia. Python quando o script era o atalho. SELECT quando a planilha já não aguentava.",
    },
    {
      number: "04",
      title: "Operação",
      body: "Linux, rede, servidor, Docker no suficiente. CRM, dashboard, Moodle. O desenho só existe se o sistema abre na segunda de manhã.",
    },
  ],
  skills: [
    {
      title: "Origem",
      body: "Comecei cedo: informática básica aos 15, no Senac. No Colégio Militar, farda, alamar e um Arduino no terceiro ano — a primeira vez que fiz algo “pensar”.",
    },
    {
      title: "Desenho",
      body: "Figma, Canva, Photoshop, Illustrator — peça, logo, post, grid. Na CEAD isso virou canal de verdade: o que a pessoa vê precisa caber na tela e ainda parecer feito por gente.",
    },
    {
      title: "Código",
      body: "HTML5, CSS3, JavaScript e PHP no dia a dia. Java ficou na graduação — não é a capa. Git e GitHub sempre, Python quando o script resolve, e SQL: a arte de fazer a pergunta certa pra tabela certa.",
    },
    {
      title: "Operação",
      body: "Linux, servidor, rede. Docker no suficiente pra subir o que precisa. CRM, dashboard, mini SaaS — e a automação do trabalho que não pede julgamento, só repetição.",
    },
  ],
  nav: [
    { href: "/trabalho", label: "Trabalho", short: "Trabalho" },
    { href: "/laboratorio", label: "Laboratório", short: "Lab" },
    { href: "/sobre", label: "Sobre", short: "Sobre" },
  ],
  timeline: [
    {
      period: "2025 — 2026",
      role: "Analista de tecnologia da informação",
      place: "CAD · Comissão de Admissão Discente · PUC Goiás",
      note: "Queria o motor, não só a peça na mesa. Promovido a partir da CEAD. CRM de captação (presencial e EAD), mini SaaS, dashboards, site oficial e automações — inclusive lançamento de nota do Enem que antes era feito à mão. Saí da instituição em 2026.",
    },
    {
      period: "2022 — 2025",
      role: "Desenhista industrial gráfico",
      place: "CEAD · Coordenação de Educação a Distância · PUC Goiás",
      note: "Era a mesa em que a peça e o servidor sentavam juntos. Sites em HTML, CSS, JS e PHP; Linux; artes, logos e posts; Moodle; Instagram e YouTube. O site e o perfil da CEAD nasceram aqui.",
    },
    {
      period: "2023 — 2026",
      role: "Análise e Desenvolvimento de Sistemas",
      place: "PUC Goiás",
      note: "Queria construir o que eu já desenhava. Graduação concluída.",
    },
    {
      period: "2020 — 2022",
      role: "Gestão de Tecnologia da Informação",
      place: "UNIP-GO",
      note: "Graduação. Informação a serviço da gestão — o olhar de processo veio daí.",
    },
    {
      period: "2017 — 2019",
      role: "Ensino médio",
      place: "Colégio da Polícia Militar de Goiás · Mansões Paraíso",
      note: "No Colégio da Polícia Militar de Goiás, Mansões Paraíso, aprendi disciplina antes de aprender lógica — vieram quase juntas. Fui de aluno de farda a alamar, e no terceiro ano troquei parte da rotina por um Arduino: minha primeira robótica, muito antes de eu chamar aquilo de “programação”.",
      quote: "Não há saber mais ou saber menos: há saberes diferentes.",
      quoteBy: "Paulo Freire",
      noteAfter:
        "O colégio, no seu jeito rígido, ensinou isso do seu jeito. O nome mudou depois; a época era essa.",
    },
    {
      period: "Aos 15 anos",
      role: "Informática básica com internet",
      place: "Senac",
      note: "Primeiro contato formal com máquina, rede e o gosto de montar o que acende.",
    },
  ],
  degrees: [
    {
      title: "Análise e Desenvolvimento de Sistemas",
      place: "PUC Goiás",
      period: "2023 — 2026",
      kind: "Graduação",
    },
    {
      title: "Gestão de Tecnologia da Informação",
      place: "UNIP-GO",
      period: "2020 — 2022",
      kind: "Graduação",
    },
  ],
  courses: [
    "Alura — Front-end, 2021–2022",
    "B7Web — Full stack PHP, a partir de 2021",
    "Senac — informática básica com internet, aos 15 anos",
  ],
  principles: [
    {
      title: "Manter leve",
      body: "Página que abre rápido, ferramenta que cabe no bolso, tipo na medida certa. Leveza também é competência.",
    },
    {
      title: "Construir o que desenhei",
      body: "A peça sem o sistema é cartaz. O sistema sem a peça é fila. Os dois lados da mesa — e eu ainda estou nos dois.",
    },
    {
      title: "Usar o que a mesa pede",
      body: "SQL, Docker, Java: cada um no lugar certo, na medida certa. O critério é o que está no ar — isso é que mostra domínio.",
    },
  ],
  colophon: [
    {
      title: "Tipo",
      body: "Fraunces no display (editorial, um pouco de calor). Geist no restante (neutra, lê rápido). Só latin, via next/font: o tipo chega com a página.",
    },
    {
      title: "Cor",
      body: "Papel, tinta, terracota, oliva. Paleta curta de propósito. Presença não precisa de arco-íris.",
    },
    {
      title: "Peso",
      body: "Retrato, stills, ornamentos em SVG. Páginas estáticas. O laboratório é estado e CSS que eu escrevi — inclusive um SELECT sobre o ofício.",
    },
    {
      title: "Atalho",
      body: "Ctrl+K ou ⌘K abre o índice. É o mesmo gesto de um produto bem feito: chegar rápido no que importa.",
    },
  ],
} as const;

export const projects: Project[] = [
  {
    slug: "cead",
    number: "01",
    title: "CEAD PUC Goiás",
    subtitle: "Site do zero + Instagram do zero",
    year: "2022—2025",
    tags: ["Site", "Instagram", "EaD"],
    featured: true,
    cover: "study",
    image: "/work/cead.jpg",
    gallery: [
      {
        src: "/work/cead.jpg",
        alt: "Página inicial do site da CEAD PUC Goiás",
      },
    ],
    href: "https://cead.pucgoias.edu.br/",
    hrefLabel: "cead.pucgoias.edu.br",
    instagram: "https://www.instagram.com/cead.pucgoias/",
    summary:
      "A Coordenação de Educação a Distância precisava de casa própria na web e de um canal que falasse com o aluno EaD. Eu subi os dois: o site e o @cead.pucgoias.",
    problem:
      "O EaD da PUC Goiás não pode parecer anexo. Família e aluno precisam achar curso, aula síncrona, prova, tutoria e inscrição sem se perder no portal geral. E o Instagram da coordenação simplesmente não existia.",
    direction:
      "Um site institucional, azul e amarelo da PUC, com caminho curto até o que o estudante veio buscar. No Instagram, a mesma voz: inscreva-se, horário, aula inaugural — peça que parece universidade, não agência genérica.",
    execution:
      "Front do zero (HTML, CSS, JavaScript, PHP). Home com faixa de captação, cards de prova e aula síncrona, contato e Instagram. Perfil criado e alimentado: grid, tom, telefone, CTA. Sem terceirizar a cara do canal.",
    result:
      "O endereço que a coordenação usa hoje: cead.pucgoias.edu.br e instagram.com/cead.pucgoias. Dá para clicar. O ofício está aí.",
  },
  {
    slug: "puc-goias",
    number: "02",
    title: "Portal PUC Goiás",
    subtitle: "Site oficial da universidade",
    year: "2022—2026",
    tags: ["Institucional", "Web", "Captação"],
    featured: true,
    cover: "institution",
    image: "/work/pucgoias.jpg",
    gallery: [
      {
        src: "/work/pucgoias.jpg",
        alt: "Página inicial do site oficial da PUC Goiás",
      },
    ],
    href: "https://www.pucgoias.edu.br/",
    hrefLabel: "pucgoias.edu.br",
    summary:
      "Manutenção, desenvolvimento e atualização do portal da universidade — o lugar em que vestibular, Enem, graduação e EaD se encontram.",
    problem:
      "Portal institucional não é landing de produto. É confiança, volume e caminho. Quebrar uma página no meio do processo não é detalhe: é gente parada na fila.",
    direction:
      "Tratar o site como peça viva: hierarquia, CTA, ritmo da marca. Do lado de dentro, o mesmo ofício vira operação — o que mudou, o que quebrou, o que precisa estar no ar.",
    execution:
      "HTML, CSS, JavaScript, PHP e servidor Linux. Atualização do site oficial, alinhada à captação (presencial e EAD) e ao CRM que passei a operar na CAD, em 2025.",
    result:
      "Um olhar treinado no portal que a pessoa abre de fato. Não desenhei a PUC sozinho. O ofício está na manutenção que aguenta instituição.",
  },
  {
    slug: "automacoes",
    number: "03",
    title: "SaaS internos e bots",
    subtitle: "Tirar o braçal da equipe — nota do Enem incluída",
    year: "2025—2026",
    tags: ["Automação", "Dados", "CRM"],
    featured: true,
    cover: "system",
    image: "/work/automacao.jpg",
    gallery: [
      {
        src: "/work/automacao.jpg",
        alt: "Diagrama: nota do Enem, automação e registro institucional",
      },
    ],
    summary:
      "Mini sistemas para gargalo interno. O exemplo que todo mundo na equipe entende: cadastrar à mão a nota do Enem de cada candidato. Passei isso para o programa.",
    problem:
      "Captação de universidade gera fila invisível: planilha, nota, sistema, de novo. Gente boa gasta o dia em trabalho que não pede julgamento — só consistência. Isso atrasa o aluno e cansa a equipe.",
    direction:
      "Não vender “inteligência artificial”. Fazer o repetitivo desaparecer. Entrada da nota, regra, registro. Relatório e dashboard para quem precisa ver o número, não a planilha.",
    execution:
      "Soluções internas e mini SaaS na CAD: automação acadêmica e administrativa, CRM de captação, relatórios e indicadores. Um dos bots assume o lançamento de nota do Enem que era manual. Sem print de sistema interno — dado de aluno não é portfólio.",
      result:
      "Tempo devolvido à equipe. Campanha que gera fila só funciona se o backoffice não afogar — e isso vale em qualquer mesa.",
  },
  {
    slug: "laboratorio",
    number: "04",
    title: "Laboratório",
    subtitle: "Headline, SQL e um frame de Figma",
    year: "2026",
    tags: ["Interação", "Tipo", "SQL"],
    featured: false,
    cover: "lab",
    summary:
      "Compositor de headline, um SELECT sobre o ofício e um quadro com cara de Figma — peças que eu construí.",
    problem:
      "Portfólio de design que não se mexe parece cartaz. Faltava o ofício em movimento.",
    direction:
      "Tipografia, SQL, layout. CSS e um pouco de estado. Se está rápido, é porque eu escrevi assim.",
    execution:
      "Componentes client-side pontuais. Navegável no teclado.",
    result:
      "A página Laboratório.",
  },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}

export function featuredProjects() {
  return projects.filter((project) => project.featured);
}

export function instagramHandle(url: string) {
  try {
    return new URL(url).pathname.split("/").filter(Boolean)[0] ?? "";
  } catch {
    return "";
  }
}
