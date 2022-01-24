import { useState, useEffect } from 'react'
import useGlobalGifs from './useGlobalGifs'
import { fetchGif } from '../services/gifs'

const useSingleGif = (id) => {

    const { gifs } = useGlobalGifs();
    const isGifInContext = gifs.find(gif => gif.id === id);

    const [gif, setGif] = useState(isGifInContext);

    useEffect(() => {
        if (!gif) {
            async function fetch() {
                const fetchedGif = await fetchGif(id);
                setGif(fetchedGif);
            }
            fetch();
        }
    }, [gif, id])

    return { gif }
}

export default useSingleGif
