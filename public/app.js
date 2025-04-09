{
  "destinos" [
    {
      "id": 2,
      "titulo": "Dolphin Mall, Miami USA",
      "descricao": "O maior outlet de Miami",
      "conteudo": "O Dolphin Mall é um dos maiores shoppings de Miami, oferecendo uma ampla variedade de lojas, outlets, restaurantes e opções de entretenimento para toda a família.",
      "categoria": "Shopping",
      "imagem": "dolphin-mall-ramblas.jpg"
    },
    {
      "id": 3,
      "titulo": "Sea World, San Diego USA",
      "descricao": "Parque marinho famoso",
      "conteudo": "SeaWorld San Diego é um parque temático e aquático com incríveis shows de animais marinhos, montanhas-russas emocionantes e experiências interativas.",
      "categoria": "Parque Aquático",
      "imagem": "sandiego.png"
    },
    {
      "id": 4,
      "titulo": "Central Park, New York USA",
      "descricao": "Pulmão verde de NYC",
      "conteudo": "Central Park, em Nova York, é um icônico parque urbano com paisagens deslumbrantes, trilhas, lagos, áreas de lazer e atrações culturais, perfeito para passeios e atividades ao ar livre.",
      "categoria": "Parque Urbano",
      "imagem": "Central-Park.jpg"
    },
    {
      "id": 5,
      "titulo": "Cataratas do Niágara, Nova York",
      "descricao": "Maravilha natural",
      "conteudo": "Cataratas do Niágara, em Nova York, são um dos mais impressionantes espetáculos naturais, com quedas d'água majestosas, passeios de barco emocionantes e vistas deslumbrantes.",
      "categoria": "Atração Natural",
      "imagem": "niaraga.png"
    },
    {
      "id": 6,
      "titulo": "Museu Metropolitano de Arte",
      "descricao": "O famoso MET",
      "conteudo": "O Museu Metropolitano de Arte, em Nova York, é um dos maiores e mais prestigiosos museus do mundo, abrigando uma coleção impressionante de arte e artefatos de diversas culturas e épocas.",
      "categoria": "Museu",
      "imagem": "museum.jpg"
    },
    {
      "id": 7,
      "titulo": "Estátua da Liberdade, Nova York",
      "descricao": "Símbolo americano",
      "conteudo": "A Estátua da Liberdade, em Nova York, é um dos maiores símbolos dos Estados Unidos, representando liberdade e democracia, com vistas incríveis da cidade a partir de sua coroa.",
      "categoria": "Monumento",
      "imagem": "estatua.jpg"
    },
    {
      "id": 8,
      "titulo": "Golden Gate Bridge, Califórnia",
      "descricao": "Ponte icônica de SF",
      "conteudo": "A Golden Gate Bridge, na Califórnia, é uma das pontes mais icônicas do mundo, ligando San Francisco a Marin County, com vistas deslumbrantes e uma arquitetura impressionante.",
      "categoria": "Ponte",
      "imagem": "golden-gate.jpg"
    },
    {
      "id": 9,
      "titulo": "Casa Branca, Washington",
      "descricao": "Sede do governo",
      "conteudo": "A Casa Branca, em Washington, D.C., é a residência oficial e escritório do presidente dos Estados Unidos, um símbolo histórico e político do país, aberta para visitas guiadas.",
      "categoria": "Marco Político",
      "imagem": "casa-branca.jpg"
    },
    {
      "id": 10,
      "titulo": "Las Vegas Strip, Nevada",
      "descricao": "Capital do entretenimento",
      "conteudo": "A Las Vegas Strip, em Nevada, é uma avenida vibrante repleta de cassinos icônicos, hotéis luxuosos, shows espetaculares e uma vida noturna intensa, tornando-se um dos destinos mais famosos do mundo.",
      "categoria": "Entretenimento",
      "imagem": "the-strip.jpg"
    }
  ]
}
const locaisTuristicos = [
  {
      titulo: "Dolphin Mall, Miami USA",
      imagem: "dolphin-mall-ramblas.jpg",
      descricao: "O Dolphin Mall é um dos maiores shoppings de Miami, oferecendo uma ampla variedade de lojas, outlets, restaurantes e opções de entretenimento para toda a família."
  },
  {
      titulo: "Sea World, San Diego USA",
      imagem: "sandiego.png",
      descricao: "SeaWorld San Diego é um parque temático e aquático com incríveis shows de animais marinhos, montanhas-russas emocionantes e experiências interativas."
  },
  {
      titulo: "Central Park, New York USA",
      imagem: "Central-Park.jpg",
      descricao: "Central Park, em Nova York, é um icônico parque urbano com paisagens deslumbrantes, trilhas, lagos, áreas de lazer e atrações culturais, perfeito para passeios e atividades ao ar livre."
  },
  {
      titulo: "Cataratas do Niágara, Nova York",
      imagem: "niaraga.png",
      descricao: "Cataratas do Niágara, em Nova York, são um dos mais impressionantes espetáculos naturais, com quedas d'água majestosas, passeios de barco emocionantes e vistas deslumbrantes."
  },
  {
      titulo: "Museu Metropolitano de Arte",
      imagem: "museum.jpg",
      descricao: "O Museu Metropolitano de Arte, em Nova York, é um dos maiores e mais prestigiosos museus do mundo, abrigando uma coleção impressionante de arte e artefatos de diversas culturas e épocas."
  },
  {
      titulo: "Estátua da Liberdade, Nova York",
      imagem: "estatua.jpg",
      descricao: "A Estátua da Liberdade, em Nova York, é um dos maiores símbolos dos Estados Unidos, representando liberdade e democracia, com vistas incríveis da cidade a partir de sua coroa."
  },
  {
      titulo: "Golden Gate Bridge, Califórnia",
      imagem: "golden-gate.jpg",
      descricao: "A Golden Gate Bridge, na Califórnia, é uma das pontes mais icônicas do mundo, ligando San Francisco a Marin County, com vistas deslumbrantes e uma arquitetura impressionante."
  },
  {
      titulo: "Casa Branca, Washington",
      imagem: "casa-branca.jpg",
      descricao: "A Casa Branca, em Washington, D.C., é a residência oficial e escritório do presidente dos Estados Unidos, um símbolo histórico e político do país, aberta para visitas guiadas."
  },
  {
      titulo: "Las Vegas Strip, Nevada",
      imagem: "the-strip.jpg",
      descricao: "A Las Vegas Strip, em Nevada, é uma avenida vibrante repleta de cassinos icônicos, hotéis luxuosos, shows espetaculares e uma vida noturna intensa, tornando-se um dos destinos mais famosos do mundo."
  }
];

function criarCard(local) {
  const card = document.createElement("div");
  card.className = "card-turistico"; // classe CSS para estilizar o card

  const titulo = document.createElement("h2");
  titulo.textContent = local.titulo;
  titulo.className = "titulo-card"; // se quiser estilizar o título separadamente

  const imagem = document.createElement("img");
  imagem.src = local.imagem;
  imagem.alt = local.titulo;
  imagem.className = "img-fluid imagem-card"; // aplica duas classes

  const descricao = document.createElement("p");
  descricao.textContent = local.descricao;
  descricao.className = "descricao-card";

  card.appendChild(titulo);
  card.appendChild(imagem);
  card.appendChild(descricao);

  return card;
}

window.onload = () => {
  const container = document.getElementById("cards-container");

  locaisTuristicos.forEach(local => {
    const card = criarCard(local);
    container.appendChild(card);
  });
};
