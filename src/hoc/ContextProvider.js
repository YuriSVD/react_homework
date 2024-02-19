import {createContext, useState} from "react";

const Context = createContext(null);
const ContextProvider = ({children}) => {
    const [episodeTitle, setEpisodeTitle] = useState(null)
    
    return(
        <Context.Provider value={{episodeTitle, setEpisodeTitle}}>
            {children}
        </Context.Provider>
    )
}

export {
    ContextProvider,
    Context
};