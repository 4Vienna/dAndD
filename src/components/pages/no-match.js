import React from "react";
import { Link } from "react-router-dom";

export default function() {
  return (
    <div className="page">
      <h2>We couldn't find that page</h2>
      <Link className="link" to="/">Return to homepage</Link>
    </div>
  );
}