import React from 'react'
import Footer from '../Footer'
import Header from '../Header'
import Navbar from '../Navbar'

export default function Layout({children, data,seoData}) {
  return (
    <div>
      <Header data={seoData}/>
        <Navbar data={data?.navbar}/>
        <div>{children}</div>
        <Footer data={data?.footer}/>
    </div>
  )
}
