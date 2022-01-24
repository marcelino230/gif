import React from 'react'
import Gif from './Gif'
import './styles.css'

const Gifs = ({ gifs }) => {
    return (
        <div className="Gifs-layout">
            {gifs.map((singleGif, index) => {
                return (
                    <Gif
                        title={singleGif.title}
                        id={singleGif.id}
                        url={singleGif.url} // {...singleGif}
                        key={index}
                    />
                )
            })}
        </div>
    )
}

export default Gifs
