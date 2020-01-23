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
        const uppdatedArray = allPhotos.map(photoObject => {
            //    if(photoObject.is)
            if (photoObject.id === id) {
                photoObject.isFavorite = !photoObject.isFavorite
            }
            return photoObject
        })
        setAllPhotos(uppdatedArray)
    }

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <Context.Provider value={{ allPhotos: allPhotos, toggleFavorite: toggleFavorite }}>
            {children}
        </Context.Provider >
    )
}

export { ContextProvider, Context }