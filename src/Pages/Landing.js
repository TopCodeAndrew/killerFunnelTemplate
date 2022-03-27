import React, { useState } from "react";
import axios from "axios";
import validator from "validator";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import triangleBackground from "../Assets/triangle-background.jpg";
import happyUkePlayer from "../Assets/happy-uke-player.jpg";
import testimonial1 from "../Assets/Testimonials/Testimonial-1.png";
import testimonial2 from "../Assets/Testimonials/Testimonial-2.png";
import testimonial3 from "../Assets/Testimonials/Testimonial-3.png";
import testimonial4 from "../Assets/Testimonials/Testimonial-4.png";
import testimonial5 from "../Assets/Testimonials/Testimonial-5.png";
import andrewProfilePic from "../Assets/LifeSmart-Profile-Pic.jpg";
import styled from "styled-components";
import { Stack, Typography, TextField, Button } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";

let midSize = "1100px";
let tabletSize = "800px";
let cellSize = "650px";

const LandingBlock = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    align-items: center;
    background: linear-gradient(
            rgba(255, 255, 255, 0.7),
            rgba(255, 255, 255, 0.7)
        ),
        url(${triangleBackground}) no-repeat center center fixed;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;

    /* border: 2px solid green; */
    justify-content: flex-start;
    /* flex-direction: row; */
`;

const TopSection = styled.div`
    display: flex;
    position: relative;
    align-items: flex-start;
    justify-content: space-between;
    flex-direction: row;
    max-width: 1150px;
    /* border: 2px solid red; */
    @media (max-width: 1200px) {
        padding-right: 5%;
    }
    @media (max-width: ${midSize}) {
        padding-right: 0;
        flex-direction: column;
        align-items: center;
    }
`;

const MidSection = styled.div`
    box-sizing: border-box;
    width: 100%;
    /* height: 400px; */
    background: white;
    display: flex;
    flex-direction: row;
    position: relative;
    align-items: flex-start;
    justify-content: center;
    gap: 55px;
    border-top: 3px solid #2b416d;
    /* max-width: 1150px; */
    /* border: 2px solid red; */
    @media (max-width: ${midSize}) {
        padding-right: 0;
        flex-direction: column;
        align-items: center;
        gap: 0px;
    }
`;

const MidMessageStack = styled(Stack)`
    height: 230px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0px;

    @media (max-width: ${midSize}) {
        height: 200px;
    }
`;

const BottomSection = styled.div`
    width: 100%;
    /* height: 200px; */
    border-top: 4px solid rgb(120, 129, 120);
    display: flex;
    flex-direction: row;
    position: relative;
    align-items: flex-start;
    justify-content: center;
    background: green;
`;

const InnerBottomSection = styled.div`
    /* height: 200px; */
    width: 100%;
    display: flex;
    flex-direction: row;
    position: relative;
    align-items: flex-start;
    justify-content: space-between;
    background: grey;
    max-width: 1150px;
`;

const BottomBox = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 200px;
    width: 47%;
    background-color: blue;
`;

let MidSubSection = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    width: 40%;
    max-width: 1150px;

    /* height: 100%; */
    /* border: 2px solid pink; */
    @media (max-width: ${midSize}) {
        width: 80%;
    }
    @media (max-width: ${cellSize}) {
        width: 95%;
    }
`;

const TextStack = styled(Stack)`
    width: 50%;
    margin: 40px 5%;
    align-items: center;
    /* border: 1px solid blue; */
    @media (max-width: ${midSize}) {
        width: 75%;
    }
    @media (max-width: ${tabletSize}) {
        width: 95%;
    }
`;

const EmailButton = styled(Button)`
    background-color: #f1a569;
`;

const InputField = styled(TextField)`
    width: 70%;
    box-sizing: border-box;
    color: black;
    background-color: #fff;
`;

const DisplayPic = styled.img`
    width: 100%;
    height: 400px;
    /* height: 200px; */
    text-align: center;
    object-fit: cover;
    float: right;
    object-position: right;
    box-shadow: -3px 3px 16px -6px;
    border-radius: 10px;
`;

const EmailStack = styled(Stack)`
    /* border: 3px solid #2b416d; */

    position: relative;
    width: 40%;
    opacity: 1;
    /* background-color: rgba(100, 100, 100, 70); */
    height: 430px;
    margin: 40px 0px 50px;
    align-items: center;
    justify-content: flex-start;
    /* border: 2px solid red; */
    border-radius: 10px;
    box-shadow: -3px 3px 16px -6px;
    overflow: hidden;
    @media (max-width: ${midSize}) {
        width: calc(100% - 30px);
        margin: 40px 0px 50px;
        box-shadow: 0px 0px 10px 1px;
    }
    @media (max-width: ${cellSize}) {
        width: calc(100% - 10px);
        box-shadow: 0px 0px 10px 1px;
    }
`;
const EmailStackBackground = styled(Stack)`
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: rgb(100, 100, 100);
    opacity: 0.85;
`;

const ContactPic = styled.img`
    width: 70%;
    /* height: 400px; */
    /* height: 200px; */
    text-align: center;
    object-fit: cover;
    float: right;
    object-position: right;
    box-shadow: -5px 5px 15px -2px;
    border-radius: 10px;
`;
const TestimonialPic = styled.img`
    width: 100%;
    margin-bottom: 20px;
    /* height: 400px; */
    /* height: 200px; */
    text-align: center;
    object-fit: cover;
    float: right;
    object-position: right;
    box-shadow: -2px 2px 10px -2px;
    border-radius: 10px;
`;

function Landing() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const navigate = useNavigate();

    const onSubmit = () => {
        if (validator.isEmail(email)) {
            axios
                .post("/api/email", { name, email })
                .then((res) => {
                    Swal.fire({
                        icon: "success",
                        title: "Hooray!",
                        text:
                            "Your ebook is on the way! Sometimes these things take 5-10 minutes, so please be patient :)",
                        confirmButtonColor: "#2b416d",
                    })
                    .then((res) => navigate('/offer'))
                })
                .catch((err) => console.log(err));
        } else {
            Swal.fire({
                icon: "error",
                title: "Oops!",
                text: "That doesn't look like a valid email. Please try again!",
                confirmButtonColor: "#2b416d",
            });
        }
    };

    return (
        <LandingBlock>
            <TopSection>
                <TextStack>
                    <Typography
                        variant="h1"
                        sx={{
                            fontSize: "40px",
                            fontWeight: "bolder",
                            textAlign: "center",
                            "@media(max-width: 650px)": {
                                fontSize: "25px",
                            },
                        }}
                    >
                        Welcome to Landing
                    </Typography>
                    <Typography
                        variant="h2"
                        sx={{
                            fontSize: "25px",
                            textAlign: "center",
                            padding: "10px 0",
                            "@media(max-width: 650px)": {
                                fontSize: "18px",
                            },
                        }}
                    >
                        Check below for details and reserve your spot today!
                    </Typography>
                    <DisplayPic src={happyUkePlayer} />
                    <Typography
                        variant="h3"
                        sx={{
                            fontSize: "20px",
                            marginTop: "20px",
                            textAlign: "left",
                            "@media(max-width: 650px)": {
                                fontSize: "18px",
                            },
                        }}
                    >
                        Supplemental lorem ipsum stuff goes right in here: A
                        premier salon in Baton Rouge, Nicole Millet Salon has a
                        passion for great products and beautiful, healthy hair.{" "}
                        <br></br>
                        <br></br>
                        We're confident if we get you in the door, you'll fall
                        in love with us and come back forever...but we all need
                        <br></br>
                        <br></br>a little nudge sometimes. That's why we're
                        giving you a free $25 gift card for your first service
                        just to check us out. ...and that's not it. Request your
                        free gift
                        <br></br>
                        <br></br>
                        today and get access to a special deal we don't
                        <br></br>
                        <br></br>
                        advertise anywhere else, just for you.
                    </Typography>
                </TextStack>
                <EmailStack>
                    <EmailStackBackground />
                    <Typography
                        sx={{
                            zIndex: 5,
                            boxSizing: "border-box",
                            color: "black",
                            fontColor: "black",
                            textAlign: "center",
                            opacity: 1,
                            marginTop: "15px",
                        }}
                        variant="h3"
                    >
                        Want your FREE eBook?
                    </Typography>
                    <Typography
                        sx={{
                            zIndex: 5,
                        }}
                    >
                        Typography
                    </Typography>
                    <TextField
                        sx={{
                            width: "70%",
                            boxSizing: "border-box",
                            backgroundColor: "#fff",
                            margin: "10px 0px",
                            borderRadius: "4px",
                            borderBottom: "7px solid white",
                        }}
                        id="filled-basic"
                        label="Name"
                        variant="filled"
                        onChange={(e) => setName(e.target.value)}
                    />
                    <TextField
                        sx={{
                            width: "70%",
                            boxSizing: "border-box",
                            backgroundColor: "#fff",
                            margin: "10px 0px",
                            borderRadius: "4px",
                            borderBottom: "7px solid white",
                        }}
                        id="filled-basic"
                        label="Email"
                        variant="filled"
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <EmailButton
                        variant="contained"
                        sx={{
                            backgroundColor: "#2B416D",
                            color: "white",
                            marginBottom: "5px",
                            marginTop: "20px",
                        }}
                        onClick={onSubmit}
                    >
                        Send My eBook!
                    </EmailButton>
                    <Typography
                        sx={{
                            color: "white",
                            zIndex: 1,
                        }}
                        variant="caption"
                    >
                        *Valid to new guests only
                    </Typography>
                </EmailStack>
            </TopSection>
            <MidSection>
                <MidSubSection>
                    <MidMessageStack>
                        <Typography
                            variant="h2"
                            sx={{ textAlign: "center", margin: "40px 0px" }}
                        >
                            Message from the Instructor
                        </Typography>
                    </MidMessageStack>
                    <ContactPic src={andrewProfilePic} />
                    <Typography
                        variant="h3"
                        sx={{
                            fontSize: "22px",
                            textAlign: "center",
                            margin: "20px 0 0px 0px",

                            fontStyle: "italic",
                            "@media(max-width: 650px)": {
                                fontSize: "18px",
                            },
                        }}
                    >
                        "I created this course because I believe ANYONE can play
                        music well. Now, it has helped thousands of people
                        worldwide. I would be honored to help you take your
                        first (or next) steps in your musical journey with this
                        instrument. Let's start making music!"
                        <br /> Andrew J. Smith,
                        <br /> Lead Instructor
                    </Typography>
                </MidSubSection>
                <MidSubSection>
                    <MidMessageStack>
                        <Typography
                            variant="h2"
                            sx={{
                                textAlign: "center",
                                margin: "40px 0px 30px",
                            }}
                        >
                            Testimonials
                        </Typography>
                        <Typography
                            sx={{
                                fontSize: "25px",
                                textAlign: "center",
                            }}
                            variant="p"
                        >
                            Thousands of happy students agree!
                        </Typography>
                    </MidMessageStack>
                    <TestimonialPic src={testimonial1} />
                    <TestimonialPic src={testimonial2} />
                    <TestimonialPic src={testimonial3} />
                    <TestimonialPic src={testimonial4} />
                    <TestimonialPic src={testimonial5} />
                </MidSubSection>
            </MidSection>
        </LandingBlock>
    );
}

export default Landing;
