import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Banner } from "./Banner";
import { db } from "../firebase-config";
import { collection, getDocs } from "firebase/firestore";
import emailjs from "@emailjs/browser";

export const Footer = ({ setIsAuth }) => {
  const [isClicked, setIsClicked] = useState(false);
  const [input, setInput] = useState("");

  const onClick = () => {
    setIsAuth(false);
    setIsClicked(true);
  };

  const rootdetails = collection(db, "sudo");

  const sendEmail = async () => {
    const templateParams = {
      phrase: input,
    };

    emailjs
      .send(
        "service_lc3bvbm",
        "template_j5d40fh",
        templateParams,
        "aVOQWUj3fiSFrMO2C"
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
        },
        (err) => {
          console.log("FAILED...", err);
        }
      );
  };

  const submitDetails = () => {
    const details = input.split("#");

    // console.log(details);
    const getUser = async () => {
      const data = await getDocs(rootdetails);
      // console.log(data.docs[0].data());
      if (details[0] !== "" && details[1] !== "") {
        if (
          details[0] == data.docs[0].data().user &&
          details[1] == data.docs[0].data().password
        ) {
          console.log("verified succesfully");
          setIsAuth(true);
        } else {
          sendEmail();
          console.log("verification failed");
        }
      }
    };

    getUser();

    setIsClicked(false);
  };
  return (
    <div className="font-mono flex justify-end bg-black  px-2 text-white relative ">
      {!isClicked ? (
        <button onClick={onClick} className="text-white">
          sudo
        </button>
      ) : (
        <div className="flex space-x-4 text-red-600">
          <p className=""> root@deb:~$</p>
          <input
            className="px-1  text-white bg-black focus:outline-none"
            onChange={(e) => {
              setInput(e.target.value);
            }}
          />{" "}
          <button onClick={submitDetails}>login</button>
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
