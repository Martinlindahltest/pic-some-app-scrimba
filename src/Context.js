import React, { useState, useEffect } from 'react'

const Context = React.createContext()

function ContextProvider({ children }) {
    const [allPhotos, setAllPhotos] = useState([]);

    async function fetchData() {
        const res = await fetch("https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json");
        res
            .json()
            .then(res => setAllPhotos(res))
    }

    const toggleFavorite = (id) => {
        const result = allPhotos.filter(thisPhoto => thisPhoto.id === id);
        console.log('togglefavorit', result)


    }

    useEffect(() => {
        fetchData();
    }, []);

    toggleFavorite('1')

    return (
        <Context.Provider value={{ allPhotos: allPhotos, toggleFavorite: toggleFavorite }}>
            {children}
        </Context.Provider >

    )
}

export { ContextProvider, Context }

//1. Add a toggleFavorite method to context. 
//It should take an `id` parameter and update the array of allPhotos by flipping the `isFavorited` property of the photo 
//with the matching `id`
