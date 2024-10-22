import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import axios from "axios";
import * as cheerio from "cheerio";

export const fetchMoneyInfo = createAsyncThunk("money/fetchInfo", async () => {
    const response = await axios.get("https://finans.mynet.com/doviz/merkezbankasi/");
    const html = response.data;

    const $ = cheerio.load(html);
    const moneyInfo = [];

    $(".table-scrollable-mobil tbody tr").each((index, element) => {
        const currencyName = $(element).find("td:nth-child(1)").text().trim(); // Kur adı
        const currencExchange = $(element).find("td:nth-child(3)").text().trim(); // Kur alış
        const currencSales = $(element).find("td:nth-child(4)").text().trim(); // Son satış

        // İkinci kolon içinde ikonun adını al
        const changeIconClass = $(element).find("td:nth-child(2) .change-icon").attr("class");
        let changeIcon = "";

        if (changeIconClass) {
            if (changeIconClass.includes("change-up")) {
                changeIcon = "change-up";
            } else if (changeIconClass.includes("change-down")) {
                changeIcon = "change-down";
            }
        }

        if (currencyName && currencExchange && currencSales) {
            moneyInfo.push({ currencyName, currencExchange, currencSales, changeIcon });
        }
    });

    return moneyInfo;
});

const moneySlice = createSlice({
    name: "money",
    initialState: {
        moneyList: [],
        loading: false,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchMoneyInfo.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchMoneyInfo.fulfilled, (state, action) => {
                state.loading = false;
                state.moneyList = action.payload;
            })
            .addCase(fetchMoneyInfo.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    },
});

export default moneySlice.reducer;
