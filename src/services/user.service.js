import {apiService} from "./api.service";
import {urls} from "../configs";

const userService = {
    getAll: () => apiService.get(urls.users),
    getUserById: (id) => apiService.get(`${urls.users}/${id}`),
    getUserPosts: (id) => apiService.get(`${urls.users}/${id}/${urls.posts}`)
}
export {userService};