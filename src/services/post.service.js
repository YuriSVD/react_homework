import {axiosService} from "./axios.service";
import {urls} from "../configs/urls";

const postService = {
    getAll: () => axiosService.get(urls.posts),
    getPostById: (id) => axiosService.get(`${urls.posts}/${id}`),
    getCommentsToPost: (id) => axiosService.get(`${urls.posts}/${id}/${urls.comments}`)
}

export {postService};