import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Button from "@mui/material/Button";
import styled from "styled-components";

function Footer() {
    const navigate = useNavigate();

    return (
        <div>
            This is Footer
            <Button onClick={() => navigate("/offer")}>TESTER</Button>
        </div>
    );
}

export default Footer;
