"use client";

import { configureStore } from "@reduxjs/toolkit";

import feedReducer from "./features/feed/feedSlice";
import liveReducer from "./features/live/liveSlice";
import horoscopeReducer from "./features/horoscopes/horoscopeSlice";
import earthquakeSlice from "./features/recent-earthquakes/recent-earthquakesSlice";
import pharmaciesOncallSlice from "./features/pharmacies-oncall/pharmacies-oncallSlice";


export const store = configureStore({
    reducer: {
        feed: feedReducer,
        live: liveReducer,
        horoscope: horoscopeReducer,
        recentEarthquakes: earthquakeSlice,
        pharmaciesOncall: pharmaciesOncallSlice,

    },
});

export default store;
