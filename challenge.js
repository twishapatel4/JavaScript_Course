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
      reject(new Error('Image not Created'));
    });
  });
};
const wait = function (seconds) {
  //function that returns a promise similar to the fetch function
  return new Promise(function (resolve) {
    setTimeout(resolve, seconds * 1000);
  });
};
// let CurrImg;
// createImage('img/img-1.jpg')
//   .then(img => {
//     CurrImg = img;
//     return wait(2);
//   })
//   .then(img => {
//     CurrImg.style.display = 'none';
//     return createImage('img/img-2.jpg');
//   })
//   .then(img => {
//     CurrImg = img;
//     return wait(2);
//   })
//   .then(img => {
//     CurrImg.style.display = 'none';
//     return createImage('img/img-3.jpg');
//   })
//   .then(img => {
//     CurrImg = img;
//     return wait(2);
//   })
//   .then(img => {
//     CurrImg.style.display = 'none';
//   })
//   .catch(err => console.error(err));

// (async function () {
//   const img1 = await createImage('img/img-1.jpg');
//   console.log(img1);
// });
const loadNPause = async function () {
  try {
    let img = await createImage('img/img-1.jpg');
    await wait(4);
    img.style.display = 'none';

    let imgg = await createImage('img/img-2.jpg');
    await wait(4);
    imgg.style.display = 'none';
    let imggg = await createImage('img/img-3.jpg');
    await wait(4);
    imggg.style.display = 'none';
  } catch (er) {
    console.log(err);
  }
};
// loadNPause();
const ar = ['img/img-1.jpg', 'img/img-2.jpg', 'img/img-3.jpg'];
const loadAll = async function (array) {
  try {
    const imgg = array.map(async img => {
      await createImage(img);
      const imgAll = await Promise.all(imgg);
      imgAll.forEach(img => img.classList.add('parallel'));
    });
    console.log(imgg);
  } catch (err) {
    console.log(err);
  }
};
loadAll(ar);
