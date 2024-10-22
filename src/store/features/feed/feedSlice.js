import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import axios from "axios";
import * as cheerio from "cheerio";

export const fetchNews = createAsyncThunk("feed/fetchNews", async (feedName) => {
    const getTag = () => {
        switch (feedName) {
            case "guncel":
                return "guncel";
            case "spor":
                return "spor";
            case "ekonomi":
                return "ekonomi";
            case "magazin":
                return "magazin";
            case "teknoloji":
                return "teknoloji";
            case "dini-bilgiler":
                return "dini-bilgiler";
            case "egitim":
                return "egitim";
            case "saglik":
                return "saglik";
            default:
                return "guncel";
        }
    };

    const tag = getTag();

    const response = await axios.get(
        tag === "ekonomi"
            ? "https://finans.mynet.com/haber/kategori/ekonomi/"
            : tag === "magazin"
            ? "https://www.mynet.com/magazin/"
            : tag === "spor"
            ? "https://www.mynet.com/spor/"
            : tag === "dini-bilgiler" // Yeni kontrol
            ? "https://www.mynet.com/dini-bilgiler/" // Dini bilgiler için uygun URL
            : `https://www.mynet.com/${tag}-haberler`
    );
    const html = response.data;

    const $ = cheerio.load(html);

    const articles = [];

    $(".card-text-title").each((index, element) => {
        const title = $(element).text().trim();
        const link = $(element).find("a").attr("href");
        const imageUrl = $(element).closest(".card").find(".card-media a img").attr("data-original");
        articles.push({ title, link, imageUrl });
    });

    return articles;
});

const feedSlice = createSlice({
    name: "feed",
    initialState: {
        newsArticles: [],
        loading: false,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchNews.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchNews.fulfilled, (state, action) => {
                state.loading = false;
                state.newsArticles = action.payload;
            })
            .addCase(fetchNews.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    },
});

export default feedSlice.reducer;
