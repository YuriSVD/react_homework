import axios from "axios";

const characterService = {
    getCharacterByLink: (link) => axios.create({baseURL: link}).get("")
}

export {characterService}