import React from 'react'
import Form from '../../components/Register/Form'
import useUser from '../../hooks/useUser'
import { Helmet } from "react-helmet-async";

const RegisterForm = () => {
    const { registerUser, error } = useUser();

    return (
        <>
            <Helmet><title>GifGif | Register</title></Helmet>
            <h2>Register</h2>
            <Form onSubmit={registerUser} />
            {error && <h4 style={{ color: '#bf1650' }}>Username already taken, try again.</h4>}
        </>
    )
}

export default RegisterForm
