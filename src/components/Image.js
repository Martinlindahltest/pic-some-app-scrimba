import React, { useState } from "react"

function Image({ className, img, toggleFavorite }) {

    const [hovered, setHovered] = useState(false)

    //console.log('img.id', img.id, 'img.isFavorite', img.isFavorite)

    let heartClassName = "ri-heart-line favorite"

    if (img.isFavorite) {
        heartClassName = "ri-heart-fill favorite"
    }

    const heartIcon = hovered ? <i onClick={() => toggleFavorite(img.id)} className={heartClassName}></i> : null
    const cartIcon = hovered ? <i className="ri-add-circle-line cart"></i> : null

    return (
        <div onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)} className={`${className} image-container`}>
            <img alt='' src={img.url} className="image-grid" />
            {heartIcon}
            {cartIcon}
        </div>
    )
}

export default Image