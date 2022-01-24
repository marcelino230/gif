import React, { useEffect, useState } from 'react'
import { useForm } from "react-hook-form";
import useUser from '../../hooks/useUser';
import { useLocation } from 'wouter'
import './styles.css'


const Form = ({ onSubmit }) => {
    const { isLogged } = useUser();
    const [, pushLocation] = useLocation();
    const { register, handleSubmit, formState: { errors }, setFocus } = useForm();
    const [loading] = useState(false);


    useEffect(() => {
        if (isLogged) return pushLocation('/')
    }, [isLogged, pushLocation]);

    useEffect(() => {
        setFocus("username");
    }, [setFocus]);

    const handleOnSubmit = data => {
        const { username, password } = data;
        onSubmit({ username, password });
    }

    return (
        <div >
            <form className="register-form" onSubmit={handleSubmit(handleOnSubmit)}>
                <label>
                    <h4>Username</h4>
                    <input
                        style={{ border: errors.username ? '1px solid red' : '' }}
                        {...register("username", { required: true, maxLength: 10, minLength: 3 })}
                        placeholder="username" />
                    <p>
                        {errors.username?.type === "required" && "Username is required!"}
                        {errors.username?.type === "minLength" && "Minimum three characters!"}
                        {errors.username?.type === "maxLength" && "Maximum ten characters!"}
                    </p>
                </label>
                <label>
                    <h4>Password</h4>
                    <input
                        style={{ border: errors.password ? '1px solid red' : '' }}
                        {...register("password", { required: true, maxLength: 10, minLength: 3 })}
                        placeholder="password"
                        type="password" />
                    <p>
                        {errors.password?.type === "required" && "Password is required!"}
                        {errors.password?.type === "minLength" && "Minimum three characters!"}
                        {errors.password?.type === "maxLength" && "Maximum ten characters!"}
                    </p>
                </label>
                {loading ? <button className="btn-submit" disabled>Loading...</button> : <button className="btn-submit">Submit</button>}
            </form>
        </div>
    )
}

export default Form
