import Button from "@mui/material/Button";
import React from "react";
import { useNavigate } from "react-router-dom";
import triangleBackground from "../Assets/triangle-background.jpg";
import styled from "styled-components";
import { Stack, Typography } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";

const LandingBlock = styled.div`
    display: flex;
    position: relative;
    align-items: flex-start;
    justify-content: center;
    flex-direction: row;
`;

const InnerBlock = styled.div`
    display: flex;
    position: relative;
    align-items: flex-start;
    justify-content: flex-start;
    flex-direction: row;
    max-width: 1150px;
`;

const FloatingBackground = styled.img`
    /* height: 200px; */
    position: absolute;
    z-index: -1;
    margin-right: 80px;
    text-align: center;
    width: 1000px;
    /* max-height: 100%; */
    opacity: 0.5;
`;

const TextStack = styled(Stack)`
    width: 50%;
    padding: 40px 20px;
    align-items: center;
`;

const DisplayPic = styled.img`
    width: 400px;
    /* height: 200px; */
    text-align: center;
`;

const PaymentStack = styled(Stack)`
    position: relative;
    width: 40%;
    /* background: green; */
    opacity: 0.6;
    height: 600px;
    padding: 110px 20px 50px;
    align-items: center;
    justify-content: flex-start;
`;

function Landing() {
    const navigate = useNavigate();

    return (
        <LandingBlock>
            <InnerBlock>
                <FloatingBackground src={triangleBackground} />
                <TextStack>
                    <Typography
                        variant="h1"
                        sx={{
                            fontSize: "40px",
                            fontWeight: "bolder",
                            textAlign: "center",
                        }}
                    >
                        Get our exclusive new client deal to save 60% off your
                        first visit!
                    </Typography>
                    <Typography
                        variant="h2"
                        sx={{
                            fontSize: "25px",
                            fontWeight: "bolder",
                            textAlign: "center",
                            padding: "10px 0",
                        }}
                    >
                        Check below for details and reserve your spot today!
                    </Typography>
                    <DisplayPic src={triangleBackground} />
                    <Typography
                        variant="h3"
                        sx={{
                            fontSize: "25px",
                            fontWeight: "bolder",
                            textAlign: "center",
                            padding: "10px 0",
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
                            }}
                        >
                            Benefit number 3 is a real thing!
                        </Typography>
                    </Stack>
                </TextStack>
                <PaymentStack>
                    <div
                        style={{
                            height: "600px",
                            width: "100%",
                            background: "blue",
                            display: "flex",
                            justifyContent: "center",
                        }}
                    >
                        <Typography variant="h3">PAYMENT HERE</Typography>
                    </div>
                </PaymentStack>
            </InnerBlock>
        </LandingBlock>
    );
}

export default Landing;
