import React, { useState } from "react"

function Image({ className, img }) {

    const [hovered, setHovered] = useState(false)

    console.log(img.id, hovered)

    const heartIcon = hovered ? <i className="ri-heart-line favorite"></i> : null
    const cartIcon = hovered ? <i className="ri-add-circle-line cart"></i> : null

    return (
        <div className={`${className} image-container`}>
            <img onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)} alt='' src={img.url} className="image-grid" />
            {heartIcon}
            {cartIcon}
        </div>
    )
}

export default Image