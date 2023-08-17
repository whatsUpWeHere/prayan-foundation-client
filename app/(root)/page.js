'use client'
import { useEffect, useState } from 'react';
import { currentUser } from '@clerk/nextjs'
import UserDropdown from '@/components/UserDropdown'
import { useUser } from "@clerk/nextjs";

export default function Home() {
  // const { isSignedIn, user } = useUser();
  // const [clerkUser, setClerkUser] = useState(user);
  // console.log("user in home page is: ", user);


  // const updateMetadata = async () => {
  //   // Update user data using Clerk's function

  //   const { user } = useUser();
  //   const data = 'Data to store unsafely';

  //   try {
  //     const response = await user.update({
  //       unsafeMetadata: { data }
  //     });
  //     if (response) {
  //       console.log('Metadata updated successfully', response);
  //     }
  //   } catch (err) {
  //     console.error('Error updating metadata', err);
  //   }
  // };

  // useEffect(() => {
  //   async function fetchUserData() {
  //     if (isSignedIn && user) {
  //       try {
  //         const response = await fetch(
  //           "http://localhost:5000/api/auth/createuser",
  //           {
  //             method: "POST",
  //             headers: {
  //               "Content-Type": "application/json",
  //             },
  //             body: JSON.stringify(userObject),
  //           }
  //         );

  //         const userData = await response.json();
  //         console.log("database response: ", userData);
  //         if (!response.ok) {
  //           throw new Error("API request failed");
  //         }


  //         // Update user data using Clerk's function
  //         updateMetadata();

  //         console.log("updated user in home page is: ", user)
  //       } catch (error) {
  //         console.error("API request failed:", error);
  //       }
  //     }
  //   }

  //   fetchUserData();
  // }, [isSignedIn, user]);


  return (
    <>
      <h1>Home page</h1>
      {/* <About/> */}

      <UserDropdown />


    </>
  )
}
