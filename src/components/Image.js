import React, { useState } from "react"
import PropTypes from 'prop-types';


function Image({ className, img, toggleFavorite, addToCart, cartItems }) {

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

    let cartIcon = hovered ? <i className="ri-add-circle-line cart" onClick={() => addToCart(img)}></i> : null

    //console.log('cartItems', cartItems)
    if (cartItems.some(e => e.id === img.id)) {
        cartIcon = <i className="ri-shopping-cart-fill cart"></i>
    }


    return (
        <div onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)} className={`${className} image-container`}>
            <img alt='' src={img.url} className="image-grid" />
            {heartIcon(img.isFavorite)}
            {cartIcon}
        </div>
    )


}

Image.propTypes = {
    className: PropTypes.string,
    img: PropTypes.shape({
        id: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired,
        isFavorite: PropTypes.bool
    })
}

export default Image