
interface Sector  {
    id: number 
    name: string
    description : string
    image: string 

}

export const sectors: Sector[] = [
    { 
        id: 1,
        name: "Hospitais e Clínicas",
        description: "Fornecimento de gases médicos para instituições de saúde.",
        image: "https://oxiriber.com.br/img/produtos/oxigenio.webp?v=2"
    } , 
    { 
        id: 2,
        name: "Indústrias e Manufatura",
        description: "Fornecimento de gases industriais para diversos setores.",
        image: "https://oxiriber.com.br/img/produtos/argonio.webp?v=2"
    } ,
    { 
        id: 3,
        name: "Laboratórios de Pesquisa e Análise",
        description: "Fornecimento de gases para laboratórios de pesquisa e análise.",
        image: "https://oxiriber.com.br/img/produtos/helio.webp?v=2"
    }
]
