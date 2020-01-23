import React, { useState } from "react"

function Image({ className, img, toggleFavorite }) {

    const [hovered, setHovered] = useState(false)

    //console.log(img.id, hovered)

    const heartIcon = hovered ? <i onClick={() => toggleFavorite(img.id)} className="ri-heart-line favorite"></i> : null
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