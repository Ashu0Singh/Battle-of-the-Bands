import React, { useState } from "react";
import Wrapper from "../Wrapper/Wrapper";
import "./DisplayImg.css";

function DisplayImg({ imgURL, setSelectedURL }) {

  const [isSubmitted, setIsSubmitted] = useState(false);
  if(isSubmitted){
    return (
      
        <div className="flex-col borders">
          <h1 className="fc-white title">{" >Image Generation "}</h1>
          <div
            className="fs-400 fc-white extrabold flex-col poll"
            style={{ height: "100%", justifyContent: "center" }}
          >
Thank you for submitting the image.          </div>
        </div>
    );
  }
  return (
    // <Wrapper>
    <div className="flex-col borders">
      <h1 className="fc-white title">{" >Generated Images "}</h1>
      <div className="flex-col fc-white">
        <div className="row text-center disp-img align-items-center">
          {/* {imgURL.map((link, index) => (
                    <div className="col-6 col-sm-12 grid-box" key={index} onClick={(e) => setSelectedURL(e.target.src)}>
                      <img src={link} alt='generated'></img>
                    </div>
              ))} */}

          <div className="grid">
            <a
              className="col-6 col-sm-12 grid-box"
              onClick={() =>{
                setIsSubmitted(true)
                setSelectedURL(imgURL[0].url)
              } }
            >
              <img src={imgURL[0].url} />
            </a>
            <a
              className="col-6 col-sm-12 grid-box"
              onClick={() => {
                setSelectedURL(imgURL[1].url)
                setIsSubmitted(true)
              }}
            >
              <img src={imgURL[1].url} />
            </a>
          </div>

          <div className="grid">
            <a
              className="col-6 col-sm-12 grid-box"
              onClick={() => {
                setSelectedURL(imgURL[1].url)
                setIsSubmitted(true)
              }}
            >
              <img src={imgURL[2].url} />
            </a>
            <a
              className="col-6 col-sm-12 grid-box"
              onClick={() => {
                setSelectedURL(imgURL[1].url)
                setIsSubmitted(true)
              }}
            >
              <img src={imgURL[3].url} />
            </a>
          </div>
        </div>
        
      </div>
    </div>
  );
}

export default DisplayImg;
