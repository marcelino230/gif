import React from 'react'
import { Link } from 'wouter'
import './styles.css'

const NotFound = () => {
    return (
        <div className="not-found">
            <h2>Ooops!</h2>
            <p>The page you're looking for was not found</p>
            <Link to="/"><i className="fa fa-arrow-left"></i> Go Back</Link>
        </div>
    )
}

export default NotFound
