import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchLeagueResult = createAsyncThunk("live/leagueList", async (selectedLeague) => {
    const response = await axios.get(`https://www.mynet.com/spor/ajax/standings?leagueId=${selectedLeague}`);
    return response.data.data;
});

export const fetchLeagueFixtures = createAsyncThunk("live/leagueFixtures", async ({ selectedLeague, selectedWeek }) => {
    const response = await axios.get(`https://www.mynet.com/spor/ajax/fixture-bar?leagueId=${selectedLeague}&week=${selectedWeek}`);
    return response.data;
});

export const fetchTopScorers = createAsyncThunk("live/topScorers", async () => {
    const response = await axios.get(`https://www.mynet.com/spor/ajax/top-scorers`);
    return response.data;
});

const liveSlice = createSlice({
    name: "live",
    initialState: {
        leagueListResult: [],
        leagueFixturesResult: [],
        topScorersResult: [],
        loading: false,
        error: null,
    },
    reducers: {},

    extraReducers: (builder) => {
        builder
            .addCase(fetchLeagueResult.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchLeagueResult.fulfilled, (state, action) => {
                state.loading = false;
                state.leagueListResult = action.payload;
            })
            .addCase(fetchLeagueResult.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })
            .addCase(fetchLeagueFixtures.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchLeagueFixtures.fulfilled, (state, action) => {
                state.loading = false;
                state.leagueFixturesResult = action.payload;
            })
            .addCase(fetchLeagueFixtures.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })
            .addCase(fetchTopScorers.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchTopScorers.fulfilled, (state, action) => {
                state.loading = false;
                state.topScorersResult = action.payload;
            })
            .addCase(fetchTopScorers.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    },
});

export default liveSlice.reducer;
