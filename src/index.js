import {fetchBreeds, fetchCatByBreed} from "/src/cat-api"

const breedSelect = document.querySelector(".breed-select")
const catInfo = document.querySelector(".cat-info")
 const select = document.querySelector("select")


select.addEventListener("change", onSelectChange)

function onSelectChange(e) {
const id = e.currentTarget.value
fetchCatByBreed(id).then(resp => {
  catInfo.innerHTML = createMarkupInfo(resp)

}).catch(err => console.log(err))
}
  
fetchBreeds().then(data => {
    breedSelect.innerHTML = createMarkupOption(data)

}).catch(err => console.log(err))


function createMarkupOption(arr) {

    return arr.map(({ id, name}) =>
        
        `<option value="${id}">${name}</option>`,

    ).join("") 
   
}
  


function createMarkupInfo(arr) {

console.log(arr);
    return arr.map(({ url }) =>
      
    `<img src="${url}" alt="cat" width="200" > `
    ).join("")
}










// {weight: {…}, id: 'abys', name: 'Abyssinian', cfa_url: 'http://cfa.org/Breeds/BreedsAB/Abyssinian.aspx', vetstreet_url: 'http://www.vetstreet.com/cats/abyssinian', …}