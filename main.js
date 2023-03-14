let searchBtn = document.getElementById("search-btn");
let countryInp = document.getElementById("country-inp");

searchBtn.addEventListener("click", () => {
  let countryName = countryInp.value;
  let finalURL = `https://restcountries.com/v3.1/name/${countryName}?fullText=true`;

  fetch(finalURL)
    .then((response) => response.json())
    .then((data) => {
      result.innerHTML = `
      <img src="${data[0].flags.svg}" class="flag-img">
      <h2>${data[0].name.common}</h2>
      <div class="wrapper">
       <h4>Capital:</h4>
       <span>${data[0].capital[0]}</span>
      </div>
      <div class="wrapper">
       <h4>Continente:</h4>
       <span>${data[0].continents[0]}</span>
      </div>
      <div class="wrapper">
       <h4>População:</h4>
       <span>${data[0].population}</span>
      </div>
      <div class="wrapper">
       <h4>Moeda:</h4>
       <span>${data[0].currencies[Object.keys(data[0].currencies)].name} - ${
        Object.keys(data[0].currencies)[0]
      }</span>
      </div>
      <div class="wrapper">
       <h4>Idiomas Comuns:</h4>
       <span>${Object.values(data[0].languages)
         .toString()
         .split(",")
         .join(", ")}</span>
      </div>
      `;
    })
    .catch(() => {
      if (countryName.length == 0) {
        result.innerHTML = `<h3>O campo de entrada não pode estar vazio.</h3>`;
      } else {
        result.innerHTML = `<h3>Insira um nome de país válido.</h3>`;
      }
    });
});
