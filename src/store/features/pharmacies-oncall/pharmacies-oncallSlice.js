import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import axios from "axios";
import * as cheerio from "cheerio";

export const fetchPharmaciesOncall = createAsyncThunk("pharmacy/pharmaciesOncall", async ({ selectedCity, selectedDistrict }) => {
    const url = selectedDistrict ? `https://sivasmemleket.com.tr/${selectedCity}-${selectedDistrict}-nobetci-eczaneler` : `https://sivasmemleket.com.tr/${selectedCity}-nobetci-eczaneler`;

    const response = await axios.get(url);

    const html = response.data;

    const $ = cheerio.load(html);

    const pharmacies = [];

    const cities = [];
    const districts = [];

    $(".local-city select option").each((index, element) => {
        const cityText = $(element).text().trim();
        const cityValue = $(element).val();

        if (cityText) {
            cities.push({
                text: cityText,
                value: cityValue,
            });
        }
    });

    $(".local-district select option").each((index, element) => {
        const districtText = $(element).text().trim();
        const districtValue = $(element).val();

        if (districtText) {
            districts.push({
                text: districtText,
                value: districtValue,
            });
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
