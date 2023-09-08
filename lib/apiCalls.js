const createVolunteer = async ({ name, email, role, volunteerObj}) => {



    console.log('createVolunteer called with name, email,role,  volunteerObj', name, email, role, volunteerObj);
    console.log('createVolunteer called with volunteerImage', volunteerObj.volunteerImage);

    try {


        const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL;

        const userObj = {
            name,
            email,
            role,
            volunteerObj
        }

        const response = await fetch(backendUrl + "/api/auth/createVolunteer", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userObj),
        });
        if (response.ok) {
            const responseObject = await response.json();

            console.log("responseObject is ", responseObject);
            console.log("message is ", responseObject.message);
            console.log("status code is ", responseObject.status);

            alert("Thank you for registering as a volunteer. Follow us on social media for more updates...");

            return true;


        } else {
            alert(`Error creating volunteer. Response: ${response}`);
            console.log(
                "Some Error Occured creating volunteer at frontend: ",
                response
            );
            return false;
        }
    } catch (error) {
        alert(`Error creating volunteer 2. Response: ${error}`);

        console.log("Error creating volunteer event at frontend: ", error);
    }

}


export { createVolunteer }