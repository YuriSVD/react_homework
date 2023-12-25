import {useForm} from "react-hook-form";
import {carService} from "../../services/car.service";
import {useEffect} from "react";

const CarForm = ({setNewCar, carForUpdate}) => {
    const {
        register,
        handleSubmit,
        reset,
        formState: {isValid},
        setValue
    } = useForm({mode: "all"});

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
            <input type="text" placeholder={"enter brand"} {...register("brand", {required: true})}/>
            <input type="text" placeholder={"enter price"} {...register("price", {
                valueAsNumber: true,
                required: true
            })}/>
            <input type="text" placeholder={"enter year"} {...register("year", {valueAsNumber: true, required: true})}/>
            <button disabled={!isValid}>{carForUpdate?"Update":"Save"}</button>
        </form>
    );
};

export default CarForm;