import React from 'react'
import Form from '../../components/Register/Form'
import useUser from '../../hooks/useUser'
import { Helmet } from "react-helmet-async";
import './styles.css'

const LoginForm = () => {
    const { login, error } = useUser();
    const handleClick = () => {
        login({ username: "admin", password: "admin123" })
    }

    return (
        <>
            <Helmet><title>GifGif | Login</title></Helmet>
            <h2>Login</h2>
            <Form onSubmit={login} />
            {error && <h4 style={{ color: '#bf1650' }}>Credentials do not match.</h4>}
            <p onClick={handleClick} className="loginGuest">Login as a guest</p>
        </>
    )
}

export default LoginForm