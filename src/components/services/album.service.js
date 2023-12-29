import {axiosService} from "./axios.service";
import {urls} from "../configs/urls";

const albumService = {
    getAll: () => axiosService.get(urls.albums)
};

export {albumService};