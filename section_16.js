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
            <p class="country__row"><span>🗣️</span>${data.languages.name}</p>
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

//get JSON Promise Function
const getJSON = function (url, err) {
  return fetch(url).then(response => {
    if (!response.ok) throw new Error(` ${err} ${response.status}`);
    return response.json();
  });
};

const getCountryData = function (country) {
  getJSON(
    `https://restcountries.com/v2/name/${country}?fullText=true`,
    'Country not found'
  )
    .then(data => {
      renderCountry(data[0]);
      const neighbour = data[0].borders?.[1];
      if (!neighbour) throw new Error('No Neighbour Exist!');
      return getJSON(
        `https://restcountries.com/v2/alpha/${neighbour}`,
        'Country not found'
      );
    })
    .then(data => {
      renderCountry(data, 'neighbour');
    });
};

// const getCountryData = function (country) {
//   fetch(`https://restcountries.com/v2/name/${country}`)
//     .then(response => {
//       // response.json();
//       console.log(response);
//       if (!response.ok) throw new error(`Country not found ${response.status}`);
//       return response.json();
//     })
//     .then(data => {
//       renderCountry(data[0]);
//       const neighbour = data[0].borders[0];
//       if (!neighbour) return;
//       return fetch(
//         `https://restcountries.com/v2/alpha/${neighbour}?fullText=true`
//       );
//     })
//     .then(response => response.json())
//     .then(data => renderCountry(data, 'neighbour'))
//     .catch(err => {
//       console.error(`${err}`);
//       console.log('error');
//       renderError(`Smtg went wrong here ${err.message}`);
//     });
// };

// getCountryData('adbsxz');
const whereAmI = function (lat, lng) {
  getPosition()
    .then(pos => {
      const { latitude: lat, longitude: lng } = pos.coords;
      return fetch(
        `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}`
      );
    })
    .then(res => {
      if (!res.ok) throw new Error(`Problem with the gelocation API`);
      return res.json();
    })
    .then(data => {
      console.log(data);
      console.log(`You are in ${data.city}, ${data.countryName}`);
      getCountryData(data.countryName);
    });
};
// whereAmI(52.508, 13.381);
// whereAmI(19.037, 72.873);
// whereAmI(-33.933, 18.474);

//promisify geolocation API
const getPosition = function () {
  return new Promise(function (resolve, reject) {
    // navigator.geolocation.getCurrentPosition(
    //   position => resolve(position),
    //   err => reject(err)
    // );
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};

getPosition()
  .then(pos => console.log(pos))
  .catch(err => console.error(err));

btn.addEventListener(
  'click',
  whereAmI()

  // function(){
  // getCountryData('germany');
  // getCountryData('Australia');
  // getCountryData('India');}
);
// console.log('Testing asynchronous');
// setTimeout(() => console.log('Timer'), 0);
// Promise.resolve('Resolved Promise 1').then(res => console.log(res));
// console.log('testing completed');

// //building simple promise
// const lotteryPromise = new Promise(function (resolve, reject) {
//   console.log('Lottery draw is happening');
//   setTimeout(function () {
//     if (Math.random() >= 0.5) {
//       resolve('You win the lottery');
//     } else {
//       reject(new Error('You lost your money'));
//     }
//   }, 2000);
// });
// lotteryPromise.then(res => console.log(res)).catch(err => console.error(err));

// //promisifying
// const wait = function (seconds) {
//   //function that returns a promise similar to the fetch function
//   return new Promise(function (resolve) {
//     setTimeout(resolve, seconds * 1000);
//   });
// };
// wait(7)
//   .then(() => {
//     console.log('I waited');
//     return wait(2);
//   })
//   .then(() => console.log('I waited Againn'));

// //create a fullfilled or rejected promise immediately
// Promise.resolve('You Win ').then(x => console.log(x));
// Promise.reject('You Lost ').catch(x => console.error(x));
const getOurPosition = function () {
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};
const WhereAreWe = async function () {
  try {
    const pos = await getOurPosition();
    const { latitude: lat, longitude: lng } = pos.coords;
    const contres = await fetch(
      `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}`
    );
    console.log(contres);
    const contdata = await contres.json();
    console.log(contdata);
    // fetch(`https://restcountries.com/v2/name/${country}`).then(res =>
    //   console.log(res)
    // );
    const res = await fetch(
      `https://restcountries.com/v2/name/${contdata.countryName}?fullText=true`
    );
    console.log(res);
    const data = await res.json();
    console.log(data);
    renderCountry(data[0]);
  } catch (err) {
    console.log(err);
    renderError(err.message);
    // throw err;
  }
};
// WhereAreWe('Norway');
// WhereAreWe()
//   .then(city => console.log(city))
//   .catch(err => console.error(err))
//   .finally(() => console.log('Searching done'));
(async function () {
  try {
    const find = await WhereAreWe();
    const data = await find.json();
    console.log(data);
  } catch (er) {
    console.log(er.message);
  } finally {
    console.log('Searching done');
  }
})();

//running promises in parallel
//promise.all
// promise.race
//promise.allSettled
// promise.any
Promise.any([
  Promise.resolve('Success'),
  Promise.reject('Failure'),
  Promise.resolve('Success 2'),
]).then(res => console.log(res));
