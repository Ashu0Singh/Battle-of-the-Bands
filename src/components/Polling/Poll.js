import React, { useState, useEffect } from "react";
import "./Poll.css";
import Axios from "axios";
import Wrapper from "../Wrapper/Wrapper";

export default function Poll() {
  // const [isPollingStarted, setPollingState] = useState(false);
  // Axios.get("http://localhost:8080/api/polling").then((response) => {
  //   setPollingState(response.data.isPollingStarted);
  // });

  const [counter, setCounter] = useState(100);

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter((prevCounter) => prevCounter - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const style = { gap: "1rem" };
  return (
    <Wrapper>
      <div className="flex-col borders" style={{ ...style, gap: "2rem" }}>
        <h1 className="fs-800 title fc-white extrabold">{">Polling"}</h1>
        {counter > 0 ? (
          <div className="flex-col poll">
            <div className="flex-col" style={style}>
              <img
                alt="generateImage"
                className="poll-displayimage"
                src={
                  process.env.PUBLIC_URL + "/assests/capybara/Capybara-1.png"
                }
              />
              <button className="button fs-300 extrabold fc-white">+1</button>
            </div>
            <h1 className="fs-600 extrabold fc-white">{` ${Math.floor(
              counter / 60
            )} : ${counter % 60}`}</h1>
            <div className="flex-col" style={style}>
              <img
                alt="generateImage"
                className="poll-displayimage"
                src={
                  process.env.PUBLIC_URL + "/assests/capybara/Capybara-2.png"
                }
              />
              <button className="button fs-300 extrabold fc-white">+1</button>
            </div>
          </div>
        ) : (
          <div
            className="fs-400 fc-white extrabold flex-col poll"
            style={{ height: "100%", justifyContent: "center" }}
          >
            Polling will start in sometime
          </div>
        )}
      </div>
    </Wrapper>
  );
}