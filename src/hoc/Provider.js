import React, {createContext, useReducer} from 'react';
import {episodeReducer, episodesInitialState} from "../reducers/episode.reducer";


const StateContext = createContext(null);

const Provider = ({children}) => {
    const reducers = {
        episodes: useReducer(episodeReducer, episodesInitialState),
    }

    return (
        <StateContext.Provider value={reducers}>
            {children}
        </StateContext.Provider>
    );
};

export {Provider, StateContext};