import React from 'react';
import {useDispatch} from "react-redux";

import {carActions} from "../../redux";

const Car = ({car}) => {
    const {id, brand, price, year} = car;
    const dispatch = useDispatch();

    return (
        <div>
            <div>Id: {id}</div>
            <div>Brand: {brand}</div>
            <div>Price: {price}</div>
            <div>Year: {year}</div>
            <button onClick={() => dispatch(carActions.deleteCar({id}))}>delete
            </button>
            <button onClick={() => dispatch(carActions.setUpdateCar(car))}>update
            </button>
            <br/>
        </div>
    );
};

export {Car};