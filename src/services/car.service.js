import {axiosServiceCar} from "./axios.service";
import {urls} from "../configs/urls";

const carService = {
    getAll: () => axiosServiceCar.get(urls.cars),
    create: (car) => axiosServiceCar.post(urls.cars, car),
    updateById: (id, car) => axiosServiceCar.put(`${urls.cars}/${id}`, car),
    deleteById: (id) => axiosServiceCar.delete(`${urls.cars}/${id}`),
}
export {carService}