import { useState, useEffect } from 'react';
import { fetchGifs, fetchTrendingGifs } from '../services/gifs'
import useGlobalGifs from '../hooks/useGlobalGifs'

const INITIAL_PAGE = 0;

const useGif = (keyword, rating) => {
    const keywordToUse = keyword || localStorage.getItem('lastSearched') || null;
    const { gifs, setGifs } = useGlobalGifs();
    const [loading, setLoading] = useState(false);
    const [page, setPage] = useState(INITIAL_PAGE);

    useEffect(() => {
        setLoading(true);
        async function fetch() {
            if (keywordToUse === null) {
                const fetchedGifs = await fetchTrendingGifs();
                setGifs(fetchedGifs);
            }
            else {
                const fetchedGifs = await fetchGifs({ keyword: keywordToUse, rating });
                setGifs(fetchedGifs);
                localStorage.setItem('lastSearched', decodeURI(keywordToUse));
            }
            setLoading(false);
        }
        fetch();
    }, [keyword, rating, setGifs, keywordToUse]);

    useEffect(() => {
        if (page === INITIAL_PAGE) return;
        async function fetch() {
            if (keywordToUse === null || keywordToUse === undefined) {
                const fetchedGifs = await fetchTrendingGifs(page);
                setGifs(prevGifs => prevGifs.concat(fetchedGifs));
            }
            else {
                const fetchedGifs = await fetchGifs({ keyword: keywordToUse, page });
                setGifs(prevGifs => prevGifs.concat(fetchedGifs));
            }
        }
        fetch();
    }, [page, keywordToUse, setGifs])


    return { loading, gifs, setPage };
}

export default useGif
