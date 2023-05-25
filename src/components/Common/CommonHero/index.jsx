import React from 'react'
import { imageResolver } from '@/utils/helpers'

export default function CommonHero({data}) {
  return (
    <div >
      <div className='max-w-[16 00px] min-h-[250px] mx-auto md:min-h-[300px] lg:min-h-[400px] mt-[110px]'  style={{
                  background: `url('${imageResolver(data)?.path}') no-repeat center center/cover`,
                }}>

      </div>
    </div>
  )
}
