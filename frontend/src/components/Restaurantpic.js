import React from "react";
import "./Restaurantpic.css";

const Restaurantpic = ({ key, imgKey, name, desc, from, to }) => {
  return (
    <div className="cardres">
      <div>
        {imgKey && (
          <img
            style={{
              alignSelf: "center",
              height: "200px", // Adjust the height to your desired banner height
              width: "100%",
              borderWidth: 1,
              marginBottom: 50,
              objectFit: "cover", // Ensures the image covers the entire container
              borderRadius: "4px", // Adds rounded corners to the image
              boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.2)" // Adds a subtle shadow effect
            }}
            src={`/imageRestaurant/api/images/${imgKey}`}
            className="showProfile_img"
          />
        )}
      </div>
      <div className="name">
        <h1 style={{ fontFamily: "UberMove, sans-serif" }}>{name}</h1>
      </div>
      <div className="desc">
        <p>{desc}</p>
        <br></br>
        <p>
          Timings: {from} : {to}{" "}
        </p>
      </div>
      <div className="name">
        <h2>Dishes picked for you</h2>
      </div>
    </div>
  );
};

export default Restaurantpic;
