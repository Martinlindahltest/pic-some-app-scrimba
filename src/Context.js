import React from 'react'

const Context = React.createContext()

function ContextProvider({ children }) {
    return (
        <Context.Provider value={'lalala'}>
            {children}
        </Context.Provider >

    )
}

export { ContextProvider, Context }