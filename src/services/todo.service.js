import {apiService} from "./api.service";
import {urls} from "../configs";

const todoService = {
    getAll: () => apiService.get(urls.todos)
};

export {todoService};