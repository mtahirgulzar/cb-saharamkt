import React, { useState } from 'react'
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";
import { imageResolver } from "@/utils/helpers";


const index = ({data}) => {
    const images = data?.galleryimg?.map((img, index) => ({
    title: `${index + 1}`,
    caption: `Image ${index + 1}`,
    url: imageResolver(img.image).path
  }));
    const [isOpen, setIsOpen] = useState(false);
    const [imgIndex, setImgIndex] = useState(0);

  return (
    <>
      {isOpen && (
        <Lightbox
          imageTitle={images[imgIndex].title}
          imageCaption={images[imgIndex].caption}
          mainSrc={images[imgIndex].url}
          nextSrc={images[(imgIndex + 1) % images.length].url}
          prevSrc={images[(imgIndex + images.length - 1) % images.length].url}
          onCloseRequest={() => setIsOpen(false)}
          onMovePrevRequest={() =>
            setImgIndex((imgIndex + images.length - 1) % images.length)
          }
          onMoveNextRequest={() => setImgIndex((imgIndex + 1) % images.length)}
        />
      )}

<section className="overflow-hidden text-gray-700">
        <div className="container px-4 py-2 mx-auto lg:pt-24 lg:px-32">
            <div className="flex flex-wrap -m-1 md:-m-2">
              {data?.galleryimg?.map(
                (image, index) => {
                  if (index % 3 === 0) {
                    return (
                      <div className="flex flex-wrap w-1/2" key={index}>
                        {data?.galleryimg
                          .slice(index, index + 3)
                          .map((img, i) =>
                            img?.image?.data !== null && (
                              <div
                                key={i}
                                className={`w-${i % 3 === 2 ? 'full' : '1/2'} p-[2px] sm:p-1 md:p-2`}
                              >
                                <img
                                  alt={img?.image?.data?.attributes?.alternativeText}
                                  loading="lazy"
                                  className="block cursor-pointer object-cover object-center w-full h-full rounded-lg"
                                  src={imageResolver(img.image).path}
                                  onClick={() => {
                                    setImgIndex(index + i);
                                    setIsOpen(true);
                                  }}
                                />
                              </div>
                            )
                          )}
                      </div>
                    );
                  }
                  return null;
                }
              )}
            </div>
        </div>
      </section>
    </>

  )
}

export default index
