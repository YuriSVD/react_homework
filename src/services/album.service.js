import {apiService} from "./api.service";
import {urls} from "../configs";

const albumService = {
    getAll: () => apiService.get(urls.albums)
};

export {albumService};