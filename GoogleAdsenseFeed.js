"use client";

import Script from "next/script";
import { useEffect } from "react";

const GoogleAdsense = ({ pId }) => {
    if (process.env.NODE_ENV !== "production") {
        return null;
    }

    useEffect(() => {
        try {
            (window.adsbygoogle = window.adsbygoogle || []).push({});
        } catch (e) {
            console.error("AdSense error:", e);
        }
    }, []);

    return (
        <>
            <Script async src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-${pId}`} crossOrigin="anonymous" />
            <ins class="adsbygoogle" style={{ display: "block" }} data-ad-format="fluid" data-ad-layout-key="-7h+ez-1k-3m+ck" data-ad-client={`ca-pub-${pId}`} data-ad-slot="2954304772"></ins>
        </>
    );
};

export default GoogleAdsense;
