import React from 'react';
import {carService} from "../../services/car.service";

const Car = ({car, setCarForUpdate, setNewCar}) => {
    const {id, brand, price, year} = car
    const deleteCar = async () => {
        await carService.deleteById(id);
        setNewCar(prev => !prev);
    };
    return (
        <div>
            <div>Id: {id}</div>
            <div>Brand: {brand}</div>
            <div>Price: {price}</div>
            <div>Year: {year}</div>
            <button onClick={() => setCarForUpdate(car)}>Update</button>
            <button onClick={deleteCar}>Delete
            </button>
        </div>
    );
};

export default Car;