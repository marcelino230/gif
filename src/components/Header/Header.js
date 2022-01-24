import React from 'react'
import './styles.css'
import { Link } from 'wouter'
import useUser from '../../hooks/useUser'

const Header = () => {

    const { isLogged, logout } = useUser();

    const handleLogout = e => {
        e.preventDefault();
        logout();
    }

    return (
        <div className="header">
            {isLogged && <Link to="/favorites">My favorites <i className="fa fa-star"></i></Link>}
            {isLogged ? <Link to="/login" className="header-btn" onClick={handleLogout}>Logout</Link> : <Link to="/login">Login</Link>}
            {!isLogged && <Link to="/register">Register</Link>}
        </div>
    )
}

export default Header
