'use client'

import TopBGImage from '@/components/TopBGImage';
import HomeLink from '@/components/nav-link-components/HomeLink';
import HomeCarousel from '@/components/crousel/HomeCarousel';


function Home() {
  console.log(process.env.NEXT_PUBLIC_BACKEND_URL)
  return (
    <>
      <HomeCarousel />
      <HomeLink />
    </>
  )
}


export default Home;