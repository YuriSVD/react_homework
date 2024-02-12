import {apiService} from "./api.service";
import {urls} from "../configs";

const postService = {
    getPostById: (id) => apiService.get(`${urls.posts}/${id}`)
}

export {postService}