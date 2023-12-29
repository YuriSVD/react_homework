import {axiosService} from "./axios.service";
import {urls} from "../configs/urls";

const postService = {
    getPostById: (id) => axiosService.get(`${urls.posts}/${id}`)
}

export {postService}