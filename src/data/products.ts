export interface Product {
    id: string;
    name: string;
    description: string;
    image: string;
  }
  
  export const products: Product[] = [
    {
      id: "oxigenio-medicinal",
      name: "Oxigênio Medicinal",
      description: "Oxigênio para uso medicinal.",
      image: "https://oxiriber.com.br/img/produtos/argonio.webp?v=2",
    },
    {
      id: "dioxido-carbono",
      name: "Dióxido de Carbono",
      description: "CO₂ para aplicações industriais.",
      image: "https://oxiriber.com.br/img/produtos/argonio.webp?v=2",
    },
    {
      id: "nitrogenio",
      name: "Nitrogênio",
      description: "Nitrogênio para aplicações industriais.",
      image: "https://oxiriber.com.br/img/produtos/argonio.webp?v=2",
    },
  ];