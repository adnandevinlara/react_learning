import React from "react";
// import { BrowserRouter as Router, Routes, Link } from "react-router-dom";

import { BrowserRouter, Link, Route, Switch } from "react-router-dom";

function pageLinks() {
  return (
    <BrowserRouter>
      <Link to="/home">Home</Link>
      <Link to="/about">About</Link>
      <Switch>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
      </Switch>
    </BrowserRouter>

    // <BrowserRouter>
    //   <Routes>
    //     <Route path="/home" element={<Home />}>
    //       Home
    //     </Route>
    //     <Route path="/about" element={<About />}>
    //       About
    //     </Route>
    //   </Routes>
    // </BrowserRouter>
  );
}

function Home() {
  return (
    <div>
      <h2>Home Page</h2>
    </div>
  );
}

function About() {
  return (
    <div>
      <h2>About Page</h2>
    </div>
  );
}
export default pageLinks;
