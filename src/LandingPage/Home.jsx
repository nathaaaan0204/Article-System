import React, { Fragment } from 'react'
import { NavigationBar } from '../Components/NavigationBar'
import { HeroSection } from '../Components/HeroSection'
import RecentArticles from '../Components/RecentArticles'
import { Footer } from '../Components/Footer'

export const Home = () => {
  return (
    <Fragment>

        <NavigationBar/>
        <HeroSection/>
        <RecentArticles/>
        <Footer/>
    </Fragment>
  )
}
