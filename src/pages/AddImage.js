import React, { useEffect, useState } from "react";
import { Banner } from "../components/Banner";
import { useNavigate } from "react-router-dom";
import { db, storage } from "../firebase-config";
import { addDoc, collection } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { v4 } from "uuid";

export const AddImage = ({ isAuth }) => {
  let navigate = useNavigate();
  const [imageUpload, setImageUpload] = useState(null);
  const [imageurl, setImageurl] = useState("");
  const [name, setName] = useState("");
  const [artist, setArtist] = useState("");

  const imageref = collection(db, "images");

  useEffect(() => {
    if (!isAuth) {
      navigate("/");
    }
  });

  // const addImage = async () => {
  //   if (imageUpload == null) return;
  //   console.log(imageUpload);
  //   const imageRef = ref(storage, `images/${imageUpload.name + v4()}`);
  //   uploadBytes(imageRef, imageUpload);
  //   await addDoc(imageref, {
  //     name,
  //     artist,
  //   });
  // };
  const finaluploadfunc = async (iurl, iname) => {
    await addDoc(imageref, {
      imageurl: iurl,
      imagename: iname,
      name,
      artist,
    });
  };

  const uploadImage = async () => {
    if (imageUpload == null) return;
    // console.log(imageUpload);
    const imgname = `images/${imageUpload.name + v4()}`;
    const imageRef = ref(storage, imgname);
    uploadBytes(imageRef, imageUpload).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {
        console.log(`url before calling setState is ${url}`);
        setImageurl(url);
        finaluploadfunc(url, imgname);
        console.log(`url after calling setState is ${url}`);
      });
      alert("image uploaded");
    });
  };

  return (
    <div className="font-mono ">
      <Banner isAuth={isAuth} />
      <div className="flex h-screen">
        <div className="m-auto">
          <div className="flex flex-col justify-center bg-gray-200 p-4 rounded-md shadow-md space-y-2">
            <input
              type="file"
              onChange={(event) => {
                setImageUpload(event.target.files[0]);
              }}
            />
            <input
              className="border-2 p-1 rounded-md"
              placeholder="Name"
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
            <input
              className="border-2 p-1 rounded-md"
              placeholder="Artist"
              onChange={(e) => {
                setArtist(e.target.value);
              }}
            />
            <button
              className="bg-black p-2 text-white  rounded-md"
              onClick={uploadImage}
            >
              Upload
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
