import axios from "axios";
const URL = "https://api.thecatapi.com/v1/breeds";
axios.defaults.headers.common["x-api-key"] = "live_tTupdLq22mJZCSiA6UBl8AZSPi3ejJnH2aRVyHs9mwWUcuXl6UPn0jWBTfqkSziN";

function fetchBreeds() {
     return fetch(URL,{headers: {
      'x-api-key': ["x-api-key"] 
     }}).then(resp => {
        if (!resp.ok) {
            throw new Error
        }
        return resp.json()
    })    
}


function fetchCatByBreed(breedId) {

    return fetch(`https://api.thecatapi.com/v1/images/search?breed_ds=${breedId}`).then(resp => {
        if (!resp.ok) {
            throw new Error
        }
        return resp.json()
    }) 
}

export {fetchBreeds, fetchCatByBreed }
