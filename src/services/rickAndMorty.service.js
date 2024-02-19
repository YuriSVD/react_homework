import {apiService} from "./api.service";
import {urls} from "../configs";

const rickAndMortyService = {
    getAllEpisodes: () => apiService.get(urls.episodes),
}

export {rickAndMortyService};