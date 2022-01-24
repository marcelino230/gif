import React from 'react'
import './styles.css'
const Spinner = () => {
    return (
        <div className="lds-ring "><div></div><div></div><div></div><div></div></div>
    )
}

export default React.memo(Spinner);
