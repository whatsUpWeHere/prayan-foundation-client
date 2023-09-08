"use client";
import React, { useState } from "react";
import { Form, Container, Row, Col } from "react-bootstrap";
import { Button } from "react-bootstrap";
import "./RegFormStylesheet.css";
import ReCaptcha from "react-google-recaptcha";
import Link from "next/link";
import VolunteerModal from "@/components/VolunteerModal";
import { useContextValues } from "@/context/StateContext";
import { createVolunteer } from "@/lib/apiCalls";
import { storage } from "@/firebase";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { v4 } from "uuid";

const FormComponent = () => {
    const { isSubmitted, setIsSubmitted } = useContextValues();
    const MAX_IMAGE_SIZE = 300 * 1024; // 300KB in bytes
    const [recaptchaToken, setRecaptchaToken] = useState();
    const [imageUpload, setImageUpload] = useState(null);
    const [validImage, setValidImage] = useState(false);

    const test_SITE_KEY = "6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI";
    const SITE_KEY =
        process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || test_SITE_KEY;

    const [formData, setFormData] = useState({
        volunteerImage: imageUpload,
        name: "",
        parentName: "",
        bloodGroup: "",
        rh: "",
        email: "",
        phoneNumber: "",
        age: "",
        profession: "",
        instituteName: "",
        class: "",
        collegeYear: "",
        professionalName: "",
        socialOther: "",
        socialSocial: "",
        address: "",
        address2: "",
        city: "",
        state: "",
        pin: "",
        dob: "",
        gender: "",
        whyJoin: "",
        workPreference: "",
        findAboutUs: "",
    });
    const handleVerify = (token) => {
        setRecaptchaToken(token);
        console.log("captcha verified", token);
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0]; // Get the selected file
        if (file) {
            setImageUpload(file);
            setValidImage(file.size <= MAX_IMAGE_SIZE);
            console.log("imageUpload size is:", file.size);
            console.log("validimage is:", validImage);
        } else {
            // Handle the case where no file was selected
            setImageUpload(null);
            setValidImage(false);
        }
    };
    

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        // You can access the form data in formData object here and send it to the backend.
        console.log("volunteer data: ", formData);
        uploadImage(formData);
    };

    const uploadImage = (formData) => {
        const { name, email } = formData;

        if (imageUpload) {
            if (imageUpload.size <= MAX_IMAGE_SIZE) {
                console.log("Image size is:", imageUpload.size);
                const imageRef = ref(
                    storage,
                    `/volunteerImages/${imageUpload.name + v4()}`
                );

                uploadBytes(imageRef, imageUpload).then((snapshot) => {
                    getDownloadURL(snapshot.ref).then((url) => {
                        formData.volunteerImage = url;
                        console.log("Image URL is:", url);
                        console.log("formData is:", formData);

                        const isOk = createVolunteer({
                            name,
                            email,
                            role: "volunteer",
                            volunteerObj: formData,
                        });

                        if (isOk) {
                            console.log("everything is ok");
                            setIsSubmitted(true);
                        }
                    });

                    alert("Image uploaded");
                });
            } else {
                alert("Image size exceeds the maximum allowed (300KB).");
            }
        }
    };

    return (
        <>
            <button
                onClick={() => {
                    uploadImage();
                }}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
                test api : ignore me pls
            </button>
            {isSubmitted ? (
                <div className="border-2 border-gray-400 w-[90vw] md:w-[70vw]  md:p-7 p-2 ">
                    <p className="text-[#4A4C70] text-4xl text-center letter-wider font-semibold py-2 ">
                        Thanks for being a volunteer
                    </p>
                    <p className="text-lg font-semibold">
                        Join our social media for more updates
                    </p>
                    <div>
                        <div className="mx-5">
                            <Link href="https://chat.whatsapp.com/Le2rQhQeSnv7GtjsWlV6He">
                                Whatsapp group 1
                            </Link>
                            <br />
                            <Link href="https://chat.whatsapp.com/Le2rQhQeSnv7GtjsWlV6He">
                                Whatsapp group 2
                            </Link>
                        </div>
                    </div>
                </div>
            ) : (
                <Container className="form-container">
                    <Form onSubmit={handleSubmit}>
                        <Row className="mb-3">
                            <Col md={6}>
                                <Form.Label>Name</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Enter your Name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    required
                                />
                            </Col>
                            <Col md={6}>
                                <Form.Label>Parent Name</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Enter your Parent Name"
                                    name="parentName"
                                    value={formData.parentName}
                                    onChange={handleInputChange}
                                    required
                                />
                            </Col>
                        </Row>

                        <Row className="mb-3">
                            <Col md={6}>
                                <Form.Label>Blood Group</Form.Label>
                                <Form.Select
                                    name="bloodGroup"
                                    value={formData.bloodGroup}
                                    onChange={handleInputChange}
                                    required
                                >
                                    <option value="">Choose...</option>
                                    <option value="A">A</option>
                                    <option value="B">B</option>
                                    <option value="o">o</option>
                                    <option value="AB">AB</option>
                                </Form.Select>
                            </Col>
                            <Col md={6}>
                                <Form.Label>rh</Form.Label>
                                <Form.Select
                                    name="rh"
                                    value={formData.rh}
                                    onChange={handleInputChange}
                                    required
                                >
                                    <option value="">Choose...</option>
                                    <option value="+">+</option>
                                    <option value="-">-</option>
                                </Form.Select>
                            </Col>
                        </Row>

                        <Row className="mb-3">
                            <Col md={6}>
                                <Form.Label>Email</Form.Label>
                                <Form.Control
                                    type="email"
                                    placeholder="Enter your Email address"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    required
                                />
                            </Col>
                            <Col md={6}>
                                <Form.Label>Phone Number</Form.Label>
                                <Form.Control
                                    type="number"
                                    placeholder="Enter your Phone Number"
                                    name="phoneNumber"
                                    value={formData.phoneNumber}
                                    onChange={handleInputChange}
                                    required
                                />
                            </Col>
                        </Row>
                        <Row className="mb-3">
                            <Col md={6}>
                                <Form.Label>Age</Form.Label>
                                <Form.Control
                                    type="number"
                                    placeholder="Enter your Age"
                                    name="age"
                                    value={formData.age}
                                    onChange={handleInputChange}
                                    required
                                />
                            </Col>
                            <Col md={6}>
                                <Form.Label>Profession</Form.Label>
                                <Form.Select
                                    name="profession"
                                    value={formData.profession}
                                    onChange={handleInputChange}
                                    required
                                >
                                    <option value="">Choose...</option>
                                    <option value="schoolStudent">
                                        Student of school
                                    </option>
                                    <option value="collegeStudent">
                                        Student of college
                                    </option>
                                    <option value="other">Other</option>
                                </Form.Select>
                            </Col>
                            {formData.profession === "schoolStudent" && (
                                <>
                                    <Col md={6}>
                                        <Form.Label>Institute Name</Form.Label>
                                        <Form.Control
                                            type="text"
                                            placeholder="Enter your Institute Name"
                                            name="instituteName"
                                            value={formData.instituteName}
                                            onChange={handleInputChange}
                                        />
                                    </Col>
                                    <Col md={6}>
                                        <Form.Label>Class</Form.Label>
                                        <Form.Control
                                            type="number"
                                            placeholder="Enter your Class"
                                            name="class"
                                            value={formData.class}
                                            onChange={handleInputChange}
                                        />
                                    </Col>
                                </>
                            )}
                            {formData.profession === "collegeStudent" && (
                                <>
                                    <Col md={6}>
                                        <Form.Label>Institute Name</Form.Label>
                                        <Form.Control
                                            type="text"
                                            placeholder="Enter your Institute Name"
                                            name="instituteName"
                                            value={formData.instituteName}
                                            onChange={handleInputChange}
                                        />
                                    </Col>
                                    <Col md={6}>
                                        <Form.Label>College Year</Form.Label>
                                        <Form.Control
                                            type="number"
                                            placeholder="Enter your College Year"
                                            name="collegeYear"
                                            value={formData.collegeYear}
                                            onChange={handleInputChange}
                                        />
                                    </Col>
                                </>
                            )}
                            {formData.profession === "other" && (
                                <>
                                    <Col md={6}>
                                        <Form.Label>Profession Name</Form.Label>
                                        <Form.Control
                                            type="text"
                                            placeholder="Enter your Profession Name"
                                            name="professionalName"
                                            value={formData.professionalName}
                                            onChange={handleInputChange}
                                        />
                                    </Col>
                                </>
                            )}
                        </Row>
                        <Form.Group className="mb-3" controlId="inputAddress">
                            <Form.Label>Address</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Address line 1"
                                name="address"
                                value={formData.address}
                                onChange={handleInputChange}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="inputAddress2">
                            <Form.Label>Address 2</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Address line 2"
                                name="address2"
                                value={formData.address2}
                                onChange={handleInputChange}
                            />
                        </Form.Group>
                        <Row className="mb-3">
                            <Col md={6}>
                                <Form.Label>City</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="city"
                                    value={formData.city}
                                    onChange={handleInputChange}
                                    required
                                />
                            </Col>
                            <Col md={4}>
                                <Form.Label>State</Form.Label>
                                <Form.Select
                                    name="state"
                                    value={formData.state}
                                    onChange={handleInputChange}
                                    required
                                >
                                    <option value="">Choose...</option>
                                    <option value="other">Other</option>
                                </Form.Select>
                            </Col>
                            {formData.state === "other" && (
                                <>
                                    <Col md={6}>
                                        <Form.Label>State</Form.Label>
                                        <Form.Control
                                            type="text"
                                            placeholder="Enter your State"
                                            name="statesOther"
                                            value={formData.statesOther}
                                            onChange={handleInputChange}
                                        />
                                    </Col>
                                </>
                            )}

                            <Col md={2}>
                                <Form.Label>Pin</Form.Label>
                                <Form.Control
                                    type="number"
                                    name="pin"
                                    value={formData.pin}
                                    onChange={handleInputChange}
                                />
                            </Col>
                        </Row>
                        <Form.Group className="mb-3" controlId="inputDate">
                            <Form.Label>Date of Birth</Form.Label>
                            <Form.Control
                                type="date"
                                name="dob"
                                value={formData.dob}
                                onChange={handleInputChange}
                                required
                            />
                        </Form.Group>
                        <fieldset className="row mb-3">
                            <legend className="col-form-label col-sm-2 pt-0">
                                Gender
                            </legend>
                            <Col sm={10}>
                                <Form.Check
                                    type="radio"
                                    name="gender"
                                    id="gridRadios1"
                                    value="Female"
                                    label="Female"
                                    onChange={handleInputChange}
                                />
                                <Form.Check
                                    type="radio"
                                    name="gender"
                                    id="gridRadios2"
                                    value="Male"
                                    label="Male"
                                    onChange={handleInputChange}
                                />
                                <Form.Check
                                    type="radio"
                                    name="gender"
                                    id="gridRadios3"
                                    value="Other"
                                    label="Other"
                                    onChange={handleInputChange}
                                />
                            </Col>
                        </fieldset>
                        <Form.Group controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Why you'd like to join</Form.Label>
                            <Form.Control
                                as="textarea"
                                rows={4}
                                name="whyJoin"
                                value={formData.whyJoin}
                                onChange={handleInputChange}
                            />
                        </Form.Group>
                        <Form.Group controlId="exampleForm.ControlTextarea1">
                            <Form.Label>
                                What type of work you'd like to do
                            </Form.Label>
                            <Form.Control
                                as="textarea"
                                rows={4}
                                name="workPreference"
                                value={formData.workPreference}
                                onChange={handleInputChange}
                            />
                        </Form.Group>
                        <Row className="mb-3">
                            <Col md={6}>
                                <Form.Label>
                                    From where did you hear about us
                                </Form.Label>
                                <Form.Select
                                    name="findAboutUs"
                                    value={formData.findAboutUs}
                                    onChange={handleInputChange}
                                    required
                                >
                                    <option value="">Choose...</option>
                                    <option value="friends">Friends</option>
                                    <option value="news">News</option>
                                    <option value="Social">Social Media</option>
                                    <option value="other">Other</option>
                                </Form.Select>
                            </Col>
                            {formData.findAboutUs === "Social" && (
                                <>
                                    <Col md={6}>
                                        <Form.Label>
                                            Which Social Platform
                                        </Form.Label>
                                        <Form.Control
                                            type="text"
                                            placeholder="Enter the social platform"
                                            name="socialSocial"
                                            value={formData.socialSocial}
                                            onChange={handleInputChange}
                                        />
                                    </Col>
                                </>
                            )}
                        </Row>
                        <Form.Group>
                            <Form.Label>
                                Upload your Image
                                {validImage ? (
                                    <span className="text-sm text-green-500">
                                        &nbsp; image is smaller than 300kb
                                    </span>
                                ) : (
                                    <span className="text-sm text-red-500">
                                        &nbsp; image should be smaller than
                                        300kb
                                    </span>
                                )}
                            </Form.Label>
                            <Form.Control
                                type="file"
                                accept="image/*"
                                onChange={(e) => {
                                    handleImageChange(e);
                                }}
                            />
                        </Form.Group>
                        <Form.Check className="mb-3">
                            <Form.Check.Label htmlFor="gridCheck">
                                Confirm
                            </Form.Check.Label>
                        </Form.Check>
                        <div className="text-center flex justify-center items-center flex-col gap-3">
                            <ReCaptcha
                                sitekey={test_SITE_KEY}
                                onChange={handleVerify}
                            />
                            <Button
                                variant="primary"
                                type="submit"
                                className="rounded-pill w-75"
                                disabled={!recaptchaToken || !validImage}
                            >
                                Register
                            </Button>
                        </div>
                    </Form>
                </Container>
            )}
        </>
    );
};

export default FormComponent;
