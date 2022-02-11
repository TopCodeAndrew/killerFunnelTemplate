import React from "react";
import { Switch, Route } from "react-router-dom";
import Landing from "./Components/Landing";
import Offer from "./Components/Offer";
import ThankYou from "./Components/ThankYou";

export default (
    <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/offer" component={Offer} />
        <Route exact path="/thank-you" component={ThankYou} />
        <Route path="/"> Error: This page does not exist</Route>
    </Switch>
);
