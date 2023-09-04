const createVolunteer = async ({name, email, volunteerObj}) => {
    console.log('createVolunteer called with name, email, volunteerObj', name, email, volunteerObj);

    try {


        const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL;

        const response = await fetch(backendUrl + "/api/auth/createVolunteer", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(name, email, volunteerObj),
        });
        if (response.ok) {
            const responseObject = await response.json();
            console.log("responseObject is ", responseObject);
            console.log("message is ", responseObject.message);
            console.log("status code is ", responseObject.status);


        } else {
            console.log(
                "Some Error Occured creating volunteer at frontend: ",
                response
            );
        }
    } catch (error) {
        console.log("Error creating volunteer event at frontend: ", error);
    }

} 


export { createVolunteer}