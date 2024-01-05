import axios from "axios";

const episodeService = {
    getAll: (link) => axios.create({baseURL: link}).get("")
}

export {episodeService}