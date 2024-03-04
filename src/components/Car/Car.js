import React from 'react';
import {useDispatch} from "react-redux";

import {carService} from "../../services";
import {carActions} from "../../store";

const Car = ({car}) => {
    const {id, brand, year, price} = car;
    const dispatch = useDispatch();

    const deleteCar = async () => {
        await carService.deleteById(id);
        dispatch(carActions.changeTrigger());
    }

    return (
        <div>
            <div>Id: {id}</div>
            <div>Brand: {brand}</div>
            <div>Price: {price}</div>
            <div>Year: {year}</div>
            <button onClick={() => dispatch(carActions.setCarForUpdate(car))}>Update</button>
            <button onClick={deleteCar}>Delete</button>
            <br/>
        </div>
    );
};

export {Car};