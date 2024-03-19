import React, { createContext, useState } from 'react';

const StateContext = createContext({
    user: {},
    setUser: () =>{

    },
    logOut: () =>{

    }
})

function userContext({children}) {
    const [user, setUser] = useState()
    return (
        <>
            <StateContext.Provider value={{
                user,
                setUser,
                logOut,
            }}></StateContext.Provider>   
        </>
    );
}

export default userContext;