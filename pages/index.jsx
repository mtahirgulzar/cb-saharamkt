
import HomePage from "@/src/components/HomePage";
import Layout from "@/src/components/Layout";
import { adminPath } from "@/utils/constants";
import { jwtToken } from "@/utils/constants";

export default function Home({pageData ,siteData}) { 
  return (
    <>
      <Layout data={siteData} seoData={pageData?.seo}>
        <HomePage form={siteData?.form} data={pageData}/>
      </Layout>
    </>
  );
}


export async function getStaticProps() {
  let pageData = null;
  let siteData = null;
  let bearer = "Bearer " + jwtToken;
  try {
    pageData = await (await fetch(`${adminPath}/home?populate=deep`,
    {
      method: "GET",
      withCredentials: true,
      credentials: "include",
      headers: {
        Authorization: bearer,
      },
    })).json();
    siteData = await (await fetch(`${adminPath}/site?populate=deep`, {
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