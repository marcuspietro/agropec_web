export type TypeDatesSchedule = "09" | "10" | "11" | "12" | "13" | "14" | "15" | "16" | "17";

export interface IEventSchedule {
  id: string,
  day: TypeDatesSchedule;
  hours: string;
  title: string;
  description: string;
  locale: string;
  thumb: string;
  category: string;
};

export interface ICategory {
  id: string
  name: string;
}

export interface IDateSchedule {
    day: TypeDatesSchedule;
    name_date: string;
};

// export const eventsSchedule: IEventSchedule[] = [
//     {
//     day: "09",
//     horous: "09:00",
//     title: "Abertura Oficial da AGROPEC 2025",
//     description: "Cerimônia de abertura da feira com presença de autoridades, expositores e imprensa.",
//     locale: "Pavilhão Central",
//     thumb: "https://source.unsplash.com/600x400/?ceremony,people"
//   },
//   {
//     day: "09",
//     horous: "12:15",
//     title: "XXV Leilão da Fazenda Virgínia",
//     description: "O leilão mais tradicional da região, com gado de alto padrão e participação de produtores renomados.",
//     locale: "Quadra 12 B do sítio",
//     thumb: "https://source.unsplash.com/600x400/?cattle,auction"
//   },
//   {
//     day: "09",
//     horous: "15:30",
//     title: "Palestra: Tecnologia no Campo",
//     description: "Palestra sobre soluções tecnológicas aplicadas na produção agrícola com especialistas da Embrapa.",
//     locale: "Auditório Verde",
//     thumb: "https://source.unsplash.com/600x400/?technology,agriculture"
//   },
//   {
//     day: "09",
//     horous: "21:00",
//     title: "Show com João Sertanejo",
//     description: "Grande show de abertura com o cantor João Sertanejo animando o público com sucessos do sertanejo raiz.",
//     locale: "Palco Principal",
//     thumb: "https://source.unsplash.com/600x400/?concert,country-music"
//   },

//   {
//     day: "10",
//     horous: "10:00",
//     title: "Demonstração de Máquinas Agrícolas",
//     description: "Demonstração ao vivo de tratores, colheitadeiras e outros maquinários modernos.",
//     locale: "Área Externa - Pátio Tratores",
//     thumb: "https://source.unsplash.com/600x400/?tractor,machine"
//   },
//   {
//     day: "10",
//     horous: "14:00",
//     title: "Palestra: Manejo Sustentável de Solo",
//     description: "Engenheiros agrônomos explicam como preservar o solo e aumentar produtividade.",
//     locale: "Auditório Laranja",
//     thumb: "https://source.unsplash.com/600x400/?soil,agronomy"
//   },
//   {
//     day: "10",
//     horous: "16:30",
//     title: "Oficina Infantil - Pequenos Produtores",
//     description: "Crianças aprendem como plantar, cuidar e colher suas próprias hortas.",
//     locale: "Tenda Kids Verdejante",
//     thumb: "https://source.unsplash.com/600x400/?kids,plants"
//   },
//   {
//     day: "10",
//     horous: "22:00",
//     title: "Show com Banda AgroPop",
//     description: "Banda local mistura ritmos regionais com pop nacional em um show animado.",
//     locale: "Palco Secundário",
//     thumb: "https://source.unsplash.com/600x400/?music,stage"
//   },

//   {
//     day: "11",
//     horous: "08:00",
//     title: "Café com Produtores",
//     description: "Encontro informal entre produtores para troca de experiências e networking.",
//     locale: "Espaço Café Rural",
//     thumb: "https://source.unsplash.com/600x400/?coffee,farmer"
//   },
//   {
//     day: "11",
//     horous: "11:00",
//     title: "Palestra: Mercado de Grãos",
//     description: "Análise do mercado de soja, milho e outras commodities agrícolas.",
//     locale: "Auditório Azul",
//     thumb: "https://source.unsplash.com/600x400/?grain,market"
//   },
//   {
//     day: "11",
//     horous: "17:00",
//     title: "Desfile de Cavalos Mangalarga",
//     description: "Apresentação e avaliação dos cavalos da raça Mangalarga Marchador.",
//     locale: "Arena Animal",
//     thumb: "https://source.unsplash.com/600x400/?horse,parade"
//   },
//   {
//     day: "11",
//     horous: "20:30",
//     title: "Show com Banda Forró Rural",
//     description: "A noite vai esquentar com muito forró pé de serra ao vivo!",
//     locale: "Palco Principal",
//     thumb: "https://source.unsplash.com/600x400/?forro,concert"
//   },

//   {
//     day: "12",
//     horous: "09:30",
//     title: "Curso Rápido de Hidroponia",
//     description: "Aprenda a montar seu sistema hidropônico em casa.",
//     locale: "Tenda Sustentável",
//     thumb: "https://source.unsplash.com/600x400/?hydroponics,plants"
//   },
//   {
//     day: "12",
//     horous: "13:00",
//     title: "Painel: Mulheres no Agro",
//     description: "Debate com produtoras e pesquisadoras sobre o papel feminino no campo.",
//     locale: "Auditório Mulheres do Agro",
//     thumb: "https://source.unsplash.com/600x400/?women,agriculture"
//   },
//   {
//     day: "12",
//     horous: "16:00",
//     title: "Leilão de Cavalos de Raça",
//     description: "Os melhores exemplares de cavalos serão leiloados ao vivo.",
//     locale: "Tenda Animal Premium",
//     thumb: "https://source.unsplash.com/600x400/?horse,auction"
//   },
//   {
//     day: "12",
//     horous: "21:00",
//     title: "Stand Up Agro com João Risada",
//     description: "Humor rural com piadas sobre a vida no campo e o cotidiano agro.",
//     locale: "Palco Cultural",
//     thumb: "https://source.unsplash.com/600x400/?comedy,show"
//   }
// ]

export const daysEvents: IDateSchedule[] = [
    {
        day: "09",
        name_date: "Sábado"
    },
    {
        day: "10",
        name_date: "Domingo"
    },
    {
        day: "11",
        name_date: "Segunda-feira"
    },
    {
        day: "12",
        name_date: "Terça-feira"
    },
    {
        day: "13",
        name_date: "Quinta-feira"
    },
    {
        day: "14",
        name_date: "Sexta-feira"
    },
    {
        day: "15",
        name_date: "Sábado"
    },
    {
        day: "16",
        name_date: "Domingo"
    },
    {
        day: "17",
        name_date: "Segunda-feira"
    }
]