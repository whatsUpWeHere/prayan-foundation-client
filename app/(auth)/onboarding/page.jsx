// here i will use userobject from clerk and store it in my own database

import { currentUser } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import cookies from "universal-cookie";

const page = async () => {
    const user = await currentUser();
    if (!user) return null;

    const { emailAddresses, firstName, lastName } = user;
    const email = emailAddresses[0].emailAddress;
    const name = firstName + " " + lastName;

    // saving the user to database
    const userObject = {
        name,
        email,
    };

    try {
        const response = await fetch(
            "http://localhost:5000/api/auth/createuser",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(userObject),
            }
        );

        const userData = await response.json();
        console.log("database response: ", userData);

        // checking if user with given email already present in database
        // 400 - already present, 201 - created

        // creating a cookie
        if (response.status === 400 || response.status === 201) {
            
            const { role, donations, _id } = userData.user;
            const authObject = {
                _id,
                name,
                email,
                role,
                donations,
            };
            const Cookies = new cookies();
            Cookies.set("authObject", JSON.stringify(authObject));

            console.log("authObject is: ", Cookies.get("authObject"));
        } else {
            console.log("Error setting cookie");
        }
    } catch (error) {
        console.log(error);
        return;
    }
    redirect("/");
};

export default page;
