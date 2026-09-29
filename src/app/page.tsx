import React from 'react'
import DisCoverYourPassion from './_components/discover-your-passion'
import ExploreDiverseLearning from './_components/explore-diverse-learning'
import TrustedCompanies from './_components/trusted-companies'
import DiscoverWhatOur from './_components/discover-what-our'
import Hero from './_components/hero'

const HomePage = () => {
  return (
    <div >
      <Hero/>
      <TrustedCompanies/>
      <DisCoverYourPassion/>
      <ExploreDiverseLearning/>
      <DiscoverWhatOur/>
    </div>
  )
}

export default HomePage