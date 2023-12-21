import React from "react";
import "./cont.css"; // Import your CSS file for styling

export const Contact = () => {
  return (
    <div className="container">
      <div className="image-container">
        <img
          src="https://i0.wp.com/post.healthline.com/wp-content/uploads/2021/08/Paulas-Choice-Liquid-Exfoliant.png?w=525"
          alt="Beauty Tips"
        />
      </div>
      <div className="text-container">
        <h1>Beauty Tips</h1>
        <br></br>
        <h4>
          Paula’s Choice has become a cult favorite among beauty and skin care
          enthusiasts, and customers say the brand’s BHA liquid exfoliant lives
          up to the hype.
          <br></br>
        </h4>
      </div>
      <div className="image-container1">
        <img
          src="https://i0.wp.com/post.healthline.com/wp-content/uploads/2021/08/Origins-Clear-Improvement.png?w=525"
          alt="Beauty Tips"
        />
      </div>
    </div>
  );
};
