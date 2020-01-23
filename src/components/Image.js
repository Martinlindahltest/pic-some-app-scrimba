import React from "react"

function Image({ className, img }) {

    return (
        <div className={`${className} image-container`}>
            <img onMouseEnter={() => console.log('mousenter')} onMouseLeave={() => console.log('mouseleave')} alt='' src={img.url} className="image-grid" />
        </div>
    )
}

export default Image