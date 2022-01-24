import React from 'react'
import './styles.css'
import { Link } from 'wouter'
import Fav from '../Fav/Fav'

const Gif = ({ title, url, id }) => {

    const handleClick = () => {
        navigator.clipboard.writeText(url);
        const gif = document.getElementById(id);
        gif.innerHTML = 'Copied!';
        setTimeout(() => {
            if (gif) gif.innerHTML = 'Copy url';
        }, 2000);
    }

    return (
        <div className="Gif">
            <Fav id={id} />
            <div className="tooltip">
                <button className="share-btn" onClick={handleClick}>🔗</button>
                <small id={id} className="tooltiptext">Copy url</small>
            </div>
            <Link key={id} to={`/gif/${id}`} className="Gif-link">
                <h4>{title}</h4>
                <img alt={title} src={url} />
            </Link>
        </div>
    )
}

export default React.memo(Gif)
