import React from "react";

export const DisplayCard2 = (props) => {
  const { picture, tag } = props;
  return (
    <div className="maincontainer m-3  relative ">
      <div className="thecard bg-yellow-300">
        <div className="thefront absolute h-full w-full transition ease-in-out  delay-150 hover:opacity-10">
          <img className=" border-2" src={picture} />
        </div>
        <div className="theback absolute h-full w-full -z-10 flex flex-col justify-center items-center ">
          <p>{tag}</p>
        </div>
      </div>
    </div>
  );
};
