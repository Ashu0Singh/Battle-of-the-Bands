import React from "react";
import Wrapper from "../Wrapper/Wrapper";
import "./DisplayImg.css";

function DisplayImg({ imgURL, setSelectedURL }) {
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
              onClick={() => setSelectedURL(imgURL[0].url)}
            >
              <img src={imgURL[0].url} />
            </a>
            <a
              className="col-6 col-sm-12 grid-box"
              onClick={() => setSelectedURL(imgURL[1].url)}
            >
              <img src={imgURL[1].url} />
            </a>
          </div>

          <div className="grid">
            <a
              className="col-6 col-sm-12 grid-box"
              onClick={() => setSelectedURL(imgURL[2].url)}
            >
              <img src={imgURL[2].url} />
            </a>
            <a
              className="col-6 col-sm-12 grid-box"
              onClick={() => setSelectedURL(imgURL[3].url)}
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
