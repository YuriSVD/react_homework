import {axiosServiceJSON} from "./axios.service";
import {urls} from "../configs/urls";

const userService = {
    getAll: () => axiosServiceJSON.get(urls.users),
    create: (user) => axiosServiceJSON.post(urls.users, user),
}
const commentService = {
    getAll: () => axiosServiceJSON.get(urls.comments),
    create: (comment) => axiosServiceJSON.post(urls.comments, comment),
}

export {userService, commentService}