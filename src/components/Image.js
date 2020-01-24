import React, { useState } from "react"

function Image({ className, img, toggleFavorite }) {

    const [hovered, setHovered] = useState(false)

    //console.log('img.id', img.id, 'img.isFavorite', img.isFavorite)

    let heartIcon = (fillHeart) => {
        if (fillHeart) {
            return <i className="ri-heart-fill favorite" onClick={() => toggleFavorite(img.id)}></i>
        }
        else if (hovered) {
            return <i className="ri-heart-line favorite" onClick={() => toggleFavorite(img.id)}></i>
        }
        else {
            return null
        }
    }

    const cartIcon = hovered ? <i className="ri-add-circle-line cart"></i> : null

    return (
        <div onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)} className={`${className} image-container`}>
            <img alt='' src={img.url} className="image-grid" />
            {heartIcon(img.isFavorite)}
            {cartIcon}
        </div>
    )
}

export default Image