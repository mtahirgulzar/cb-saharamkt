import React from 'react'
import CommonHero from '../Common/CommonHero'
import ContactForm from './ContactForm'
import KeepInTouch from './KeepInTouch'

export default function ContactPage({data, form}) {
  return (
    <div>
      <CommonHero data={data?.image}/>
      <KeepInTouch data={data?.contactus}/>
      <ContactForm data={form}/>
    </div>
  )
}
