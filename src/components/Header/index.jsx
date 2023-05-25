import React from "react";
import Head from "next/head"; 
import { useRouter } from "next/router"; 
import { imageResolver } from "../../../utils/helpers";


export default function Header({ data }) {
  const noIndex = !data?.indexThisPage;
  const noFollow = !data?.followThisPage;
  const router = useRouter();
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <title>{data?.title} </title>
        <meta name="title" content={data?.title !== null && data?.title}></meta>
        <meta
          name="description"
          content={data?.description !== null && data?.description}
        ></meta>
        <meta
          name="keywords"
          content={data?.keywords !== null && data?.keywords}
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        ></meta>

        <link
          rel="canonical"
          href={`https://saharamkt.com${router.asPath}`}
        />
        <meta
          property="og:title"
          content={data?.ogTitle !== null && data?.ogTitle}
        />
        <meta
          property="og:description"
          content={data?.ogDescription !== null && data?.ogDescription}
        />
        <meta
          property="og:image"
          content={`https://adminsaharamkt.vigorant.xyz${data?.ogUrl}`}
        />
        <meta
          property="og:url"
          content={`https://saharamkt.com${router.asPath}`}
        />
        <meta
          name="twitter:title"
          content={data?.twitterTitle !== null && data?.twitterTitle}
        />
        <meta
          name="twitter:description"
          content={
            data?.twitterDescription !== null && data?.twitterDescription
          }
        />
        <meta
          name="twitter:image"
          content={
            imageResolver(data?.twitterImage !== null && data?.twitterImage)
              .path
          }
        />
        <meta
          name="twitter:card"
          content={data?.twitterCard !== null && data?.twitterCard}
        />
        {noFollow && noIndex && <meta name="robots" content="nofollow" />}
        {data?.noIndex && !noFollow && <meta name="robots" content="noindex" />}
        {noFollow && data?.noIndex && (
          <meta name="robots" content="noindex, nofollow" />
        )}
        {!noFollow && noIndex && <meta name="robots" content="index, follow" />}
      </Head>
    </>
  );
}
