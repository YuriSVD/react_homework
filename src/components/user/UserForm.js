import React from 'react';
import {useForm} from "react-hook-form";
import {userService} from "../../services/json.service";

const UserForm = () => {
    const {register, handleSubmit, reset, formState:{errors, isValid}} = useForm({mode:"all"});
    const save = async (user) => {
        const {data} = await  userService.create(user);
        reset();
        console.log(data);
    };
    return (
        <form onSubmit={handleSubmit(save)}>
            <input type="text" placeholder={"enter name"} {...register("name")}/>
            <input type="text" placeholder={"enter username"} {...register("username")}/>
            <input type="text" placeholder={"enter email"} {...register("email")}/>
            <input type="text" placeholder={"enter address street"} {...register("address.street")}/>
            <input type="text" placeholder={"enter address suite"} {...register("address.suite")}/>
            <input type="text" placeholder={"enter address city"} {...register("address.city")}/>
            <input type="text" placeholder={"enter address zipcode"} {...register("address.zipcode")}/>
            <input type="text" placeholder={"enter address geo lat"} {...register("address.geo.lat")}/>
            <input type="text" placeholder={"enter address geo lng"} {...register("address.geo.lng")}/>
            <input type="text" placeholder={"enter phone"} {...register("phone")}/>
            <input type="text" placeholder={"enter website"} {...register("website")}/>
            <input type="text" placeholder={"enter company name"} {...register("company.name")}/>
            <input type="text" placeholder={"enter company catchPhrase"} {...register("company.catchPhrase")}/>
            <input type="text" placeholder={"enter company bs"} {...register("company.bs")}/>
            <button disabled={!isValid}>Save</button>
        </form>
    );
};

export default UserForm;