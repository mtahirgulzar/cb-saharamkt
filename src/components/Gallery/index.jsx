import React from "react";
import Herogallery from "@/src/components/Gallery/Herogallery";
import TopGallery from "@/src/components/Gallery/topGallery"
import BottomGallery from "@/src/components/Gallery/bottomGallery"
import GallerySlider from "@/src/components/Gallery/gallerySlider"

const index = ({ data }) => { 
 
  return (
    <div className="mt-12">
      <Herogallery data={data?.hero} />
      <TopGallery data={data}/>
      <GallerySlider data={data}/>  
      <BottomGallery data={data}/>
    </div>
  );
};
export default index;