import React from 'react'
import useUser from '../../hooks/useUser'
import { useLocation } from 'wouter'
import './styles.css'

const Fav = ({ id }) => {

    const [, pushLocation] = useLocation();
    const { addFavorite, deleteFavorite, favs, isLogged } = useUser();
    const isItFaved = favs.some(favId => favId === id);

    const icon = isItFaved ? '❌' : '❤️';

    const handleClick = () => {
        if (!isLogged) return pushLocation('/login');
        isItFaved ? deleteFavorite(id) : addFavorite(id);
    }

    return (
        <button className="fav-btn" onClick={handleClick}>
            <span>{icon}</span>
        </button>
    )
}

export default Fav
