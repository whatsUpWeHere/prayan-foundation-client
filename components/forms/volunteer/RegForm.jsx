// "use client";
// "use client";
// import React, { useState } from "react";
// import { Form,  Container, Row, Col } from "react-bootstrap";
// import { Button as formButton } from "react-bootstrap";
// import "./RegFormStylesheet.css";


// import { Button } from "@/components/ui/button";
// import {
//     Dialog,
//     DialogContent,
//     DialogDescription,
//     DialogFooter,
//     DialogHeader,
//     DialogTitle,
//     DialogTrigger,
// } from "@/components/ui/dialog";
// import { Label } from "@/components/ui/label";


// function DialogDemo() {
//     return (
//         <Dialog>
//             <DialogTrigger asChild>
//                 <Button variant="outline">Edit Profile</Button>
//             </DialogTrigger>
//             <DialogContent className="sm:max-w-[425px]">
//                 <DialogHeader>
//                     <DialogTitle>Edit profile</DialogTitle>
//                     <DialogDescription>
//                         Make changes to your profile here. Click save when
//                         you're done.
//                     </DialogDescription>
//                 </DialogHeader>
//                 <div className="grid gap-4 py-4">
//                     <div className="grid grid-cols-4 items-center gap-4">
//                         <Label htmlFor="name" className="text-right">
//                             Name
//                         </Label>
//                         <h1>input</h1>

//                     </div>
//                     <div className="grid grid-cols-4 items-center gap-4">
//                         <Label htmlFor="username" className="text-right">
//                             Username
//                         </Label>
//                         <h1>input</h1>
//                     </div>
//                 </div>
//                 <DialogFooter>
//                     <Button type="submit">Save changes</Button>
//                 </DialogFooter>
//             </DialogContent>
//         </Dialog>
//     );
// }






// const FormComponent = () => {
    
//     const [formData, setFormData] = useState({
//         selectedImage: null,
//         name: "",
//         parentName: "",
//         bloodGroup: "",
//         rh: "",
//         email: "",
//         phoneNumber: "",
//         age: "",
//         profession: "",
//         instituteName: "",
//         classValue: "",
//         collegeYearValue: "",
//         professionNameValue: "",
//         socialOther: "",
//         socialSocial: "",
//         address: "",
//         address2: "",
//         city: "",
//         state: "",
//         pin: "",
//         dob: "",
//         gender: "",
//         whyJoin: "",
//         workPreference: "",
//         findAboutUs: "",
//     });

//     const handleInputChange = (event) => {
//         const { name, value } = event.target;
//         setFormData({
//             ...formData,
//             [name]: value,
//         });
//     };

//     const handleImageChange = (event) => {
//         setFormData({
//             ...formData,
//             selectedImage: event.target.files[0],
//         });
//     };

//     const handleSubmit = (event) => {
//         event.preventDefault();
//         // You can access the form data in formData object here and send it to the backend.
//         console.log("voluteer data: ", formData);
//         DialogDemo();
//     };

//     return (
//         <Container className="form-container">
//             <Form onSubmit={handleSubmit}>
//                 <Row className="mb-3">
//                     <Col md={6}>
//                         <Form.Label>Name</Form.Label>
//                         <Form.Control
//                             type="text"
//                             placeholder="Enter your Name"
//                             name="name"
//                             value={formData.name}
//                             onChange={handleInputChange}
//                             required
//                         />
//                     </Col>
//                     <Col md={6}>
//                         <Form.Label>Parent Name</Form.Label>
//                         <Form.Control
//                             type="text"
//                             placeholder="Enter your Parent Name"
//                             name="parentName"
//                             value={formData.parentName}
//                             onChange={handleInputChange}
//                             required
//                         />
//                     </Col>
//                 </Row>

//                 <Row className="mb-3">
//                     <Col md={6}>
//                         <Form.Label>Blood Group</Form.Label>
//                         <Form.Select
//                             name="bloodGroup"
//                             value={formData.bloodGroup}
//                             onChange={handleInputChange}
//                             required
//                         >
//                             <option value="">Choose...</option>
//                             <option value="A">A</option>
//                             <option value="B">B</option>
//                             <option value="o">o</option>
//                             <option value="AB">AB</option>
//                         </Form.Select>
//                     </Col>
//                     <Col md={6}>
//                         <Form.Label>rh</Form.Label>
//                         <Form.Select
//                             name="rh"
//                             value={formData.rh}
//                             onChange={handleInputChange}
//                             required
//                         >
//                             <option value="">Choose...</option>
//                             <option value="+">+</option>
//                             <option value="-">-</option>
//                         </Form.Select>
//                     </Col>
//                 </Row>

//                 <Row className="mb-3">
//                     <Col md={6}>
//                         <Form.Label>Email</Form.Label>
//                         <Form.Control
//                             type="email"
//                             placeholder="Enter your Email address"
//                             name="email"
//                             value={formData.email}
//                             onChange={handleInputChange}
//                             required
//                         />
//                     </Col>
//                     <Col md={6}>
//                         <Form.Label>Phone Number</Form.Label>
//                         <Form.Control
//                             type="number"
//                             placeholder="Enter your Phone Number"
//                             name="phoneNumber"
//                             value={formData.phoneNumber}
//                             onChange={handleInputChange}
//                             required
//                         />
//                     </Col>
//                 </Row>
//                 <Row className="mb-3">
//                     <Col md={6}>
//                         <Form.Label>Age</Form.Label>
//                         <Form.Control
//                             type="number"
//                             placeholder="Enter your Age"
//                             name="age"
//                             value={formData.age}
//                             onChange={handleInputChange}
//                             required
//                         />
//                     </Col>
//                     <Col md={6}>
//                         <Form.Label>Profession</Form.Label>
//                         <Form.Select
//                             name="profession"
//                             value={formData.profession}
//                             onChange={handleInputChange}
//                             required
//                         >
//                             <option value="">Choose...</option>
//                             <option value="schoolStudent">
//                                 Student of school
//                             </option>
//                             <option value="collegeStudent">
//                                 Student of college
//                             </option>
//                             <option value="other">Other</option>
//                         </Form.Select>
//                     </Col>
//                     {formData.profession === "schoolStudent" && (
//                         <>
//                             <Col md={6}>
//                                 <Form.Label>Institute Name</Form.Label>
//                                 <Form.Control
//                                     type="text"
//                                     placeholder="Enter your Institute Name"
//                                     name="instituteName"
//                                     value={formData.instituteName}
//                                     onChange={handleInputChange}
//                                 />
//                             </Col>
//                             <Col md={6}>
//                                 <Form.Label>Class</Form.Label>
//                                 <Form.Control
//                                     type="number"
//                                     placeholder="Enter your Class"
//                                     name="classValue"
//                                     value={formData.classValue}
//                                     onChange={handleInputChange}
//                                 />
//                             </Col>
//                         </>
//                     )}
//                     {formData.profession === "collegeStudent" && (
//                         <>
//                             <Col md={6}>
//                                 <Form.Label>Institute Name</Form.Label>
//                                 <Form.Control
//                                     type="text"
//                                     placeholder="Enter your Institute Name"
//                                     name="instituteName"
//                                     value={formData.instituteName}
//                                     onChange={handleInputChange}
//                                 />
//                             </Col>
//                             <Col md={6}>
//                                 <Form.Label>College Year</Form.Label>
//                                 <Form.Control
//                                     type="number"
//                                     placeholder="Enter your College Year"
//                                     name="collegeYearValue"
//                                     value={formData.collegeYearValue}
//                                     onChange={handleInputChange}
//                                 />
//                             </Col>
//                         </>
//                     )}
//                     {formData.profession === "other" && (
//                         <>
//                             <Col md={6}>
//                                 <Form.Label>Profession Name</Form.Label>
//                                 <Form.Control
//                                     type="text"
//                                     placeholder="Enter your Profession Name"
//                                     name="professionNameValue"
//                                     value={formData.professionNameValue}
//                                     onChange={handleInputChange}
//                                 />
//                             </Col>
//                         </>
//                     )}
//                 </Row>
//                 <Form.Group className="mb-3" controlId="inputAddress">
//                     <Form.Label>Address</Form.Label>
//                     <Form.Control
//                         type="text"
//                         placeholder="Address line 1"
//                         name="address"
//                         value={formData.address}
//                         onChange={handleInputChange}
//                     />
//                 </Form.Group>
//                 <Form.Group className="mb-3" controlId="inputAddress2">
//                     <Form.Label>Address 2</Form.Label>
//                     <Form.Control
//                         type="text"
//                         placeholder="Address line 2"
//                         name="address2"
//                         value={formData.address2}
//                         onChange={handleInputChange}
//                     />
//                 </Form.Group>
//                 <Row className="mb-3">
//                     <Col md={6}>
//                         <Form.Label>City</Form.Label>
//                         <Form.Control
//                             type="text"
//                             name="city"
//                             value={formData.city}
//                             onChange={handleInputChange}
//                             required
//                         />
//                     </Col>
//                     <Col md={4}>
//                         <Form.Label>State</Form.Label>
//                         <Form.Select
//                             name="state"
//                             value={formData.state}
//                             onChange={handleInputChange}
//                             required
//                         >
//                             <option value="">Choose...</option>
//                             <option value="other">Other</option>
//                         </Form.Select>
//                     </Col>
//                     {formData.state === "other" && (
//                         <>
//                             <Col md={6}>
//                                 <Form.Label>State</Form.Label>
//                                 <Form.Control
//                                     type="text"
//                                     placeholder="Enter your State"
//                                     name="statesOther"
//                                     value={formData.statesOther}
//                                     onChange={handleInputChange}
//                                 />
//                             </Col>
//                         </>
//                     )}

//                     <Col md={2}>
//                         <Form.Label>Pin</Form.Label>
//                         <Form.Control
//                             type="number"
//                             name="pin"
//                             value={formData.pin}
//                             onChange={handleInputChange}
//                         />
//                     </Col>
//                 </Row>
//                 <Form.Group className="mb-3" controlId="inputDate">
//                     <Form.Label>Date of Birth</Form.Label>
//                     <Form.Control
//                         type="date"
//                         name="dob"
//                         value={formData.dob}
//                         onChange={handleInputChange}
//                         required
//                     />
//                 </Form.Group>
//                 <fieldset className="row mb-3">
//                     <legend className="col-form-label col-sm-2 pt-0">
//                         Gender
//                     </legend>
//                     <Col sm={10}>
//                         <Form.Check
//                             type="radio"
//                             name="gender"
//                             id="gridRadios1"
//                             value="Female"
//                             label="Female"
//                             onChange={handleInputChange}
//                         />
//                         <Form.Check
//                             type="radio"
//                             name="gender"
//                             id="gridRadios2"
//                             value="Male"
//                             label="Male"
//                             onChange={handleInputChange}
//                         />
//                         <Form.Check
//                             type="radio"
//                             name="gender"
//                             id="gridRadios3"
//                             value="Other"
//                             label="Other"
//                             onChange={handleInputChange}
//                         />
//                     </Col>
//                 </fieldset>
//                 <Form.Group controlId="exampleForm.ControlTextarea1">
//                     <Form.Label>Why you'd like to join</Form.Label>
//                     <Form.Control
//                         as="textarea"
//                         rows={4}
//                         name="whyJoin"
//                         value={formData.whyJoin}
//                         onChange={handleInputChange}
//                     />
//                 </Form.Group>
//                 <Form.Group controlId="exampleForm.ControlTextarea1">
//                     <Form.Label>What type of work you'd like to do</Form.Label>
//                     <Form.Control
//                         as="textarea"
//                         rows={4}
//                         name="workPreference"
//                         value={formData.workPreference}
//                         onChange={handleInputChange}
//                     />
//                 </Form.Group>
//                 <Row className="mb-3">
//                     <Col md={6}>
//                         <Form.Label>
//                             From where did you hear about us
//                         </Form.Label>
//                         <Form.Select
//                             name="findAboutUs"
//                             value={formData.findAboutUs}
//                             onChange={handleInputChange}
//                             required
//                         >
//                             <option value="">Choose...</option>
//                             <option value="friends">Friends</option>
//                             <option value="news">News</option>
//                             <option value="Social">Social Media</option>
//                             <option value="other">Other</option>
//                         </Form.Select>
//                     </Col>
//                     {formData.findAboutUs === "other" && (
//                         <>
//                             <Col md={6}>
//                                 <Form.Label>
//                                     From where did you hear about us
//                                 </Form.Label>
//                                 <Form.Control
//                                     type="text"
//                                     placeholder="Enter where you heard about us"
//                                     name="socialOther"
//                                     value={formData.socialOther}
//                                     onChange={handleInputChange}
//                                 />
//                             </Col>
//                         </>
//                     )}
//                     {formData.findAboutUs === "Social" && (
//                         <>
//                             <Col md={6}>
//                                 <Form.Label>Which Social Platform</Form.Label>
//                                 <Form.Control
//                                     type="text"
//                                     placeholder="Enter the social platform"
//                                     name="socialSocial"
//                                     value={formData.socialSocial}
//                                     onChange={handleInputChange}
//                                 />
//                             </Col>
//                         </>
//                     )}
//                 </Row>
//                 <Form.Group>
//                     <Form.Label>Upload your Image</Form.Label>
//                     <Form.Control
//                         type="file"
//                         accept="image/*"
//                         onChange={handleImageChange}
//                     />
//                 </Form.Group>
//                 <Form.Check className="mb-3">
                   
//                     <Form.Check.Label htmlFor="gridCheck">
//                         Confirm
//                     </Form.Check.Label>
//                 </Form.Check>

//                 <div className="text-center">
//                     <formButton
//                         variant="primary"
//                         type="submit"
//                         className="rounded-pill w-75"
//                     >
//                         Register
//                     </formButton>
//                 </div>
//             </Form>
//         </Container>
//     );
// };

// export default FormComponent;


export default function RegForm() {
    return (
        <h1>volunteer form</h1>
    )
}