import {apiService} from "./api.service";
import {urls} from "../constans";

const carService = {
    getAll: () => apiService.get(urls.cars),
    create: (car) => apiService.post(urls.cars, car),
    updateById: (id, car) => apiService.put(`${urls.cars}/${id}`, car),
    deleteById: (id) => apiService.delete(`${urls.cars}/${id}`)
}

export {carService};