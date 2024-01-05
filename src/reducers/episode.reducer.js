
const episodeActionType = {
    SET_EPISODES: "SET_EPISODES",
    SET_PREV_PAGES: "SET_PREV_PAGES",
    SET_NEXT_PAGES: "SET_NEXT_PAGES",
    SET_EPISODE_CHARACTERS: "SET_EPISODE_CHARACTERS",
    SET_PAGE_LINK: "SET_PAGE_LINK",
    SET_EPISODE_NAME: "SET_EPISODE_NAME"
}

const episodeActions = {
    setEpisodes: (episodes) => ({type: episodeActionType.SET_EPISODES, payload: episodes}),
    setPrevPage: (pageLink) => ({type: episodeActionType.SET_PREV_PAGES, payload: pageLink}),
    setNextPage: (pageLink) => ({type: episodeActionType.SET_NEXT_PAGES, payload: pageLink}),
    setEpisodeCharacters: (characters) => ({type: episodeActionType.SET_EPISODE_CHARACTERS, payload: characters}),
    setPageLink: (pageLink) => ({type: episodeActionType.SET_PAGE_LINK, payload: pageLink}),
    setEpisodeName: (name) => ({type: episodeActionType.SET_EPISODE_NAME, payload: name})
}

const episodesInitialState = {
    prev: null,
    next: null,
    episodes: [],
    characters: [],
    pageLink: "https://rickandmortyapi.com/api/episode",
    episodeName: null
}

const episodeReducer = (state, action) => {
    switch (action.type) {
        case episodeActionType.SET_EPISODES:
            return {...state, episodes: action.payload}
        case episodeActionType.SET_PREV_PAGES:
            return {...state, prev: action.payload}
        case episodeActionType.SET_NEXT_PAGES:
            return {...state, next: action.payload}
        case episodeActionType.SET_EPISODE_CHARACTERS:
            return {...state, characters: action.payload}
        case episodeActionType.SET_PAGE_LINK:
            return {...state, pageLink: action.payload}
        case episodeActionType.SET_EPISODE_NAME:
            return {...state, episodeName: action.payload}
        default:
            return state
    }
}

export {episodeActions, episodesInitialState, episodeReducer}