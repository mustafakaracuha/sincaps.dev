import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import axios from "axios";
import * as cheerio from "cheerio";

export const fetchEarthquake = createAsyncThunk("earthquake/fetchEarthquake", async () => {
    const response = await axios.post("https://deprem.afad.gov.tr/EventData/GetEventsByFilter", {});
    return response.data;;
});

const earthquakeSlice = createSlice({
    name: "feed",
    initialState: {
        earthquakeInfo: [],
        loading: false,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchEarthquake.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchEarthquake.fulfilled, (state, action) => {
                state.loading = false;
                state.earthquakeInfo = action.payload;
            })
            .addCase(fetchEarthquake.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    },
});

export default earthquakeSlice.reducer;
