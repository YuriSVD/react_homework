import React, {useEffect} from 'react';
import {useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";
import {useDispatch, useSelector} from "react-redux";
import {carActions} from "../../redux";

import {carValidator} from "../../validators";

const CarForm = () => {
    const {register, handleSubmit, reset, formState: {isValid}, setValue} = useForm({
        mode: "all",
        resolver: joiResolver(carValidator)
    });
    const dispatch = useDispatch();
    const {carForUpdate} = useSelector(state => state.cars);

    useEffect(() => {
        if (carForUpdate) {
            setValue("brand", carForUpdate.brand, {shouldValidate: true})
            setValue("price", carForUpdate.price, {shouldValidate: true})
            setValue("year", carForUpdate.year, {shouldValidate: true})
        }
    }, [carForUpdate, setValue]);
    const save = (car) => {
        dispatch(carActions.createCar({car}));
        reset();
    }
    const update = (car) => {
        dispatch(carActions.updateCar({id:carForUpdate.id, car}))
        reset();
    }
    return (
        <form onSubmit={handleSubmit(carForUpdate ? update : save)}>
            <input type={"text"} placeholder={"enter brand"} {...register("brand")}/>
            <input type={"text"} placeholder={"enter price"} {...register("price")}/>
            <input type={"text"} placeholder={"enter year"} {...register("year")}/>
            <button disabled={!isValid}>{carForUpdate ? "Update" : "Save"}</button>
        </form>
    );
};

export {CarForm};