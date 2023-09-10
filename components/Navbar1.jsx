"use client";
import React, { useState, useEffect } from "react";
import {
    Navbar,
    Nav,
    NavDropdown,
    Container,
    Offcanvas,
    Button,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./navbar.css";
import UserProfileCard from "./cards/UserProfileCard";
import Link from "next/link";
import {
    UserButton,
    useUser,
    useAuth,
    SignedOut,
    SignedIn,
    SignInButton,
} from "@clerk/nextjs";

function AppNavbar() {
    const [showOffcanvas, setShowOffcanvas] = useState(false);
    const [scrolled, setScrolled] = useState(true);

    const closeOffcanvas = () => setShowOffcanvas(false);
    const { user } = useUser();

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 10) {
                setScrolled(false);
            } else {
                setScrolled(true);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <Navbar
            bg={scrolled ? "dark" : "translucent"} // Change the background color when scrolled
            variant="dark"
            expand="lg"
            sticky="top"
            className={`navbar-fade ${scrolled ? "navbar-scrolled" : ""}`}
        >
            <Container>
                <Link href="/">
                    <Navbar.Brand>
                        {/* "https://github.com/whatsUpWeHere/prayanFoundationwebsiteImages/blob/main/logo.png?raw=true" */}
                        <img
                            src="https://github.com/whatsUpWeHere/prayanFoundationwebsiteImages/blob/main/logo.png?raw=true"
                            alt="Prayan Foundation"
                            width="48rem"
                            height="48rem"
                            className="d-inline-block mt-1 align-top brandImg"
                        />{" "}
                        <h2 className="d-inline-block align-center mt-3">
                            Prayan Foundation
                        </h2>
                    </Navbar.Brand>
                    <Navbar.Toggle
                    aria-controls="navbar"
                    onClick={() => setShowOffcanvas(!showOffcanvas)}
                />
                </Link>
                
                <Navbar.Collapse id="navbar" className="d-none ">
                    <Nav className="m-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <NavDropdown title="About" id="our-units-dropdown">
                            <NavDropdown.Item href="/about">
                                About
                            </NavDropdown.Item>
                            <NavDropdown.Item href="/our-units">
                                OurUnits
                            </NavDropdown.Item>
                            <NavDropdown.Item href="/about/developers">
                                Our Developers
                            </NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="Event" id="blog-dropdown">
                            <NavDropdown.Item href="/events">
                                Event
                            </NavDropdown.Item>
                            <NavDropdown.Item href="/blog">
                                Blog
                            </NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="Volunteer" id="donate-dropdown">
                            <NavDropdown.Item href="/volunteer">
                                Volunteer
                            </NavDropdown.Item>
                            <NavDropdown.Item href="/donate">
                                Donate
                            </NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="/contact">Contact</Nav.Link>
                    </Nav>
                    <Nav>
                        {user ? (
                            <UserProfileCard />
                        ) : (
                            <SignedIn>
                                <UserButton
                                    afterSignOutUrl="/"
                                    className="w-[30px]"
                                />
                            </SignedIn>
                        )}
                        <SignedOut>
                            <div className="sm:flex sm:gap-4">
                                <style type="text/css">
                                    {`
                                .btn-flat {
                                    background-color: teal;
                                    color: white;
                                            }
                                .btn-flat:hover {
                                    background-color: #66b2b2 !important;
                                    }

                                .btn-xxl {
                                    padding: 1rem 1.5rem;
                                    font-size: 1.5rem;
                                        }
                                `}
                                </style>
                                {/* <Link href="/sign-in">
                                    <Button
                                        variant="outline-light"
                                        className="mx-2"
                                    >
                                        Login
                                    </Button>
                                </Link> */}
                                <div className=" sm:flex">
                                    <Link href="/sign-in">
                                        <Button variant="flat">Login</Button>
                                    </Link>
                                </div>
                            </div>
                        </SignedOut>
                    </Nav>
                </Navbar.Collapse>
            </Container>

            <Offcanvas
                show={showOffcanvas}
                onHide={closeOffcanvas}
                placement="end"
            >
                <Offcanvas.Header
                    // className="custom-close-button"
                    style={{ backgroundColor: "#333", color: "white" }}
                >
                    <Offcanvas.Title>Menu</Offcanvas.Title>
                    <button
                        type="button"
                        className="btn-close custom-close-button"
                        onClick={closeOffcanvas}
                        style={{ color: "white" }}
                    >
                        <strong>X</strong>
                    </button>
                </Offcanvas.Header>
                <Offcanvas.Body style={{ backgroundColor: "#f0f0f0" }}>
                    <Nav className="flex-column m-auto">
                        {/* Add some custom CSS classes for styling */}
                        <Nav.Link
                            href="/"
                            onClick={closeOffcanvas}
                            className="offcanvas-link"
                        >
                            Home
                        </Nav.Link>
                        <NavDropdown title="About">
                            <NavDropdown.Item
                                href="/about"
                                onClick={closeOffcanvas}
                                className="offcanvas-link"
                            >
                                About
                            </NavDropdown.Item>
                            <NavDropdown.Item
                                href="/our-units"
                                onClick={closeOffcanvas}
                                className="offcanvas-link"
                            >
                                Our Units
                            </NavDropdown.Item>
                            <NavDropdown.Item
                                href="/about/developers"
                                onClick={closeOffcanvas}
                                className="offcanvas-link"
                            >
                                Our Developers
                            </NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="Event">
                            <NavDropdown.Item
                                href="/events"
                                onClick={closeOffcanvas}
                                className="offcanvas-link"
                            >
                                Event
                            </NavDropdown.Item>
                            <NavDropdown.Item
                                href="/blog"
                                onClick={closeOffcanvas}
                                className="offcanvas-link"
                            >
                                Blog
                            </NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="Volunteer">
                            <NavDropdown.Item
                                href="/volunteer"
                                onClick={closeOffcanvas}
                                className="offcanvas-link"
                            >
                                Volunteer
                            </NavDropdown.Item>
                            <NavDropdown.Item
                                href="/donate"
                                onClick={closeOffcanvas}
                                className="offcanvas-link"
                            >
                                Donate
                            </NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link
                            href="/contact"
                            onClick={closeOffcanvas}
                            className="offcanvas-link"
                        >
                            Contact
                        </Nav.Link>
                    </Nav>
                    <Nav>
                        {user ? (
                            <UserProfileCard />
                        ) : (
                            <SignedIn>
                                <UserButton
                                    afterSignOutUrl="/"
                                    className="w-[30px]"
                                />
                            </SignedIn>
                        )}
                        <SignedOut>
                            <div className="m-auto p-3 sm:flex sm:gap-4">
                                {/* <Link href="/sign-in">
                                <Button
                                        variant="outline-light"
                                        className="mx-2"
                                    >
                                        Login
                                    </Button>
                                </Link> */}
                                <div className="sm:flex mt-2">
                                    <Link href="/sign-up">
                                        <Button variant="flat">Login</Button>
                                    </Link>
                                </div>
                            </div>
                        </SignedOut>
                    </Nav>
                </Offcanvas.Body>
            </Offcanvas>
        </Navbar>
    );
}
export default AppNavbar;
