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

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <Context.Provider value={{ allPhotos: allPhotos }}>
            {children}
        </Context.Provider >

    )
}

export { ContextProvider, Context }