import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import axios from "axios";
import * as cheerio from "cheerio";

export const fetchPharmaciesOncall = createAsyncThunk("pharmacy/pharmaciesOncall", async (selectedCity) => {
    const response = await axios.get(`https://sivasmemleket.com.tr/${selectedCity}-nobetci-eczaneler`);

    const html = response.data;

    const $ = cheerio.load(html);

    const pharmacies = [];

    $(".pharmacies-list ul li").each((index, element) => {
        const title = $(element).find("h3").text().trim(); 
        const address = $(element).find("address").text().trim();

        const phone = $(element).find("a[href^='tel:']").attr("href")?.replace("tel:", "").trim(); // Telefon numarası
        const directions = $(element).find("a[href^='https://www.google.com/']").attr("href"); // Yol tarifi için link

        pharmacies.push({ title, address, phone, directions });
    });

    return pharmacies;
});

const pharmaciesOncallSlice = createSlice({
    name: "pharmaciesOncall",
    initialState: {
        pharmaciesOncallList: [],
        loading: false,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchPharmaciesOncall.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchPharmaciesOncall.fulfilled, (state, action) => {
                state.loading = false;
                state.pharmaciesOncallList = action.payload;
            })
            .addCase(fetchPharmaciesOncall.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    },
});

export default pharmaciesOncallSlice.reducer;
