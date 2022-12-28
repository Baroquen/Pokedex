import { handleResponse, handleError } from "../../app/apiUtils";
const baseUrl = "https://pokeapi.co/api/v2/pokemon/";

export function fetchPokedex() {
  return fetch(baseUrl)
    .then(handleResponse)
    .catch(handleError);
}