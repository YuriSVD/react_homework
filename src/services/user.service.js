import {axiosService} from "./axios.service";
import {urls} from "../configs/urls";

const userService = {
    getAll: () => axiosService.get(urls.users),
    getUserById: (id) => axiosService.get(`${urls.users}/${id}`),
    getUserPosts: (id) => axiosService.get(`${urls.users}/${id}/${urls.posts}`)
}
export {userService};