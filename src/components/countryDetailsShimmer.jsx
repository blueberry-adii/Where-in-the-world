import React from "react";
import "./shimmer.css";

export default function CountryDetailsShimmer() {
  document.body.style.overflowY = "hidden";

  return (
    <div className="country-details shimmer-details">
      <div className="shimmer-disp"></div>
      <div className="details-text-container shimmer-text shimmer-container">
        <h1></h1>
        <div className="t3">
          <div className="details-text t1 shimmer-text">
            <p></p>
            <p></p>
            <p></p>
            <p></p>
            <p></p>
          </div>
          <div className="details-text t2 shimmer-text">
            <p></p>
            <p></p>
            <p></p>
          </div>
        </div>
        <div className="border-countries shimmer-text">
          <p></p>
        </div>
      </div>
    </div>
  );
}
