import {axiosSpaceXService} from "./axios.service";
import {urls} from "../configs/urls";

const spaceXService = {
    getAll: () => axiosSpaceXService.get(urls.launches)
}

export {spaceXService}