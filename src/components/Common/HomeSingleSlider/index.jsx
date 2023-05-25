import { imageResolver } from '@/utils/helpers'
import React from 'react'

const HomeSingleSlider = ({data}) => {
  return (
    <div className="w-full my-[60px]"
    >
     <div className="w-full hidden lg:flex py-[280px]" style={{backgroundImage:`url(${imageResolver(data?.img).path})`,
    backgroundRepeat:"no-repeat",
    backgroundSize:"cover"
}}  >
        
     </div>
    </div>
  )
}

export default HomeSingleSlider
