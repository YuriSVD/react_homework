import {joiResolver} from "@hookform/resolvers/joi";
import React, {useEffect} from 'react';
import {useForm} from "react-hook-form";
import {useDispatch, useSelector} from "react-redux";

import {carService} from "../../services";
import {carActions} from "../../store";
import {carValidator} from "../../validators";

const CarForm = () => {
    const {register, handleSubmit, reset, formState: {isValid, errors}, setValue} = useForm({mode: "all", resolver: joiResolver(carValidator)});
    const {carForUpdate} = useSelector(state => state.cars);
    const dispatch = useDispatch();

    useEffect(() => {
        if (carForUpdate) {
            setValue("brand", carForUpdate.brand, {shouldValidate: true});
            setValue("price", carForUpdate.price, {shouldValidate: true});
            setValue("year", carForUpdate.year, {shouldValidate: true});
        }
    }, [carForUpdate, setValue]);
    const save = async (car) => {
        await carService.create(car);
        reset();
        dispatch(carActions.changeTrigger());
    }

    const update = async (car) => {
        await carService.updateById(carForUpdate.id, car);
        reset();
        dispatch(carActions.changeTrigger());
    }

    return (
        <form onSubmit={handleSubmit(carForUpdate ? update : save)}>
            <input type={"text"} placeholder={"enter brand"} {...register("brand")}/>
            {errors.brand && <span>{errors.brand.message}</span>}
            <input type={"text"} placeholder={"enter price"} {...register("price")}/>
            {errors.price && <span>{errors.price.message}</span>}
            <input type={"text"} placeholder={"enter year"} {...register("year")}/>
            {errors.year && <span>{errors.year.message}</span>}
            <button disabled={!isValid}>{carForUpdate ? "Update" : "Save"}</button>
        </form>
    );
};

export {CarForm};