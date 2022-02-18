import Button from "@mui/material/Button";

import React from "react";
import { useNavigate } from "react-router-dom";
import triangleBackground from "../Assets/triangle-background.jpg";
import happyUkePlayer from "../Assets/happy-uke-player.jpg";
import styled from "styled-components";
import { Stack, Typography } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";

let midSize = "1000px";
let tabletSize = "800px";
let cellSize = "650px";

const LandingBlock = styled.div`
    display: flex;
    position: relative;
    align-items: flex-start;
    justify-content: center;
    flex-direction: row;
    margin-bottom: 500px;
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

const InnerStack = styled.div``;

const FloatingBackground = styled.img`
    /* height: 200px; */
    position: absolute;
    z-index: -1;
    margin-right: 80px;
    text-align: center;
    width: 1000px;
    height: 800px;
    /* max-height: 100%; */
    opacity: 0.5;
    @media (max-width: 1200px) {
        width: 1200px;
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

const DisplayPic = styled.img`
    width: 100%;
    height: 400px;
    /* height: 200px; */
    text-align: center;
    object-fit: contain;
`;

const PaymentStack = styled(Stack)`
    position: relative;
    width: 40%;
    background: green;
    opacity: 0.6;
    height: 750px;
    margin: 140px 0px 50px;
    align-items: center;
    justify-content: flex-start;
    /* border: 2px solid red; */
    border-radius: 10px;
    box-shadow: -5px 5px 10px 5px;
    @media (max-width: ${midSize}) {
        width: calc(100% - 30px);
        margin: 40px 0px 500px;
        box-shadow: 0px 0px 10px 1px;
    }
    @media (max-width: ${cellSize}) {
        width: calc(100% - 10px);
        margin: 40px 0px 500px;
        box-shadow: 0px 0px 10px 1px;
    }
`;

function Landing() {
    const navigate = useNavigate();

    return (
        <LandingBlock>
            <TopSection>
                <FloatingBackground src={triangleBackground} />
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
                        Get our exclusive new client deal to save 60% off your
                        first visit!
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
                            fontSize: "25px",
                            textAlign: "center",
                            padding: "20px 0",
                            "@media(max-width: 650px)": {
                                fontSize: "18px",
                            },
                        }}
                    >
                        Supplemental lorem ipsum stuff goes right in here:
                    </Typography>
                    <Stack direction="row">
                        <CheckIcon sx={{ color: "lime" }} />
                        <Typography
                            variant="h3"
                            sx={{
                                fontSize: "20px",
                                textAlign: "center",
                                margin: "0 0 15px 10px",
                                "@media(max-width: 650px)": {
                                    fontSize: "18px",
                                },
                            }}
                        >
                            Benefit number 1 is a real thing!
                        </Typography>
                    </Stack>
                    <Stack direction="row">
                        <CheckIcon sx={{ color: "lime" }} />
                        <Typography
                            variant="h3"
                            sx={{
                                fontSize: "20px",
                                textAlign: "center",
                                margin: "0 0 15px 10px",
                                "@media(max-width: 650px)": {
                                    fontSize: "18px",
                                },
                            }}
                        >
                            Benefit number 2 is a real thing!
                        </Typography>
                    </Stack>
                    <Stack direction="row">
                        <CheckIcon sx={{ color: "lime" }} />
                        <Typography
                            variant="h3"
                            sx={{
                                fontSize: "20px",
                                textAlign: "center",
                                margin: "0 0 15px 10px",
                                "@media(max-width: 650px)": {
                                    fontSize: "18px",
                                },
                            }}
                        >
                            Benefit number 3 is a real thing!
                        </Typography>
                    </Stack>
                    <Typography
                        variant="h3"
                        sx={{
                            fontSize: "20px",
                            textAlign: "center",
                            fontWeight: "bolder",
                            margin: "20px 0 15px 10px",
                            "@media(max-width: 1000px)": {
                                fontSize: "18px",
                                margin: "50px 0 15px 10px",
                            },
                            "@media(max-width: 650px)": {
                                fontSize: "18px",
                            },
                        }}
                    >
                        We're confident once you learn to play ukulele, you'll
                        go and share the joy with your friends and family!
                    </Typography>
                    <Typography
                        variant="h3"
                        sx={{
                            fontSize: "20px",
                            textAlign: "center",
                            fontWeight: "bolder",
                            margin: "20px 0 15px 10px",
                            "@media(max-width: 650px)": {
                                fontSize: "18px",
                            },
                        }}
                    >
                        That's why we are inviting you to try The Ukulele
                        Academy for a one time...
                    </Typography>
                    <Typography
                        variant="h3"
                        sx={{
                            fontSize: "40px",
                            fontStyle: "italic",
                            color: "red",
                            textShadow: "-1px 2px 3px grey",
                            textAlign: "center",
                            fontWeight: "bolder",
                            margin: "20px 0 15px 10px",
                            "@media(max-width: 650px)": {
                                fontSize: "35px",
                            },
                        }}
                    >
                        $47.99!
                    </Typography>
                    <Typography
                        variant="h3"
                        sx={{
                            fontSize: "20px",
                            textAlign: "center",
                            fontWeight: "bolder",
                            margin: "20px 0 15px 10px",
                            "@media(max-width: 650px)": {
                                fontSize: "18px",
                            },
                        }}
                    >
                        Simply fill out the secure order form on this page to
                        reserve your resource and you'll get an e-mail with your
                        item to use at your convenience!
                    </Typography>
                </TextStack>
                <PaymentStack>
                    <Typography variant="h3">PAYMENT HERE</Typography>
                </PaymentStack>
            </TopSection>
        </LandingBlock>
    );
}

export default Landing;
