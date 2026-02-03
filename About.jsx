import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h1>Home Page</h1>

      <h3>Navigation:</h3>

      <Link to="/about">Go to About Page</Link><br /><br />

      <Link to="/product/101">Go to Product 101</Link>
    </div>
  );
}

export default Home;
