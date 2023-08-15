import Image from 'next/image'
import { currentUser } from '@clerk/nextjs'
// import About from '@/components/About'

export default async function Home() {
  const user = await currentUser();
  if (user) { console.log(user) };
  return (
    <>
      <h1>Home page</h1>
      
    </>
  )
}
