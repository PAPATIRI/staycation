import React from "react";
import Button from "../elements/Button";
import ImageHero from "../assets/images/images/img-header.jpg";
import ImageFrame from "../assets/images/images/img-header-frame.png";
import IcCities from "../assets/images/icons/ic_cities.png";
import IcTraveller from "../assets/images/icons/ic_traveller.png";
import IcTreasure from "../assets/images/icons/ic_treasure.png";
import numberFormat from "../utiils/formatNumber";

export default function Hero(props) {
  function showMostPicked() {
    window.scrollTo({
      top: props.refMostPicked.current.offsetTop - 30,
      behavior: "smooth",
    });
  }

  return (
    <section className="container justify-content-center align-items-center">
      <div className="row align-items-center ">
        <div className="col-6">
          <div>
            <h1 className="font-weight-bold mb-3">
              forget the work,
              <br /> start your next vacation
            </h1>
            <p>
              We provide what you need for your holiday. <br /> Time to make an
              unforgetable moment. Your money can be returned,
              <br />
              your time is not.
            </p>
            <Button
              style={{ color: "#fff", marginTop: 15 }}
              className="btn px-5"
              hasShadow
              isAccent
              onClick={showMostPicked}
            >
              Show Me Now
            </Button>
          </div>
          <div className="row mt-5">
            <div className="col-auto mr-2">
              <img
                className="mb-1"
                width="36"
                src={IcTraveller}
                alt={`${props.data.travelers} travellers`}
              />
              <h6 className="mt-6">
                {numberFormat(props.data.travelers)}{" "}
                <span className="text-gray-500 font-weight-light">
                  travellers
                </span>
              </h6>
            </div>
            <div className="col-auto mr-2">
              <img
                className="mb-1"
                width="36"
                src={IcTreasure}
                alt={`${props.data.treasures} travellers`}
              />
              <h6 className="mt-6">
                {numberFormat(props.data.treasures)}{" "}
                <span className="text-gray-500 font-weight-light">
                  treasures
                </span>
              </h6>
            </div>
            <div className="col-auto">
              <img
                className="mb-1"
                width="36"
                src={IcCities}
                alt={`${props.data.cities} cities`}
              />
              <h6 className="mt-6">
                {numberFormat(props.data.cities)}{" "}
                <span className="text-gray-500 font-weight-light">cities</span>
              </h6>
            </div>
          </div>
        </div>

        {/* image hero section */}
        <div className="col-6">
          <div
            className="image-hero d-flex align-items-center justify-content-center"
            style={{ height: 600 }}
          >
            <img
              width={488}
              src={ImageHero}
              alt="room-pict"
              className="img-fluid position-absolute"
              style={{ zIndex: 1 }}
            />
            <img
              width={470}
              src={ImageFrame}
              alt="room-pict"
              className="img-fluid"
              style={{ margin: "80px 0 0 60px" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
