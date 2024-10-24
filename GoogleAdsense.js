import Script from "next/script";

const GoogleAdsense = ({ pId }) => {
    if (process.env.NODE_ENV !== "production") {
        return null;
    }

    return <Script async src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-${pId}`} crossOrigin="anonymous" />;
};

export default GoogleAdsense;
