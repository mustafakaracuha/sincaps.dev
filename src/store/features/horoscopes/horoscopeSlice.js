import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import axios from "axios";
import * as cheerio from "cheerio";


export const fetchHoroscope = createAsyncThunk("horoscopes/selecHoroscope", async (selectedHoroscope) => {
    const response = await axios.get(`https://www.mynet.com/kadin/burclar-astroloji/${selectedHoroscope.toLowerCase()}-burcu-gunluk-yorumu.html`);

    const html = response.data;

    const $ = cheerio.load(html);

    const horoscope = [];

    $(".detail-content-inner").each((index, element) => {
        const title = $(element).text().trim();
        const link = $(element).find("a").attr("href");
        const imageUrl = $(element).closest(".card").find(".card-media a img").attr("data-original");
        horoscope.push({ title, link, imageUrl });
    });

    return horoscope;
});

const horoscopeSlice = createSlice({
    name: "horoscope",
    initialState: {
        horoscopeListResult: [],
        loading: false,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchHoroscope.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchHoroscope.fulfilled, (state, action) => {
                state.loading = false;
                state.horoscopeListResult = action.payload;
            })
            .addCase(fetchHoroscope.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    },
});

export default horoscopeSlice.reducer;
