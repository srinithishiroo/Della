import React from "react";
import "./header.css";
import video1 from "../assets/videos/video1.mp4";

const Hero = () => {
  return (
    <div className="allbox">
      <div className="bld">
        THE WORLD'S 1 <sup>ST</sup>
        <br></br> BUSINESS PLATFORM
      </div>
      <p>
        Founder Jimmy Mistry innovated<br></br> <b>Della Leaders Club </b>- a
        community of{" "}
        <b>
          Entrepreneurs,<br></br>Professionals, & Young Leaders
        </b>
        created to build priceless<br></br> relationships with top Leaders in
        any industry, any type of <br></br>business, anywhere in the world.
      </p>
      <p>
        Membership to the world’s most influential community of <br></br>
        <b>2500+ Domain Experts</b> from <b>56 countries</b>
      </p>
      <div className="apply">
        <button>APPLY FOR MEMBERSHIP</button>
      </div>
      <div className="box">
        <div className="box_over"></div>
      </div>
      <div className="videoo">
        <video controls autoPlay loop id="myvideo">
          <source src={video1} type="video/mp4" />
        </video>
      </div>
    </div>
  );
};
export default Hero;
