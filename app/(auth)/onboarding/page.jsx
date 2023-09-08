// here i will use userobject from clerk and store it in my own database

import { currentUser } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import { clerkClient } from "@clerk/nextjs";

const page = async () => {
    // const backend_url = "https://ngo-site-backend.onrender.com";
    // const backend_url = "http://localhost:5000";
    const backend_url = process.env.NEXT_PUBLIC_BACKEND_URL;
    const user = await currentUser();
    if (!user) return null;
    const { emailAddresses, firstName, lastName, id, profileImageUrl } = user;
    const email = emailAddresses[0].emailAddress;
    const name = firstName + " " + lastName;

    const updateMetadata = async ({
        name,
        email,
        profileImageUrl,
        role,
        donation,
        dbID,
    }) => {
        // Update user data using Clerk's function

        const userCookieObj = {
            unsafeMetadata: {
                name,
                email,
                profileImageUrl,
                role,
                donation,
                dbID,
            },
        };
        console.log("unsafeMetadata is", userCookieObj);
        try {
            const response = await clerkClient.users.updateUser(
                id,
                userCookieObj
            );

            if (response) {
                console.log("Metadata updated successfully", response);
                const refreshedUser = await clerkClient.users.getUser(user.id);
                console.log("refreshed user is", refreshedUser);
            }
            console.log("user donations is: ", ...donation);
        } catch (err) {
            console.error("Error updating metadata", err);
        }
    };

    // saving the user to database

    try {
        const userObject = {
            name,
            email,
        };
        const response = await fetch(backend_url + "/api/auth/createuser", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(userObject),
        });

        const userData = await response.json();
        console.log("database response: ", userData);
        const { user } = userData;

        const newUserObj = {
            name,
            email,
            profileImageUrl,
            role: user.role,
            donation: user.donations.reduce(
                (sum, donation) => sum + donation.amount,
                0
            ),
            dbID: user._id,
        };
        console.log("newUserobject is ", newUserObj);
        updateMetadata(newUserObj);
    } catch (error) {
        console.log("some error occured in creating cookies ", error);
    }

    redirect("/");
};



export default page;
