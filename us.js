// Seção de Gerais
const geraisLista = document.getElementById("gerais-lista");

fetch(
  "https://newsapi.org/v2/top-headlines?country=us&apiKey=c4b913c495fe4138b231641539267631"
)
  .then((response) => response.json())
  .then((data) => {
    data.articles.forEach((article) => {
      const li = document.createElement("li");
      const link = document.createElement("a");
      link.href = article.url;
      link.textContent = article.title;
      li.appendChild(link);
      geraisLista.appendChild(li);
    });
  })
  .catch((error) => console.log(error));

// Seção de esportes
const esportesLista = document.getElementById("esportes-lista");

fetch(
  "https://newsapi.org/v2/top-headlines?country=us&category=sports&apiKey=c4b913c495fe4138b231641539267631"
)
  .then((response) => response.json())
  .then((data) => { 
    data.articles.forEach((article) => {
      const li = document.createElement("li");
      const link = document.createElement("a");
      link.href = article.url;
      link.textContent = article.title;
      li.appendChild(link);
      esportesLista.appendChild(li);
    });
  })
  .catch((error) => console.log(error));

// Seção de ciência
const cienciaLista = document.getElementById("ciencia-lista");

fetch(
  "https://newsapi.org/v2/top-headlines?country=us&category=science&apiKey=c4b913c495fe4138b231641539267631"
)
  .then((response) => response.json())
  .then((data) => {
    data.articles.forEach((article) => {
      const li = document.createElement("li");
      const link = document.createElement("a");
      link.href = article.url;
      link.textContent = article.title;
      li.appendChild(link);
      cienciaLista.appendChild(li);
    });
  })
  .catch((error) => console.log(error));

// Seção de tecnologia
const tecnologiaLista = document.getElementById("tecnologia-lista");

fetch(
  "https://newsapi.org/v2/top-headlines?country=us&category=technology&apiKey=c4b913c495fe4138b231641539267631"
)
  .then((response) => response.json())
  .then((data) => {
    data.articles.forEach((article) => {
      const li = document.createElement("li");
      const link = document.createElement("a");
      link.href = article.url;
      link.textContent = article.title;
      li.appendChild(link);
      tecnologiaLista.appendChild(li);
    });
  })
  .catch((error) => console.log(error));
