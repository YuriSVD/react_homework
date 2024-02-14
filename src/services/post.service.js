import {apiService} from "./api.service";
import {urls} from "../configs";

const postService = {
    getAll: () => apiService.get(urls.posts),
    getPostById: (id) => apiService.get(`${urls.posts}/${id}`),
    getCommentsToPost: (id) => apiService.get(`${urls.posts}/${id}/${urls.comments}`)
}

export {postService};