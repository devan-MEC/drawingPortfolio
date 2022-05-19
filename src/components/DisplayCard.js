import { getDoc, doc, deleteDoc } from "firebase/firestore";
import React, { useState } from "react";
import { db, storage } from "../firebase-config";
import { deleteObject, ref } from "firebase/storage";
import emailjs from "@emailjs/browser";

export const DisplayCard = (props) => {
  const { picture, tag, isAuth, iid, imagename, randstate, setRandstate } =
    props;
  const [clicked, setClicked] = useState(false);
  //delete function
  const deleteItem = async (itemid) => {
    const itemDoc = doc(db, "images", itemid);
    const docSnap = await getDoc(itemDoc);

    // console.log("snapshot is", docSnap.data());
    const imgname = docSnap.data().imagename;
    // console.log("name of image to be deleted", imgname);

    await deleteDoc(itemDoc);
    const imgReference = ref(storage, imagename);

    deleteObject(imgReference)
      .then(() => {
        console.log("image deleted from firebase storage");
      })
      .catch((error) => {
        console.log(error);
      });
    setRandstate(randstate + 1);
  };
  //toggle func
  const toggle = () => {
    let negated = !clicked;
    setClicked(negated);
    console.log("image clicked and clicked is set to ", clicked);
  };
  return (
    <div className="relative  m-3  flex flex-col    overflow-hidden border-2">
      <div
        onClick={() => {
          toggle();
        }}
        className="w-full h-full object-cover   block  "
      >
        <div className={!clicked ? "" : "opacity-10"}>
          <img className=" block object-cover" src={picture} alt={tag} />
        </div>
        <div className="bg-black">
          <div className="absolute top-0 left-0  -z-10 bg-black w-full h-full text-white flex flex-col justify-center items-center">
            <div className="">
              <p>{tag}</p>
            </div>
          </div>
        </div>
      </div>
      {/* {console.log(isAuth)} */}
      {isAuth && (
        <button
          onClick={() => {
            deleteItem(iid);
          }}
          className="text-white bg-red-600 hover:bg-red-500 p-2"
        >
          DELETE
        </button>
      )}
    </div>

    // <div>
    //   <div className="m-3 relative ">
    //     <img className="border-2 " src={picture} />
    //   </div>
    //   <div className="m-3 overflow-hidden">
    //     <p className="text-center bg-black text-white absolute bottom-[-100px] ">
    //       {tag}
    //     </p>
    //   </div>
    // </div>
  );
};
