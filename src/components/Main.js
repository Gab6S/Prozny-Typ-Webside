import React from "react";
import { Switch, Route, HashRouter as Router } from "react-router-dom";
import { Navigation } from "./Navigation";
import "../scss/_main-desktop.scss";
import { Footer } from "./Footer";
import { News } from "./News";
import { ArtistName } from "./ArtistName";
import { MediaIconsBar } from "./MediaIconsBar";
import { Concerts } from "./Concerts";
import { Music } from "./Music";
import { Video } from "./Video";
import { Press } from "./Press";
import { AboutMe } from "./AboutMe";
import { Contact } from "./Contact";

export const Main = () => {
  return (
    <div class="full-screen-bg">
      <Router>
        <Navigation />

        <Switch>
          <Route exact path="/">
            <ArtistName />
            <MediaIconsBar />
          </Route>
          <Route path="/nowości" component={News}></Route>
          <Route path="/koncerty" component={Concerts}></Route>
          <Route path="/muzyka" component={Music}></Route>
          <Route path="/wideo" component={Video}></Route>
          <Route path="/dlaprasy" component={Press}></Route>
          <Route path="/omnie" component={AboutMe}></Route>
          <Route path="/kontakt" component={Contact}></Route>
        </Switch>
        {/* <Footer /> */}
      </Router>
    </div>
  );
};
