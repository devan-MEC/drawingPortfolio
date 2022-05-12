import React from "react";
import { Banner } from "../components/Banner";
import { DisplayCard } from "../components/DisplayCard";
import tom from "../img/majortom.png";
import littetalks from "../img/littletalks.png";
import { Footer } from "../components/Footer";

export const Home = ({ isAuth, setIsAuth }) => {
  return (
    <>
      <Banner isAuth={isAuth} />
      <div className="flex flex-col justify-center items-center font-ubuntu mt-4 ">
        <div className="max-w-7xl">
          {/* <div className="font-ubuntu flex flex-row flex-wrap justify-center items-center -m-4 pb-12  "> */}
          <div className="font-ubuntu lg:grid lg:grid-cols-3  flex flex-col justify-center items-center">
            <DisplayCard picture={tom} tag="Space Oddity" />
            <DisplayCard picture={littetalks} tag="Little Talks" />
            <DisplayCard picture={tom} tag="Space Oddity" />
            <DisplayCard picture={tom} tag="Space Oddity" />
            <DisplayCard picture={tom} tag="Space Oddity" />
            <DisplayCard picture={tom} tag="Space Oddity" />
          </div>
        </div>
      </div>
      <Footer setIsAuth={setIsAuth} />
    </>
  );
};
