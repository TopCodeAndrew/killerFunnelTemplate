import React from "react";
import { Switch, Routes, Route } from "react-router-dom";
import Landing from "./Components/Landing";
import Offer from "./Components/Offer";
import ThankYou from "./Components/ThankYou";

export default (
    <Routes>
        <Route exact path="/" element={<Landing/>} />
        <Route exact path="/offer" element={<Offer/>} />
        <Route exact path="/thank-you" element={<ThankYou/>} />
        <Route path="/"> Error: This page does not exist</Route>
    </Routes>
);
