import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import axios from "axios";

export const fetchLastEarthquake = createAsyncThunk("earthquake/fetchRecentEarthquake", async () => {
    const response = await axios.get("https://api.orhanaydogdu.com.tr/deprem/kandilli/live");

    return response.data.result;
});
const recentEarthquakes = createSlice({
    name: "recentEarthquakes",
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

export default recentEarthquakes.reducer;
