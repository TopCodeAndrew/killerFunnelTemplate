import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import Button from "@mui/material/Button";

import axios from "axios";

function Offer(props) {
    const navigate = useNavigate();


    return <div>This is Offer.js
    <Button onClick={() => navigate("/")}>landing</Button>
    <Button onClick={() => navigate("/thank-you")}>thank you</Button></div>;
}

export default Offer;
