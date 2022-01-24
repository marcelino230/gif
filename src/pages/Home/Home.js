import React, { useState } from 'react'
import './styles.css'
import { Helmet } from "react-helmet-async";
import debounce from "just-debounce-it";
import useGif from '../../hooks/useGif';
//components
import InfiniteScroll from "react-infinite-scroll-component";
import Gifs from '../../components/Gifs/Gifs'
import SearchForm from '../../components/SearchForm/SearchForm'
import Spinner from '../../components/Spinner/Spinner'

const Home = () => {

    const lastSearched = localStorage.getItem('lastSearched');
    const { loading, gifs, setPage } = useGif();
    const [hasMore, setHasMore] = useState(true);

    // after 1.5s the function is executed only one time, even though it was called multiple times.
    const handleNextPage = debounce(() => {
        setPage(prevPage => prevPage + 1)
        if (gifs.length > 40) setHasMore(false);
    }, 1500);

    if (loading) return <Spinner />

    return (
        <>
            <Helmet><title>Home | GifGif</title></Helmet>
            <div className="home">
                <h2>{lastSearched ? `Last search: ${lastSearched}` : 'Trending 🔥'}</h2>
                <SearchForm />
                {(() => {
                    if (gifs.length > 0) {
                        if (gifs.length < 15) return <Gifs gifs={gifs} />
                        return (
                            <InfiniteScroll hasMore={hasMore} next={handleNextPage} loader={<Spinner />} dataLength={gifs.length}>
                                <Gifs gifs={gifs} />
                            </InfiniteScroll>
                        )
                    }
                    return <h4>No gifs were found about your last search, please try again.</h4>
                })()}
            </div>
            <br />
        </>
    )
}

export default Home
