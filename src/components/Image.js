import React, { useState } from "react"

function Image({ className, img }) {

    const [hovered, setHovered] = useState(false)

    console.log(img.id, hovered)

    return (
        <div className={`${className} image-container`}>
            <img onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)} alt='' src={img.url} className="image-grid" />
        </div>
    )
}

export default Image