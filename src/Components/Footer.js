import Button from "@mui/material/Button";
import React from "react";
import { useNavigate } from "react-router-dom";
import { Stack, Typography } from "@mui/material";
import styled from "styled-components";

const FooterBlock = styled.div`
    display: flex;
    height: 60px;
    background-color: rgb(60, 60, 60);

    flex-direction: column;
    position: relative;
    align-items: center;
    /* border: 2px solid green; */
    justify-content: center;
    /* flex-direction: row; */
`;

function Footer() {
    const navigate = useNavigate();

    return (
        <FooterBlock>
            <Typography
                sx={{
                    fontSize: "20px",
                    color: "rgb(120,120,120)",
                    textAlign: "center",
                    "@media(max-width: 650px)": {
                        fontSize: "18px",
                    },
                }}
            >
                The Ukulele Academy 2022 - all rights reserved
            </Typography>
        </FooterBlock>
    );
}

export default Footer;
