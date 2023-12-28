import {useForm} from "react-hook-form";
import {carService} from "../../services/car.service";
import {useEffect} from "react";
import {joiResolver} from "@hookform/resolvers/joi";
import {carValidator} from "../../validators/car.validator";

const CarForm = ({setNewCar, carForUpdate}) => {
    const {
        register,
        handleSubmit,
        reset,
        formState: {isValid, errors},
        setValue
    } = useForm({mode: "all", resolver: joiResolver(carValidator)});

    useEffect(() => {
        if (carForUpdate) {
            setValue("brand", carForUpdate.brand, {shouldValidate: true});
            setValue("price", carForUpdate.price, {shouldValidate: true});
            setValue("year", carForUpdate.year, {shouldValidate: true});
        }
    }, [carForUpdate]);
    const save = async (car) => {
        await carService.create(car);
        reset();
        setNewCar(prev => !prev);
    }
    const update = async (car) => {
        await carService.updateById(carForUpdate.id, car);
        reset();
        setNewCar(prev => !prev);
    };
    return (
        <form onSubmit={handleSubmit(carForUpdate ? update : save)}>
            <input type="text" placeholder={"enter brand"} {...register("brand")}/>
            {errors.brand && <span>{errors.brand.message}</span>}
            <input type="text" placeholder={"enter price"} {...register("price")}/>
            {errors.price && <span>{errors.price.message}</span>}
            <input type="text" placeholder={"enter year"} {...register("year", {valueAsNumber: true, required: true})}/>
            {errors.year && <span>{errors.year.message}</span>}
            <button disabled={!isValid}>{carForUpdate?"Update":"Save"}</button>
        </form>
    );
};

export default CarForm;