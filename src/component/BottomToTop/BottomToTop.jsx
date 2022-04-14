import React, { useEffect, useState } from "react";
import "../BottomToTop/BottomToTop.scss";
import { UilAngleDoubleUp } from '@iconscout/react-unicons'
 

 
 

const BottomToTop = () => {
  const [backToTop, setbackToTop] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setbackToTop(true);
      } else {
        setbackToTop(false);
      }
    });
  }, []);

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div>
      {backToTop && (
         <UilAngleDoubleUp className="vibrate-1"  onClick={scrollUp} id="button"/>
         
      )}
    </div>
  );
};

export default BottomToTop;
