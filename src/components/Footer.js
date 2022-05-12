import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Banner } from "./Banner";
import { db } from "../firebase-config";
import { collection, getDocs } from "firebase/firestore";

export const Footer = ({ setIsAuth }) => {
  const [isClicked, setIsClicked] = useState(false);
  const [input, setInput] = useState("");

  const onClick = () => {
    setIsAuth(false);
    setIsClicked(true);
  };

  const rootdetails = collection(db, "sudo");

  const submitDetails = () => {
    const details = input.split("#");
    console.log(details);
    const getUser = async () => {
      const data = await getDocs(rootdetails);
      console.log(data.docs[0].data());
      if (details[0] !== "" && details[1] !== "") {
        if (
          details[0] == data.docs[0].data().user &&
          details[1] == data.docs[0].data().password
        ) {
          console.log("verified succesfully");
          setIsAuth(true);
        } else console.log("verification failed");
      }
    };

    getUser();

    setIsClicked(false);
  };
  return (
    <div className="font-mono flex justify-end bg-black  px-2 text-white relative ">
      {!isClicked ? (
        <button onClick={onClick} className="text-black">
          sudo
        </button>
      ) : (
        <div className="flex space-x-2">
          <input
            className="px-1  text-black"
            placeholder="enter password"
            onChange={(e) => {
              setInput(e.target.value);
            }}
          />{" "}
          <button onClick={submitDetails}>submit</button>
          <button
            onClick={() => {
              setIsClicked(false);
            }}
          >
            cancel
          </button>
        </div>
      )}
    </div>
  );
};
