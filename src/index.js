import { fetchBreeds, fetchCatByBreed } from '/src/cat-api';
import Notiflix from 'notiflix';

//  import SlimSelect from 'slim-select'
// const slim = new SlimSelect({
//     select: "#single",
//     settings: {
//         showSearch: false,
//     }

// })
// console.log(slim);

const breedSelect = document.querySelector('.breed-select');
const catInfo = document.querySelector('.cat-info');
const select = document.querySelector('select');
const loader = document.querySelector('.loader');
const error = document.querySelector('.error');

select.classList.remove('breed-select');
select.addEventListener('change', onSelectChange);

function onSelectChange(e) {
  const id = e.currentTarget.value;
  loader.classList.remove('loadEl');
  select.classList.add('breed-select');
  fetchCatByBreed(id)
    .then(resp => {
      catInfo.innerHTML = createMarkupInfo(resp);
    })
    .catch(err => promisError(err));
}

fetchBreeds()
  .then(data => {
    breedSelect.innerHTML = createMarkupOption(data);
  })
  .catch(err => promisError(err));

function promisError(srt) {
  Notiflix.Notify.failure(
    'Oops! Something went wrong! Try reloading the page!'
  );

  loader.classList.add('loadEl');
}

function createMarkupOption(arr) {
  return arr
    .map(({ id, name }) => `<option value="${id}">${name}</option>`)
    .join('');
}

function createMarkupInfo(arr) {
  console.log(arr);

  loader.classList.add('loadEl');
  select.classList.remove('breed-select');
  return arr
    .map(({ url }) => `<img src="${url}" alt="cat" width="400" > `)
    .join('');
}

// {weight: {…}, id: 'abys', name: 'Abyssinian', cfa_url: 'http://cfa.org/Breeds/BreedsAB/Abyssinian.aspx', vetstreet_url: 'http://www.vetstreet.com/cats/abyssinian', …}
