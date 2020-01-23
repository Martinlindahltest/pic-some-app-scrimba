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
        console.log('togglefavorit', result[0])
        console.log(allPhotos)
        setAllPhotos([
            ...allPhotos,
            result[0].isFavorite = !result[0].isFavorite
        ])


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