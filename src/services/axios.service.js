import axios from "axios";
import {baseURLCars, baseURLJSON} from "../configs/urls";

const axiosServiceCar = axios.create({baseURL:baseURLCars});
const axiosServiceJSON = axios.create({baseURL: baseURLJSON});

export {axiosServiceCar, axiosServiceJSON}