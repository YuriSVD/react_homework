import React from 'react';
import {useForm} from "react-hook-form";
import {commentService} from "../../services/json.service";
import {joiResolver} from "@hookform/resolvers/joi";
import {commentValidator} from "../../validators/comment.validator";

const CommentForm = ({comments}) => {
    const {register, handleSubmit, reset, formState: {errors, isValid}} = useForm({mode:"all", resolver: joiResolver(commentValidator)});
    const save = async (comment) => {
        const {data} = await commentService.create(comment);
        reset();
        console.log(data);
    };
    return (
        <form onSubmit={handleSubmit(save)}>
            <input type="text" placeholder={"enter postId"} {...register("postId")}/>
            {errors.postId && <span>{errors.postId.message}</span>}
            <input type="text" placeholder={"enter name"} {...register("name")}/>
            {errors.name && <span>{errors.name.message}</span>}
            <input type="text" placeholder={"enter email"} {...register("email")}/>
            {errors.email && <span>{errors.email.message}</span>}
            <input type="text" placeholder={"enter body"} {...register("body")}/>
            {errors.body && <span>{errors.body.message}</span>}
            <button disabled={!isValid}>Save</button>
        </form>
    );

};

export default CommentForm;