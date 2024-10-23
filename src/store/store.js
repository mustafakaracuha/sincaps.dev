"use client";

import { configureStore } from "@reduxjs/toolkit";

import feedReducer from "./features/feed/feedSlice";
import liveReducer from "./features/live/liveSlice";
import horoscopeReducer from "./features/horoscopes/horoscopeSlice";
import earthquakeSlice from "./features/lastearthquake/lastEarthquakeSlice";

export const store = configureStore({
    reducer: {
        feed: feedReducer,
        live: liveReducer,
        horoscope: horoscopeReducer,
        lastEarthquake: earthquakeSlice,
    },
});

export default store;
