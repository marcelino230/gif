import { useEffect, useState } from 'react'
import useUser from '../hooks/useUser'
import { fetchGifsByIds } from '../services/gifs'

const useFavoritesGifs = () => {

    const [gifs, setGifs] = useState([]);
    const [loading, setLoading] = useState(false);
    const { favs } = useUser();

    useEffect(() => {
        setLoading(true)
        async function fetchGifs(favs) {
            const fetchedGifs = await fetchGifsByIds({ favs });
            setGifs(fetchedGifs);
            setLoading(false);
        }
        if (favs.length > 0) fetchGifs(favs);
    }, [favs])

    return { gifs, loading, favs }
}

export default useFavoritesGifs