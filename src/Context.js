import React, { useState, useEffect } from 'react'

const Context = React.createContext()

function ContextProvider({ children }) {
    const [allPhotos, setAllPhotos] = useState([]);
    const [cartItems, setCartItems] = useState([])

    async function fetchData() {
        const res = await fetch("https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json");
        res
            .json()
            .then(res => setAllPhotos(res))
    }

    const toggleFavorite = (id) => {
        const uppdatedArray = allPhotos.map(photoObject => {
            //    if(photoObject.is)
            if (photoObject.id === id) {
                photoObject.isFavorite = !photoObject.isFavorite
            }
            return photoObject
        })
        setAllPhotos(uppdatedArray)
    }

    const addToCart = (newProduct) => {
        setCartItems(prevCartItems => [...prevCartItems, newProduct])
    }

    useEffect(() => {
        fetchData();
    }, []);

    useEffect(() => {
        console.log('cartItems', cartItems)
    }, [cartItems]);



    return (
        <Context.Provider value={{ allPhotos, toggleFavorite, addToCart, cartItems }}>
            {children}
        </Context.Provider >
    )
}

export { ContextProvider, Context }