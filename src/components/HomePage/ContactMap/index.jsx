import React from 'react'

const ContactMap = () => {
  return (
    <div>
          <div className="max-w-full h-[500px]  mx-auto px-4 lg:px-0 my-[50px]">
            <div>
              <iframe
                loading="lazy"
                src="https://maps.google.com/maps?q=6783%20Dublin%20Blvd.%20Dublin%20CA%2094568&t=m&z=16&output=embed&iwloc=near"
                width="100%"
                height="550"
                allowFullScreen=""
                data-rocket-lazyload="fitvidscompatible"
                data-lazy-src="https://maps.google.com/maps?q=6783%20Dublin%20Blvd.%20Dublin%20CA%2094568&t=m&z=16&output=embed&iwloc=near"
                data-ll-status="loaded"
                className="entered lazyloaded"
              >
                
              </iframe>
            </div>
          </div>
        </div>
  )
}

export default ContactMap