'use client'
import { useEffect, useState } from 'react';
import { currentUser } from '@clerk/nextjs'
import UserDropdown from '@/components/UserDropdown'
import { useUser } from "@clerk/nextjs";
import UserProfileCard from '@/components/UserProfileCard';
export default function Home() {
  
  return (
    <>
      <h1>Home page</h1>
      {/* <About/> */}

      <UserDropdown />

      <UserProfileCard/>

    </>
  )
}
