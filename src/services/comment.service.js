import {apiService} from "./api.service";
import {urls} from "../configs";

const commentService = {
    getAll: () => apiService.get(urls.comments)
};

export {commentService};