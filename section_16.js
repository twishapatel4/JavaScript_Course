'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

// NEW COUNTRIES API URL (use instead of the URL shown in videos):
// https://restcountries.com/v2/name/portugal

// NEW REVERSE GEOCODING API URL (use instead of the URL shown in videos):
// https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}

///////////////////////////////////////
// XML Http Request Function
///Rendering country and it's neightbouring country
const renderCountry = function (data, className = '') {
  const html = ` <article class="country ${className}">
        <img class="country__img" src="${data.flag}" />
          <div class="country__data">
            <h3 class="country__name">${data.name}</h3>
            <h4 class="country__region">${data.region}</h4>
            <p class="country__row"><span>👫</span>${(
              data.population / 1000000
            ).toFixed(1)}</p>
            <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
            <p class="country__row"><span>💰</span>${
              data.currencies[0].name
            }</p>
          </div>
        </article>`;
  countriesContainer.insertAdjacentHTML('beforeend', html);
  countriesContainer.style.opacity = 1;
};
// const fetchNeighbour = function (data) {
//   const borders = data.borders;
//   console.log(borders);
//   borders.forEach(country => {
//     const request = new XMLHttpRequest();
//     request.open(
//       'GET',
//       `https://restcountries.com/v2/alpha/${country}?fullText=true`
//     );
//     request.send();

//     request.addEventListener('load', function () {
//       const data = JSON.parse(this.responseText);
//       console.log(data);

//       renderCountry(data, 'neighbour');
//       // fetchNeighbour(data);
//     });
//   });
// };
// const getCountry = function (country) {
//   const request = new XMLHttpRequest();
//   request.open(
//     'GET',
//     `https://restcountries.com/v2/name/${country}?fullText=true`
//   );
//   request.send();

//   request.addEventListener('load', function () {
//     const [data] = JSON.parse(this.responseText);
//     console.log(data);

//     renderCountry(data);
//     fetchNeighbour(data);
//   });
// };
// getCountry('sri lanka');

// const request = new XMLHttpRequest();
// request.open('GET', `https://restcountries.com/v2/name/india?fullText=true`);
// request.send();
// request.addEventListener('load', function () {
//   const [data] = JSON.parse(this.responseText);
//   console.log(data);
// });

////////////////promises
// const req = fetch('https://restcountries.com/v2/name/india?fullText=true');
// console.log(req);

// const getCountryData = function (country) {
//   fetch(`https://restcountries.com/v2/name/${country}`)
//     .then(function (response) {
//       console.log(response);
//       return response.json();
//     })
//     .then(function (data) {
//       console.log(data);
//     });
// };
const renderError = function (msg) {
  countriesContainer.insertAdjacentText('beforeend', msg);
  countriesContainer.style.opacity = 1;
};
const getCountryData = function (country) {
  fetch(`https://restcountries.com/v2/name/${country}`)
    .then(response => response.json())
    .then(data => {
      renderCountry(data[0]);
      const neighbour = data[0].borders[0];
      if (!neighbour) return;
      return fetch(
        `https://restcountries.com/v2/alpha/${neighbour}?fullText=true`
      );
    })
    .then(response => response.json())
    .then(data => renderCountry(data, 'neighbour'))
    .catch(err => {
      console.error(`${err}`);
      console.log('error');
      renderError(`Smtg went wrong here ${err.message}`);
    });
};

btn.addEventListener('click', function () {
  getCountryData('germany');
});
