import React from "react";
import Slider from "react-slick";
import "./hybrid.css";
import vdo4 from "../../assets/videos/vdo4.mp4";
import vdo3 from "../../assets/videos/vdo3.mp4";
import vdo5 from "../../assets/videos/vdo5.mp4";
import vdo6 from "../../assets/videos/vdo6.mp4";
import vdo7 from "../../assets/videos/vdo7.mp4";
const Hybrid = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };
  return (
    <div className="work">
      <div className="even">
        <h1> HYBRID EVENTS </h1>
        <Slider {...settings}>
          <div>
            <video width="350" height="200" controls>
              <source src={vdo4} type="video/mp4" />
            </video>
            <div>
              <p>
                Bengaluru Workshop
                <br />
              </p>
              <h3>
                Nov 11 2022,four Seasons,Nectar Banquet, <br />
                Bengaluru, India
              </h3>
              <h4>
                Leadership talk by Dr.kshama Bhatia (co-Founder & <br />
                CFO).Design Thinking talk by Prashant Rao
              </h4>
            </div>
            <div className="outer">
              <a href="#">View Events </a>
            </div>
          </div>
          <div>
            <video width="350" height="200" controls>
              <source src={vdo3} type="video/mp4" />
            </video>
            <div>
              <p>
                Bengaluru Workshop
                <br />
              </p>
              <h3>
                Nov 11 2022,four Seasons,Nectar Banquet, <br />
                Bengaluru, India
              </h3>
              <h4>
                Leadership talk by Dr.kshama Bhatia (co-Founder & <br />
                CFO).Design Thinking talk by Prashant Rao
              </h4>
            </div>
            <div className="outer">
              <a href="#">View Events </a>
            </div>
          </div>
          <div>
            <video width="350" height="200" controls>
              <source src={vdo5} type="video/mp4" />
            </video>
            <div>
              <p>
                Bengaluru Workshop
                <br />
              </p>
              <h3>
                Nov 11 2022,four Seasons,Nectar Banquet, <br />
                Bengaluru, India
              </h3>
              <h4>
                Leadership talk by Dr.kshama Bhatia (co-Founder & <br />
                CFO).Design Thinking talk by Prashant Rao
              </h4>
            </div>
            <div className="outer">
              <a href="#">View Events </a>
            </div>
          </div>
          <div>
            <video width="350" height="200" controls>
              <source src={vdo6} type="video/mp4" />
            </video>
            <div>
              <p>
                Bengaluru Workshop
                <br />
              </p>
              <h3>
                Nov 11 2022,four Seasons,Nectar Banquet, <br />
                Bengaluru, India
              </h3>
              <h4>
                Leadership talk by Dr.kshama Bhatia (co-Founder & <br />
                CFO).Design Thinking talk by Prashant Rao
              </h4>
            </div>
            <div className="outer">
              <a href="#">View Events </a>
            </div>
          </div>
          <div>
            <video width="350" height="200" controls>
              <source src={vdo7} type="video/mp4" />
            </video>
            <div>
              <p>
                Bengaluru Workshop
                <br />
              </p>
              <h3>
                Nov 11 2022,four Seasons,Nectar Banquet, <br />
                Bengaluru, India
              </h3>
              <h4>
                Leadership talk by Dr.kshama Bhatia (co-Founder & <br />
                CFO).Design Thinking talk by Prashant Rao
              </h4>
            </div>
            <div className="outer">
              <a href="#">View Events </a>
            </div>
          </div>
          <div>
            <video width="350" height="200" controls>
              <source src={vdo7} type="video/mp4" />
            </video>
            <div>
              <p>
                Bengaluru Workshop
                <br />
              </p>
              <h3>
                Nov 11 2022,four Seasons,Nectar Banquet, <br />
                Bengaluru, India
              </h3>
              <h4>
                Leadership talk by Dr.kshama Bhatia (co-Founder & <br />
                CFO).Design Thinking talk by Prashant Rao
              </h4>
            </div>
            <div className="outer">
              <a href="#">View Events </a>
            </div>
          </div>
          <div>
            <video width="350" height="200" controls>
              <source src={vdo5} type="video/mp4" />
            </video>
            <div>
              <p>
                Bengaluru Workshop
                <br />
              </p>
              <h3>
                Nov 11 2022,four Seasons,Nectar Banquet, <br />
                Bengaluru, India
              </h3>
              <h4>
                Leadership talk by Dr.kshama Bhatia (co-Founder & <br />
                CFO).Design Thinking talk by Prashant Rao
              </h4>
            </div>
            <div className="outer">
              <a href="#">View Events </a>
            </div>
          </div>
          <div>
            <video width="350" height="200" controls>
              <source src={vdo3} type="video/mp4" />
            </video>
            <div>
              <p>
                Bengaluru Workshop
                <br />
              </p>
              <h3>
                Nov 11 2022,four Seasons,Nectar Banquet, <br />
                Bengaluru, India
              </h3>
              <h4>
                Leadership talk by Dr.kshama Bhatia (co-Founder & <br />
                CFO).Design Thinking talk by Prashant Rao
              </h4>
            </div>
            <div className="outer">
              <a href="#">View Events </a>
            </div>
          </div>
          <div>
            <video width="350" height="200" controls>
              <source src={vdo4} type="video/mp4" />
            </video>
            <div>
              <p>
                Bengaluru Workshop
                <br />
              </p>
              <h3>
                Nov 11 2022,four Seasons,Nectar Banquet, <br />
                Bengaluru, India
              </h3>
              <h4>
                Leadership talk by Dr.kshama Bhatia (co-Founder & <br />
                CFO).Design Thinking talk by Prashant Rao
              </h4>
            </div>
            <div className="outer">
              <a href="#">View Events </a>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
};
export default Hybrid;
