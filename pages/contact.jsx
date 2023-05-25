import ContactPage from "@/src/components/ContactPage";
import Layout from "@/src/components/Layout";
import React from "react";
import { adminPath } from "@/utils/constants";
import { jwtToken } from "@/utils/constants";

export default function contact({ pageData, siteData }) {
  return (
    <div>
      <Layout data={siteData} seoData={pageData?.seo}>
        <ContactPage form={siteData?.form} data={pageData} />
      </Layout>
    </div>
  );
}
export async function getStaticProps() {
  let pageData = null;
  let siteData = null;
  let bearer = "Bearer " + jwtToken;

  try {
    pageData = await (
      await fetch(`${adminPath}/contact?populate=deep`, {
        method: "GET",
        withCredentials: true,
        credentials: "include",
        headers: {
          Authorization: bearer,
        },
      })
    ).json();
    siteData = await (
      await fetch(`${adminPath}/site?populate=deep`, {
        method: "GET",
        withCredentials: true,
        credentials: "include",
        headers: {
          Authorization: bearer,
        },
      })
    ).json();
  } catch (err) {}
  return {
    props: {
      pageData: pageData?.data?.attributes || "null",
      siteData: siteData?.data?.attributes || "null",
    },
  };
}
