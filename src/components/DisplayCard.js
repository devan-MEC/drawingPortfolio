import React from "react";

export const DisplayCard = (props) => {
  const { picture, tag } = props;
  return (
    <div className="relative  m-3    border-2">
      <div className="w-full h-full object-cover transition ease-in-out delay-150 hover:bg-blue-600 block">
        <img className="block object-cover" src={picture} alt={tag} />
      </div>

      {/* <div>
        <p className="">{tag}</p>
      </div> */}
    </div>
  );
};
