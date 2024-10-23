import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import axios from "axios";
import * as cheerio from "cheerio";

export const fetchLastEarthquake = createAsyncThunk("earthquake/fetchEarthquake", async () => {
    const response = await axios.get("https://api.orhanaydogdu.com.tr/deprem/kandilli/live");

    return response.data.result;
});
const lastEarthquakeSlice = createSlice({
    name: "lastEarthquake",
    initialState: {
        lastEarthquakeInfo: [],
        loading: false,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchLastEarthquake.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchLastEarthquake.fulfilled, (state, action) => {
                state.loading = false;
                state.lastEarthquakeInfo = action.payload;
            })
            .addCase(fetchLastEarthquake.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    },
});

export default lastEarthquakeSlice.reducer;
