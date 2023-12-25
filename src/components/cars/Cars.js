import React, {useEffect, useState} from 'react';
import {carService} from "../../services/car.service";
import Car from "../car/Car";
import CarForm from "../car/CarForm";

const Cars = () => {
    const [cars, setCars] = useState([]);
    const [newCar, setNewCar] = useState(false);
    const [carForUpdate, setCarForUpdate] = useState(null);
    useEffect(() => {
        carService.getAll()
            .then(value => value.data)
            .then(value => setCars(value));
    }, [newCar]);
    return (
        <div>
            <CarForm setNewCar={setNewCar} carForUpdate={carForUpdate}/>
            {cars.map(car => <Car key={car.id} car={car} setCarForUpdate={setCarForUpdate} setNewCar={setNewCar}/>)}
        </div>
    );
};

export default Cars;