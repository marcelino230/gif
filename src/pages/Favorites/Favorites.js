import React from 'react'
import FavoritesGifs from '../../components/FavoritesGifs/FavoritesGifs'
import { Helmet } from "react-helmet-async";
import './styles.css'

const Favorites = () => {
    return (
        <>
            <Helmet><title>My Favorites | GifGif</title></Helmet>
            <h2>My favorites</h2>
            <div className="favorites-gifs">
                <FavoritesGifs />
            </div>
        </>
    )
}

export default Favorites
