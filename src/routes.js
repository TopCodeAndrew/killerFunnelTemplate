import React from "react";
import { Routes, Route } from "react-router-dom";
import Landing from "./Pages/Landing";
import Offer from "./Pages/Offer";
import ThankYou from "./Pages/ThankYou";

export default (
    <Routes>
        <Route exact path="/" element={<Landing />} />
        <Route exact path="/offer" element={<Offer />} />
        <Route exact path="/thank-you" element={<ThankYou />} />
        <Route path="/"> Error: This page does not exist</Route>
    </Routes>
);
