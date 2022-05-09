import React from "react";
import { Banner } from "../components/Banner";
import emailjs from "@emailjs/browser";
import { useState } from "react";

export const About = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  const { name, email, message } = formData;
  console.log(name, email, message);
  const handleChange = (e) => {};
  const sendEmail = (e) => {
    e.preventDefault();

    const templateParams = {
      name: name,
      notes: message,
    };

    emailjs
      .send(
        "service_lc3bvbm",
        "template_dxdcwxt",
        formData,
        "aVOQWUj3fiSFrMO2C"
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          alert("Message has been sent!");
        },
        (err) => {
          console.log("FAILED...", err);
        }
      );
  };
  return (
    <div className="bg-black h-screen ">
      <Banner />
      <div className="bg-black text-white flex flex-col justify-center items-center pt-8 font-mono top-1/2 ">
        <p className="font-bold text-xl">ABOUT ME</p>
        <p className="w-1/2 self-center">
          Heyy, I'm Devan and I like to draw pictures that have their themes
          centered around certain songs that I like listening to! The scribbles
          are nothing fancy but nonetheless, it's nice to be able to put stuff
          somewhere that isn't instagram :D
        </p>
        <p className="font-bold text-xl mt-2">CONTACT</p>
        <p className="w-1/2 self-center">
          Not sure why you'd want to, but if you want to shoot me a message for
          whatever reason, here's how you can reach me :
        </p>

        <div className="mt-4 w-1/2">
          <form onSubmit={sendEmail}>
            <div className="flex flex-col bg-white p-2 space-y-2 rounded-md text-black">
              <input
                type="text"
                name="name"
                value={name}
                className="border-2 p-2  rounded-md"
                placeholder="Name"
                onChange={onChange}
                required
              />
              <input
                name="email"
                type="email"
                value={email}
                className="border-2  p-2 rounded-md"
                placeholder="Email (Optional)"
                onChange={onChange}
              />
              <textarea
                name="message"
                type="text"
                value={message}
                className="border-2 p-2 rounded-md resize-none"
                placeholder="Enter your message"
                rows="10"
                onChange={onChange}
                required
              />
              <button
                type="submit"
                className="bg-black p-2 rounded-md text-white"
              >
                SEND
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
