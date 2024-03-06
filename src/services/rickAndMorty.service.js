import {apiService} from "./api.service";
import {urls} from "../configs";

const rickAndMortyService = {
    getAll: (page) => apiService.get(urls.episodes, {params: {page}}),
    getCharacters: (ids) => apiService.get(`${urls.characters}/${ids}`)
}

export {rickAndMortyService};