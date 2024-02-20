import {apiService} from "./api.service";
import {urls} from "../configs";

const rickAndMortyService = {
    getAllEpisodes: (page) => apiService.get(urls.episodes, {params: {page}}),
}

export {rickAndMortyService};