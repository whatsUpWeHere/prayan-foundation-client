'use client'

import TopBGImage from '@/components/TopBGImage';
import HomeLink from '@/components/nav-link-components/HomeLink';



function Home() {
  console.log(process.env.NEXT_PUBLIC_BACKEND_URL)
  return (
    <>

      <TopBGImage text="Prayan Foundation" />
      <HomeLink />
    </>
  )
}


export default Home;