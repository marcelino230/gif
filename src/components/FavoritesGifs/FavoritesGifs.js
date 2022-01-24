import React from 'react'
import useFavoritesGifs from '../../hooks/useFavoritesGifs'
import Gifs from '../Gifs/Gifs'
import Spinner from '../Spinner/Spinner'

const FavoritesGifs = () => {
    const { gifs, loading, favs } = useFavoritesGifs()

    if (favs.length === 0) return <h4>Not favorites gifs found :(</h4>
    if (loading) return <Spinner />

    return <Gifs gifs={gifs} />
}

export default FavoritesGifs
