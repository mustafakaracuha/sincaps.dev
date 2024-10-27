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
            <ins className="adsbygoogle" style={{ display: "block" }} data-ad-client={`ca-pub-${pId}`} data-ad-slot="4618740231" data-ad-format="auto" data-full-width-responsive="true"></ins>
        </>
    );
};

export default GoogleAdsense;
