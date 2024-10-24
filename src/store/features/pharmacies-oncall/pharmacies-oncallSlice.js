import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import axios from "axios";
import * as cheerio from "cheerio";

export const fetchPharmaciesOncall = createAsyncThunk("pharmacy/pharmaciesOncall", async ({ selectedCity, selectedDistrict }) => {
    const response = await axios.get(`https://sivasmemleket.com.tr/${selectedCity}-${selectedDistrict}-nobetci-eczaneler`);

    const html = response.data;

    const $ = cheerio.load(html);

    const pharmacies = [];

    const cities = [];
    const districts = [];

    $(".local-city select option").each((index, element) => {
        const city = $(element).text().trim();
        if (city) {
            cities.push(city);
        }
    });

    $(".local-district select option").each((index, element) => {
        const district = $(element).text().trim();
        if (district) {
            districts.push(district);
        }
    });

    $(".pharmacies-list ul li").each((index, element) => {
        const title = $(element).find("h3").text().trim();
        const address = $(element).find("address").text().trim();

        const phone = $(element).find("a[href^='tel:']").attr("href")?.replace("tel:", "").trim();
        const directions = $(element).find("a[href^='https://www.google.com/']").attr("href");

        pharmacies.push({ title, address, phone, directions });
    });

    return { cities, districts, pharmacies };
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
