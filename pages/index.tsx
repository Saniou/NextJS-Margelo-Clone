import React from 'react'
import Masthead from '@/components/masthead'
import {NextPage} from 'next'
import Head from 'next/head'
import AboutUs from '@/components/aboutus'
import Skills from '@/components/skills'
import Works from '@/components/works'
import TrustedBy from '@/components/trustedBy'
import ContactUs from '@/components/contactus'
import Footer from '@/components/footer'

const Home: NextPage = () => {
  return (
    <React.Fragment>
      
      <Head>
        <title>KrasDev</title>
        <meta name='description' />
      </Head>
      
        <Masthead />
        <AboutUs />
        <Skills />
        <Works/>
        <TrustedBy />
        <ContactUs />
        <Footer/>
        
    </React.Fragment>
  )
}
export default Home