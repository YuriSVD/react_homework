import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {rickAndMortyService} from "../../services";

const initialState = {
    episodes: [],
    totalPages: 0,
    characters: [],
    selectedEpisode: null
}

const getAll = createAsyncThunk(
    "episodeSlice/getAll",
    async (page, thunkAPI) => {
        try {
            const {data} = await rickAndMortyService.getAll(page);
            return data;
        } catch (e) {
            return thunkAPI.rejectWithValue(e.response.data);
        }
    }
)

const getCharacters = createAsyncThunk(
    "episodeSlice/getCharacter",
    async (ids, thunkAPI) => {
        try {
            const {data} = await rickAndMortyService.getCharacters(ids);
            return data;
        } catch (e) {
            return thunkAPI.rejectWithValue(e.response.data);
        }
    }
)

const episodeSlice = createSlice({
    name: "episodeSlice",
    initialState,
    reducers: {
        setEpisode: (state, actions) => {
            state.selectedEpisode = actions.payload;
        }
    },
    extraReducers: builder =>
        builder
            .addCase(getAll.fulfilled, (state, action) => {
                state.episodes = action.payload.results;
                state.totalPages = action.payload.info.pages;
                state.selectedEpisode = null;
            })
            .addCase(getCharacters.fulfilled, (state, action) => {
                state.characters = action.payload;
            })
});

const {reducer: episodeReducer, actions} = episodeSlice;

const episodeActions = {...actions, getAll, getCharacters}

export {episodeReducer, episodeActions}