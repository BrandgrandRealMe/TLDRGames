import Head from "next/head";
import React, { useState } from 'react';

const HeadMeta = ( meta ) => {
    const Title = meta.title || "TL;DR Games";
    const Desc = meta.desc || "TL;DR Games is your one-stop shop for quick and engaging games! Our website boasts a clean and simple interface, so you can jump right in!";

    return (
        <Head>
            <title>{Title}</title>
            <meta
                name="description"
                content={Desc}
            />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta name="theme-color" content="#2ecc71" />

            <link rel="icon" href="/favicon/color/favicon.ico" media="(prefers-color-scheme: light)"/>
            <link rel="icon" href="/favicon/color/favicon.svg" media="(prefers-color-scheme: light)"/>
            <link rel="apple-touch-icon" sizes="180x180" href="/favicon/color/apple-touch-icon.png" media="(prefers-color-scheme: light)"/>
            <link rel="icon" type="image/png" sizes="32x32" href="/favicon/color/favicon-32x32.png" media="(prefers-color-scheme: light)"/>
            <link rel="icon" type="image/png" sizes="16x16" href="/favicon/color/favicon-16x16.png" media="(prefers-color-scheme: light)"/>
        
            <link rel="icon" href="/favicon/white/favicon.ico" media="(prefers-color-scheme: dark)"/>
            <link rel="icon" href="/favicon/white/favicon.svg" media="(prefers-color-scheme: dark)"/>
            <link rel="apple-touch-icon" sizes="180x180" href="/favicon/white/apple-touch-icon.png" media="(prefers-color-scheme: dark)"/>
            <link rel="icon" type="image/png" sizes="32x32" href="/favicon/white/favicon-32x32.png" media="(prefers-color-scheme: dark)"/>
            <link rel="icon" type="image/png" sizes="16x16" href="/favicon/white/favicon-16x16.png" media="(prefers-color-scheme: dark)"/>

            <link rel="manifest" href="/site.webmanifest" />
        </Head>
    );
};

export default HeadMeta;