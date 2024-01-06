import {createAsyncThunk, createSlice, isFulfilled} from "@reduxjs/toolkit";
import {carService} from "../../services";

const initialState = {
    cars: [],
    carForUpdate: null,
    trigger: false
};

const getAll = createAsyncThunk(
    "carSlice/getAll",
    async (_, thunkAPI) => {
        try {
            const {data} = await carService.getAll();
            return data;
        } catch (e) {
            return thunkAPI.rejectWithValue(e.response.data);
        }
    }
);
const createCar = createAsyncThunk(
    "carSlice/createCar",
    async ({car}, thunkAPI) => {
        try {
            await carService.createCar(car);
        } catch (e) {
            return thunkAPI.rejectWithValue(e.response.data);
        }
    }
);
const deleteCar = createAsyncThunk(
    "carSlice/deleteCar",
    async ({id}, thunkAPI) => {
        try {
            await carService.deleteCarById(id);
        } catch (e) {
            return thunkAPI.rejectWithValue(e.response.data);
        }
    }
);
const updateCar = createAsyncThunk(
    "carSlice/updateCar",
    async ({id, car}, thunkAPI) => {
        try {
            await carService.updateById(id, car);
        } catch (e) {
            return thunkAPI.rejectWithValue(e.response.data);
        }
    }
);

const slice = createSlice({
    name: "carSlice",
    initialState,
    reducers: {
        setUpdateCar: (state, actions) => {
            state.carForUpdate = actions.payload;
        }
    },
    extraReducers: builder =>
        builder
            .addCase(getAll.fulfilled, (state, actions) => {
                state.cars = actions.payload
            })
            .addCase(updateCar.fulfilled, state => {
                state.carForUpdate = null;
            })
            .addMatcher(isFulfilled(createCar, deleteCar, updateCar), state => {
                state.trigger = !state.trigger;
            })
});

const {reducer: carReducer, actions} = slice;

const carActions = {...actions, getAll, deleteCar, createCar, updateCar}

export {carReducer, carActions}