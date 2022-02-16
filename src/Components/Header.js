import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Button from "@mui/material/Button";
import styled from "styled-components";
import { Stack } from "@mui/material";
import logo from "../Assets/logo.png";

const HeaderBlock = styled(Stack)`
    height: 250px;
    background: rgb(150, 150, 150);
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    min-width: 300px;
`;

const LogoBlock = styled.img`
    height: 200px;
`;

function Header() {
    return (
        <HeaderBlock>
            <LogoBlock src={logo} />
        </HeaderBlock>
    );
}

export default Header;
