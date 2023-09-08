'use client'

import { useState } from 'react';

import HomeLink from '@/components/nav-link-components/HomeLink';

function Home() {
  console.log(process.env.NEXT_PUBLIC_BACKEND_URL)


  return (
    <>


      <HomeLink />
    </>
  )
}


export default Home;