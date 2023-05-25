import React from "react";
import SaharaMarket from "./SaharaMarket";
import ImageSlider from "./ImageSlider";
import HomeFoodSection from "../Common/HomeFoodSection";
import HomeSingleSlider from "../Common/HomeSingleSlider";
import Testimonial from "./Testominial";
import ServicesCards from "./ServicesCards";
import HomeHero from "./HomeHero";
import FlipImages from "./FlipImages";
import FlipCards from "./FlipCards";
import ContactForm from "../ContactPage/ContactForm";
import ContactMap from "./ContactMap";
import Meat from "../Common/Meat";

const HomePage = ({data, form}) => {
  const order = 1;
  const position="1"
  return (
    <div>
      <HomeHero data={data?.ourDishes}/>
      <ServicesCards data={data?.onlineOrder} />
      <FlipImages data={data?.flipImage}/>
      <SaharaMarket data={data?.welcome}/>
      <FlipCards data={data?.flipcard}/>
      <ImageSlider data={data?.imageslider} />
      <HomeFoodSection  order={order} position={position} data={data?.afghani} />
      <HomeSingleSlider data={data?.image1}/>
      <Meat order={order ==2} data={data?.meatandchicken}/>
      <HomeSingleSlider data={data?.image2}/>
      <HomeFoodSection order={order} data={data?.mediterranean}/>
      <HomeSingleSlider data={data?.image3}/>
      <HomeFoodSection order={order} data={data?.catering} />
      <HomeFoodSection order={order == 2} data={data?.groceries} />

      <Testimonial data={data?.testimonials}/>
      <ContactForm data={form}/>
      <ContactMap/>
    </div>
  );
};

export default HomePage;
