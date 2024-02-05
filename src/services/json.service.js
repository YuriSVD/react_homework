import {axiosJSONService} from "./axios.service";
import {urls} from "../configs/urls";

const jsonService = {
    getAll: () => axiosJSONService.get(urls.posts),
}

export {jsonService};