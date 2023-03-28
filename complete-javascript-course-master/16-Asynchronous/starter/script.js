'use strict';

// https://restcountries.com/v2/

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

const renderCountry = function (data, className) {
  const html = `
    <article class="country ${className}">
      <img class="country__img" src="${data.flag}" />
      <div class="country__data">
          <h3 class="country__name">${data.name}</h3>
          <h4 class="country__region">${data.region}</h4>
          <p class="country__row"><span>👫</span>${(
            +data.population / 1000000
          ).toFixed(1)} people</p>
          <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
          <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
      </div>
   </article>`;

  countriesContainer.insertAdjacentHTML('beforeend', html);
  countriesContainer.style.opacity = 1;
};

const renderError = function (msg) {
  countriesContainer.insertAdjacentHTML('beforeend', msg);
  countriesContainer.style.opacity = 1;
};

///////////////////////////////////////

// const getCountryData = function (country) {
//   const request = new XMLHttpRequest();
//   request.open('GET', `https://restcountries.com/v2/name/${country}`);
//   request.send();

//   request.addEventListener('load', function () {
//     const [data] = JSON.parse(this.responseText);
//     console.log(data);

//     const html = `
//   <article class="country">
//     <img class="country__img" src="${data.flag}" />
//     <div class="country__data">
//         <h3 class="country__name">${data.name}</h3>
//         <h4 class="country__region">${data.region}</h4>
//         <p class="country__row"><span>👫</span>${(
//           +data.population / 1000000
//         ).toFixed(1)} people</p>
//         <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
//         <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
//     </div>
//  </article>`;

//     countriesContainer.insertAdjacentHTML('beforeend', html);
//     countriesContainer.style.opacity = 1;
//   });
// };

// getCountryData('portugal');
// getCountryData('usa');
// getCountryData('germany');

// const getCountryAndNeighbor = function (country) {
//   // AJAX call country 1
//   const request = new XMLHttpRequest();
//   request.open('GET', `https://restcountries.com/v2/name/${country}`);
//   request.send();

//   request.addEventListener('load', function () {
//     const [data] = JSON.parse(this.responseText);
//     console.log(data);

//     // Render country 1
//     renderCountry(data);

//     // Get neighbor country
//     const [neighbor] = data.borders;
//     console.log(neighbor);

//     if (!neighbor) return;

//     // AJAX call country 2
//     const request2 = new XMLHttpRequest();
//     request2.open('GET', `https://restcountries.com/v2/alpha/${neighbor}`);
//     request2.send();

//     request2.addEventListener('load', function () {
//       const data2 = JSON.parse(this.responseText);
//       console.log(data2);

//       // Render country 2
//       renderCountry(data2, 'neighbour');
//     });
//   });
// };

// // getCountryAndNeighbor('portugal');
// getCountryAndNeighbor('usa');

// setTimeout(() => {
//     console.log('1 second pass');
// })

// const request = new XMLHttpRequest();
//   request.open('GET', `https://restcountries.com/v2/name/${country}`);
//   request.send();

// const request = fetch('https://restcountries.com/v2/name/portugal');
// console.log(request);

const getJSON = function (url, errorMsg = 'Something went wrong') {
  return fetch(url).then(response => {
    // console.log(response);

    if (!response.ok) {
      throw new Error(`${errorMsg} (${response.status})`);
    }

    return response.json();
  });
};

// const getCountryData = function (country) {
//   fetch(`https://restcountries.com/v2/name/${country}`)
//     .then(response => {
//       console.log(response);

//       if (!response.ok) {
//         throw new Error(`Country not found(${response.status})`);
//       }

//       return response.json();
//     })
//     .then(data => {
//       renderCountry(data[0]);
//       const neighbor = data[0].borders[0];

//       if (!neighbor) return;

//       // Country 2
//       return fetch(`https://restcountries.com/v2/alpha/${neighbor}`);
//     })
//     .then(response => response.json())
//     .then(data => renderCountry(data, 'neighbour'))
//     .catch(err => {
//       console.error(`${err} 💥💥💥`);
//       renderError(`Something went wrong 💥💥 ${err.message}. Try again!`);
//     })
//     .finally(() => {
//       countriesContainer.style.opacity = 1;
//     });
// };

// btn.addEventListener('click', function () {
//   getCountryData('portugal');
// });

// const getCountryData = function (country) {
//   getJSON(`https://restcountries.com/v2/name/${country}`, 'Country not found')
//     .then(data => {
//       renderCountry(data[0]);
//       const neighbor = data[0].borders[0];

//       if (!neighbor) return;

//       // Country 2
//       return getJSON(
//         `https://restcountries.com/v2/alpha/${neighbor}`,
//         'Country not found'
//       );
//     })
//     .then(data => renderCountry(data, 'neighbour'))
//     .catch(err => {
//       console.error(`${err} 💥💥💥`);
//       renderError(`Something went wrong 💥💥 ${err.message}. Try again!`);
//     })
//     .finally(() => {
//       countriesContainer.style.opacity = 1;
//     });
// };

// btn.addEventListener('click', function () {
//   getCountryData('portugal');
// });

// getCountryData('asdasdasd');

// Coding Challenge 1

// const whereAmI = function (lat, lng) {
//   fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`)
//     .then(res => {
//       if (!res.ok) {
//         throw new Error(`Problem with geocoding ${res.status}`);
//       }
//       return res.json();
//     })
//     .then(data => {
//       console.log(`Your are is ${data.city}, ${data.country}`);

//       return fetch(`https://restcountries.com/v2/name/${data.country}`);
//     })
//     .then(response => {
//       console.log(response);
//       if (!response.ok) {
//         throw new Error(`Country not found(${response.status})`);
//       }

//       return response.json();
//     })
//     .then(data => renderCountry(data[0]))
//     .catch(err => console.error(`${err.message} 💥`))
//     .finally(() => {
//       countriesContainer.style.opacity = 1;
//     });
// };

// btn.addEventListener('click', function () {
//   whereAmI(52.508, 13.381);
//   whereAmI(19.037, 72.873);
//   whereAmI(-33.933, 18.474);
// });

// console.log('Test start');
// setTimeout(() => console.log('0 sec timer'), 0);
// Promise.resolve('resolved promise 1').then(res => console.log(res));
// console.log('test end');

// const lotteryPromise = new Promise(function (resolve, reject) {
//   console.log('Lotter draw is happening');
//   setTimeout(function () {
//     if (Math.random() >= 0.5) {
//       resolve('You WIN 💰');
//     } else {
//       reject(new Error('You lost your money'));
//     }
//   }, 2000);
// });

// lotteryPromise.then(res => console.log(res)).catch(err => console.log(err));

// // Promisifying setTimeout
// const wait = function (seconds) {
//   return new Promise(function (resolve) {
//     setTimeout(resolve, seconds * 1000);
//   });
// };

// wait(2)
//   .then(() => {
//     console.log('I waited for 1 seconds');
//     return wait(1);
//   })
//   .then(() => {
//     console.log('I waited for 2 seconds');
//     return wait(1);
//   })
//   .then(() => {
//     console.log('I waited for 3 seconds');
//     return wait(1);
//   })
//   .then(() => {
//     console.log('I waited for 4 seconds');
//     return wait(1);
//   })
//   .then(() => {
//     console.log('I waited for 5 seconds');
//     return wait(1);
//   })
//   .then(() => console.log('I waited for 6 seconds'));

// Promise.resolve('abc').then(x => console.log(x));
// Promise.reject(new Error('Problem!')).catch(x => console.log(x));

// const getPosition = function () {
//   return new Promise(function (resolve, reject) {
//     navigator.geolocation.getCurrentPosition(resolve, reject);
//   });
// };

// const whereAmI = function () {
//   getPosition()
//     .then(pos => {
//       const { latitude: lat, longitude: lng } = pos.coords;
//       return fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`);
//     })
//     .then(res => {
//       if (!res.ok) {
//         throw new Error(`Problem with geocoding ${res.status}`);
//       }
//       return res.json();
//     })
//     .then(data => {
//       console.log(`Your are is ${data.city}, ${data.country}`);

//       return fetch(`https://restcountries.com/v2/name/${data.country}`);
//     })
//     .then(response => {
//       console.log(response);
//       if (!response.ok) {
//         throw new Error(`Country not found(${response.status})`);
//       }

//       return response.json();
//     })
//     .then(data => renderCountry(data[0]))
//     .catch(err => console.error(`${err.message} 💥`))
//     .finally(() => {
//       countriesContainer.style.opacity = 1;
//     });
// };

// btn.addEventListener('click', function () {
//   whereAmI();
// });

// Coding Challenge 2

// const wait = function (seconds) {
//   return new Promise(function (resolve) {
//     setTimeout(resolve, seconds * 1000);
//   });
// };

// const imgContainer = document.querySelector('.images');

// const createImage = function (imgPath) {
//   return new Promise(function (resolve, reject) {
//     const img = document.createElement('img');
//     img.src = imgPath;

//     img.addEventListener('load', function () {
//       imgContainer.append(img);
//       resolve(img);
//     });

//     img.addEventListener('error', function () {
//       reject(new Error('img not found'));
//     });
//   });
// };

// let currentImg;
// createImage('img/img-1.jpg')
//   .then(img => {
//     currentImg = img;
//     return wait(2);
//   })
//   .then(() => {
//     currentImg.style.display = 'none';
//     return createImage('img/img-2.jpg');
//   })
//   .then(img => {
//     currentImg = img;
//     return wait(2);
//   })
//   .then(() => {
//     currentImg.style.display = 'none';
//   })
//   .catch(err => console.log(err));

// const getPosition = function () {
//   return new Promise(function (resolve, reject) {
//     navigator.geolocation.getCurrentPosition(resolve, reject);
//   });
// };

// const whereAmI = async function () {
//   try {
//     // Geolocation
//     const pos = await getPosition();
//     const { latitude: lat, longitude: lng } = pos.coords;

//     // Reverse geocoding
//     const resGeo = await fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`);
//     const dataGeo = await resGeo.json();
//     if (!resGeo.ok) throw new Error('Problem getting location data');
//     // console.log(dataGeo);

//     // Country data
//     const res = await fetch(
//       `https://restcountries.com/v2/name/${dataGeo.country}`
//     );
//     if (!res.ok) throw new Error('Problem getting country');
//     // console.log(res);
//     const [data] = await res.json();
//     // console.log(data);
//     renderCountry(data);

//     return `You are in ${dataGeo.city}, ${dataGeo.country}`;
//   } catch (error) {
//     alert(`${error} 💥`);
//     renderError(`💥 ${error.message}`);

//     // Reject promise returned from async function
//     throw error;
//   }
// };

// console.log('1: will get location');
// // const city = whereAmI();
// // console.log(city);

// // whereAmI()
// //   .then(city => console.log(`2: ${city}`))
// //   .catch(err => console.error(`2: 💥 ${err.message}`))
// //   .finally(() => console.log('3: Finished getting location'));

// (async function () {
//   try {
//     const city = await whereAmI();
//     console.log(`2: ${city}`);
//   } catch (error) {
//     console.error(`2: 💥 ${err.message}`);
//   }
//   console.log('3: Finished getting location');
// })();

// const get3Countries = async function (c1, c2, c3) {
//   try {
//     // const [data1] = await getJSON(`https://restcountries.com/v2/name/${c1}`);
//     // const [data2] = await getJSON(`https://restcountries.com/v2/name/${c2}`);
//     // const [data3] = await getJSON(`https://restcountries.com/v2/name/${c3}`);
//     // console.log([data1.capital, data2.capital, data3.capital]);

//     const data = await Promise.all([
//       getJSON(`https://restcountries.com/v2/name/${c1}`),
//       getJSON(`https://restcountries.com/v2/name/${c2}`),
//       getJSON(`https://restcountries.com/v2/name/${c3}`),
//     ]);

//     console.log(data.map(obj => obj[0].capital));
//   } catch (error) {
//     console.log(error);
//   }
// };

// get3Countries('portugal', 'spain', 'usa');

// Promise.race
// (async function () {
//   try {
//     const res = await Promise.race([
//       getJSON('https://restcountries.com/v2/name/italy'),
//       getJSON('https://restcountries.com/v2/name/usa'),
//       getJSON('https://restcountries.com/v2/name/mexico'),
//     ]);
//     console.log(res[0]);
//   } catch (error) {
//     console.log(error);
//   }
// })();

// const timeout = function (sec) {
//   return new Promise(function (_, reject) {
//     setTimeout(function () {
//       reject(new Error('Request took too long'));
//     }, sec * 1000);
//   });
// };

// (async function () {
//   try {
//     const res = await Promise.race([
//       getJSON('https://restcountries.com/v2/name/mexico'),
//       timeout(0.6),
//     ]);
//     console.log(res[0]);
//   } catch (error) {
//     console.log(error);
//   }
// })();

// // Promise.allSettled

// Promise.allSettled([
//   Promise.resolve('success'),
//   Promise.reject('error'),
//   Promise.resolve('another success'),
// ])
//   .then(res => console.log(res))
//   .catch(err => console.error(err));

// Promise.all([
//   Promise.resolve('success'),
//   Promise.reject('error'),
//   Promise.resolve('another success'),
// ])
//   .then(res => console.log(res))
//   .catch(err => console.error(err));

// Promise.any([
//   Promise.resolve('success'),
//   Promise.reject('error'),
//   Promise.resolve('another success'),
// ])
//   .then(res => console.log(res))
//   .catch(err => console.error(err));

// Coding Challenge

const wait = function (seconds) {
  return new Promise(function (resolve) {
    setTimeout(resolve, seconds * 1000);
  });
};

const imgContainer = document.querySelector('.images');

const createImage = function (imgPath) {
  return new Promise(function (resolve, reject) {
    const img = document.createElement('img');
    img.src = imgPath;

    img.addEventListener('load', function () {
      imgContainer.append(img);
      resolve(img);
    });

    img.addEventListener('error', function () {
      reject(new Error('img not found'));
    });
  });
};

// let currentImg;
// createImage('img/img-1.jpg')
//   .then(img => {
//     currentImg = img;
//     return wait(2);
//   })
//   .then(() => {
//     currentImg.style.display = 'none';
//     return createImage('img/img-2.jpg');
//   })
//   .then(img => {
//     currentImg = img;
//     return wait(2);
//   })
//   .then(() => {
//     currentImg.style.display = 'none';
//   })
//   .catch(err => console.log(err));

// const getPosition = function () {
//   return new Promise(function (resolve, reject) {
//     navigator.geolocation.getCurrentPosition(resolve, reject);
//   });
// };

const loadNPause = async function () {
  try {
    // Load image 1
    let img = await createImage('img/img-1.jpg');
    await wait(2);
    img.style.display = 'none';

    // Load image 2
    img = await createImage('img/img-2.jpg');
    await wait(2);
    img.style.display = 'none';
  } catch (error) {
    console.log(error);
  }
};
loadNPause();

const loadAll = async function (imgArr) {
  try {
    const imgs = imgArr.map(async img => await createImage(img));
    let imgsEl = await Promise.all(imgs);
    imgsEl.forEach(img => img.classList.add('parallel'));
  } catch (error) {
    console.log(error);
  }
};

loadAll(['img/img-1.jpg', 'img/img-2.jpg', 'img/img-3.jpg']);
