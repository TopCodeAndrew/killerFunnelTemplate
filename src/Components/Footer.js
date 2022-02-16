import Button from "@mui/material/Button";
import React from "react";
import { useNavigate } from "react-router-dom";

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
