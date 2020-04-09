import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="content">
      <Link to="/Export">
        <button className="home-button">Create a new CV</button>
      </Link>
    </div>
  );
}
