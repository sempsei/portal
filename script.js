// Seção de Gerais
const politicaLista = document.getElementById("gerais-lista");

fetch(
  "https://newsapi.org/v2/top-headlines?country=br&apiKey=SUA_CHAVE_API"
)
  .then((response) => response.json())
  .then((data) => {
    data.articles.forEach((article) => {
      const li = document.createElement("li");
      const link = document.createElement("a");
      link.href = article.url;
      link.textContent = article.title;
      link.target = "_blank"; // Abre o link em uma nova aba
      li.appendChild(link);
      politicaLista.appendChild(li);
    });
  })
  .catch((error) => console.log(error));

// Seção de esportes
const esportesLista = document.getElementById("esportes-lista");

fetch(
  "https://newsapi.org/v2/top-headlines?country=br&category=sports&apiKey=SUA_CHAVE_API"
)
  .then((response) => response.json())
  .then((data) => {
    data.articles.forEach((article) => {
      const li = document.createElement("li");
      const link = document.createElement("a");
      link.href = article.url;
      link.textContent = article.title;
      link.target = "_blank"; // Abre o link em uma nova aba
      li.appendChild(link);
      esportesLista.appendChild(li);
    });
  })
  .catch((error) => console.log(error));

// Seção de ciencia
const entretenimentoLista = document.getElementById("ciencia-lista");

fetch(
  "https://newsapi.org/v2/top-headlines?country=br&category=science&apiKey=SUA_CHAVE_API"
)
  .then((response) => response.json())
  .then((data) => {
    data.articles.forEach((article) => {
      const li = document.createElement("li");
      const link = document.createElement("a");
      link.href = article.url;
      link.textContent = article.title;
      link.target = "_blank"; // Abre o link em uma nova aba
      li.appendChild(link);
      entretenimentoLista.appendChild(li);
    });
  })
  .catch((error) => console.log(error));

// Seção de negócios
const negociosLista = document.getElementById("tecnologia-lista");

fetch(
  "https://newsapi.org/v2/top-headlines?country=br&category=technology&apiKey=SUA_CHAVE_API"
)
  .then((response) => response.json())
  .then((data) => {
    data.articles.forEach((article) => {
      const li = document.createElement("li");
      const link = document.createElement("a");
      link.href = article.url;
      link.textContent = article.title;
      link.target = "_blank"; // Abre o link em uma nova aba
      li.appendChild(link);
      negociosLista.appendChild(li);
    });
  })
  .catch((error) => console.log(error));
