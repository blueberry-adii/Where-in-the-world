import React from "react";
import "./shimmer.css";

export default function AllCardsShimmer() {
  const mapped = Array.from({ length: 24 }).map((_, i) => {
    return (
      <div key={i} className="shimmer-card">
        <div className="shimmer-img"></div>
        <div className="card-text shimmer-text">
          <h3></h3>
          <p></p>
          <p></p>
          <p></p>
        </div>
      </div>
    );
  });
  document.body.style.overflowY = "hidden";
  return (
    <>
      <div className="countries-container shimmer-allcards">{mapped}</div>
    </>
  );
}
