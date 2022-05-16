import React, { useEffect, useState } from "react";
import { Banner } from "../components/Banner";
import { DisplayCard } from "../components/DisplayCard";
import { Footer } from "../components/Footer";
import { db } from "../firebase-config";
import { collection, getDocs } from "firebase/firestore";

export const Home = ({ isAuth, setIsAuth }) => {
  const [imgList, setImgList] = useState([]);
  const [randstate, setRandstate] = useState(0);
  const listRef = collection(db, "images");

  useEffect(() => {
    const getImgList = async () => {
      const data = await getDocs(listRef);
      // console.log("image data", data);
      setImgList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      // console.log(imgList);
    };

    getImgList();
  }, [randstate]);

  return (
    <>
      <Banner isAuth={isAuth} />
      <div className="flex flex-col justify-center items-center font-ubuntu mt-4 ">
        <div className="max-w-7xl">
          {/* <div className="font-ubuntu flex flex-row flex-wrap justify-center items-center -m-4 pb-12  "> */}
          <div className="font-ubuntu lg:grid lg:grid-cols-3  flex flex-col justify-center items-center">
            {imgList.map((item) => {
              return (
                <DisplayCard
                  key={item.id}
                  picture={item.imageurl}
                  imagename={item.imagename}
                  tag={item.name}
                  isAuth={isAuth}
                  iid={item.id}
                  randstate={randstate}
                  setRandstate={setRandstate}
                />
              );
            })}
            {/* <DisplayCard picture={tom} tag="Space Oddity" />
            <DisplayCard picture={littetalks} tag="Little Talks" />
            <DisplayCard picture={tom} tag="Space Oddity" />
            <DisplayCard picture={tom} tag="Space Oddity" />
            <DisplayCard picture={tom} tag="Space Oddity" />
            <DisplayCard picture={tom} tag="Space Oddity" /> */}
          </div>
        </div>
      </div>
      <Footer setIsAuth={setIsAuth} />
    </>
  );
};
