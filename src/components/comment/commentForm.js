import React from 'react';
import {useForm} from "react-hook-form";
import {commentService} from "../../services/json.service";

const CommentForm = ({comments}) => {
    const {register, handleSubmit, reset, formState: {isValid}} = useForm();
    const save = async (comment) => {
        const {data} = await commentService.create(comment);
        reset();
        console.log(data);
    };
    return (
        <form onSubmit={handleSubmit(save)}>
            <input type="text" placeholder={"enter postId"} {...register("postId", {
                valueAsNumber: true,
                required: true
            })}/>
            <input type="text" placeholder={"enter name"} {...register("name", {required: true})}/>
            <input type="text" placeholder={"enter email"} {...register("email", {required: true})}/>
            <input type="text" placeholder={"enter body"} {...register("body", {required: true})}/>
            <button disabled={!isValid}>Save</button>
        </form>
    );

};

export default CommentForm;