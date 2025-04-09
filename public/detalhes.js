window.onload = () => {
    const params = new URLSearchParams(window.location.search);
    const id = parseInt(params.get("id"));
  
    const destino = destinos.find(item => item.id === id);
    const container = document.getElementById("detalhes-container");
  
    if (destino) {
      container.innerHTML = `
        <h1>${destino.titulo}</h1>
        <img src="${destino.imagem}" alt="${destino.titulo}" style="max-width: 100%; height: auto;">
        <p>${destino.conteudo}</p>
      `;
    } else {
      container.innerHTML = `<p>Destino não encontrado.</p>`;
    }
  };

  const destinos = [
    {
      id: 1,
      titulo: "Dolphin Mall, Miami USA",
      imagem: "dolphin-mall-ramblas.jpg",
      conteudo: "O Dolphin Mall é um dos maiores shoppings de Miami, oferecendo uma ampla variedade de lojas, outlets, restaurantes e opções de entretenimento para toda a família."
    },
    {
      id: 2,
      titulo: "Sea World, San Diego USA",
      imagem: "sandiego.png",
      conteudo: "SeaWorld San Diego é um parque temático e aquático com incríveis shows de animais marinhos, montanhas‑russas emocionantes e experiências interativas."
    },
    {
      id: 3,
      titulo: "Central Park, New York USA",
      imagem: "Central-Park.jpg",
      conteudo: "Central Park, em Nova York, é um icônico parque urbano com paisagens deslumbrantes, trilhas, lagos, áreas de lazer e atrações culturais, perfeito para passeios e atividades ao ar livre."
    },
    {
      id: 4,
      titulo: "Cataratas do Niágara, Nova York",
      imagem: "niaraga.png",
      conteudo: "Cataratas do Niágara, em Nova York, são um dos mais impressionantes espetáculos naturais, com quedas d'água majestosas, passeios de barco emocionantes e vistas deslumbrantes."
    },
    {
      id: 5,
      titulo: "Museu Metropolitano de Arte",
      imagem: "museum.jpg",
      conteudo: "O Museu Metropolitano de Arte, em Nova York, é um dos maiores e mais prestigiosos museus do mundo, abrigando uma coleção impressionante de arte e artefatos de diversas culturas e épocas."
    },
    {
      id: 6,
      titulo: "Estátua da Liberdade, Nova York",
      imagem: "estatua.jpg",
      conteudo: "A Estátua da Liberdade, em Nova York, é um dos maiores símbolos dos Estados Unidos, representando liberdade e democracia, com vistas incríveis da cidade a partir de sua coroa."
    },
    {
      id: 7,
      titulo: "Golden Gate Bridge, Califórnia",
      imagem: "golden-gate.jpg",
      conteudo: "A Golden Gate Bridge, na Califórnia, é uma das pontes mais icônicas do mundo, ligando San Francisco a Marin County, com vistas deslumbrantes e uma arquitetura impressionante."
    },
    {
      id: 8,
      titulo: "Casa Branca, Washington",
      imagem: "casa-branca.jpg",
      conteudo: "A Casa Branca, em Washington, D.C., é a residência oficial e escritório do presidente dos Estados Unidos, um símbolo histórico e político do país, aberta para visitas guiadas."
    },
    {
      id: 9,
      titulo: "Las Vegas Strip, Nevada",
      imagem: "the-strip.jpg",
      conteudo: "A Las Vegas Strip, em Nevada, é uma avenida vibrante repleta de cassinos icônicos, hotéis luxuosos, shows espetaculares e uma vida noturna intensa, tornando-se um dos destinos mais famosos do mundo."
    }
  ];
  
  
  document.addEventListener("DOMContentLoaded", () => {
    console.log("detalhes.js carregado");
  
    // 1) Pega o id da query string
    const params = new URLSearchParams(window.location.search);
    const id = parseInt(params.get("id"));
    console.log("ID recebido:", id);
  
    // 2) Procura o destino correspondente
    const destino = destinos.find(d => d.id === id);
    console.log("Destino encontrado:", destino);
  
    const container = document.getElementById("detalhes-container");

    if (destino) {
      container.innerHTML = `
        <h1>${destino.titulo}</h1>
        <img src="${destino.imagem}" alt="${destino.titulo}" style="max-width:100%;height:auto;">
        <p>${destino.conteudo}</p>
      `;
    } else {
      container.innerHTML = "<p>Destino não encontrado.</p>";
    }
  });
  
  