import Layout from "@/src/components/Layout";
import { adminPath } from "@/utils/constants";
import { jwtToken } from "@/utils/constants";

export default function Home({pageData ,siteData}) {
  return (
    <>
      <Layout data={siteData} seoData={pageData?.seo}>
        <div className="mt-40 mb-7 max-w-[1140px] px-4 mx-auto">
        <div className="lg:pl-14">
        <h2 className="text-[#333333] text-[40px] leading-[48px] font-medium">The page can't be found.</h2>
        <p className="text-[#333333] text-[16px] leading-[24px] ">It looks like nothing was found at this location.</p>
        </div>
        </div>
      </Layout>
    </>
  );
}


export async function getStaticProps() {
  let pageData = null;
  let siteData = null;
  let bearer = "Bearer " + jwtToken;
  try {
    pageData = await (await fetch(`${adminPath}/meat?populate=deep`,{
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