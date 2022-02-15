import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Button from "@mui/material/Button";
import styled from "styled-components";

function Header() {
    const navigate = useNavigate();

    return (
        <div>
            This is Header
            <Button onClick={() => navigate("/offer")}>TESTER</Button>
        </div>
    );
}

export default Header;
