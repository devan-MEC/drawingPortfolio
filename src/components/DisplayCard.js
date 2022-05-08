import React from "react";

export const DisplayCard = (props) => {
  const { picture, tag } = props;
  return (
    <div className="bg-gray-200 flex-flex-col">
      <img
        className="w-1/6 border-2 hover:scale-125 transition ease-in-out delay-150 rounded-lg"
        src={picture}
      />
    </div>
  );
};
