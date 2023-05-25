import React from 'react'
import Gallerypage from '@/src/components/Gallery'
import Layout from '@/src/components/Layout'
import { adminPath } from "@/utils/constants";
import { jwtToken } from '@/utils/constants';

export default function Gallery({siteData, pageData}) {
  return (
    <>
    <Layout data={siteData}  seoData={pageData?.seo}>
      <Gallerypage data={pageData}/>
      </Layout>
    </>
  )
}
export async function getStaticProps() {
  let pageData = null;
  let siteData = null;
  let bearer = "Bearer " + jwtToken;

  try {
    pageData = await (await fetch(`${adminPath}/gallery?populate=deep`,{
      method: "GET",
      withCredentials: true,
      credentials: "include",
      headers: {
        Authorization: bearer,
      },
    })).json();
    siteData = await (await fetch(`${adminPath}/site?populate=deep`,{
      method: "GET",
      withCredentials: true,
      credentials: "include",
      headers: {
        Authorization: bearer,
      },
    })).json();
  } catch (err) {}
  return {
    props: {
      pageData: pageData?.data?.attributes || "null",
      siteData: siteData?.data?.attributes || "null",
    },
  };
}
