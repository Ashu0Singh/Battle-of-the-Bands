import React, { useState, useEffect } from "react";
import "./Poll.css";
import Axios from "axios";
import Wrapper from "../Wrapper/Wrapper";

export default function Poll() {
  const [isPollingStarted, setPollingState] = useState(false);
  const [counter, setCounter] = useState(10);
  const [images, setImages] = useState([]);
  const [ID, setID] = useState([]);
  const [isVoted, setVoted] = useState(localStorage.getItem("isVoted"));

  Axios.get("http://localhost:8080/api/polling").then((response) => {
    setPollingState(response.data.isPollingStarted);
    if (response.data.isPollingStarted) {
      setCounter(response.data.time);
      setImages([
        response.data?.team[0]?.imageURL,
        response.data?.team[1]?.imageURL,
      ]);
      setID([response.data?.team[0].id, response.data.team[1].id]);
    }
  });

  const upVote = (Userid) => {
    setVoted("true");
    localStorage.setItem("isVoted", true);
    const options = {
      method: "POST",
      url: "http://localhost:8080/api/votes",
      headers: { "Content-Type": "application/json" },
      data: { id: Userid },
    };

    Axios.request(options)
      .then(function (response) {
        console.log(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter((prevCounter) => prevCounter - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  if (!(isPollingStarted == "true")) {
    localStorage.setItem("isVoted", false);
  }

  const style = { gap: "1rem" };
  return (
    <Wrapper>
      <div className="flex-col borders" style={{ ...style, gap: "2rem" }}>
        <h1 className="fs-800 title fc-white extrabold">{">Polling"}</h1>
        {isPollingStarted > 0 && !(isVoted === "true") ? (
          <div className="flex-col poll">
            <div className="flex-col" style={style}>
              <img
                alt="generateImage"
                className="poll-displayimage"
                src={images[0]}
              />
              <button
                className="button fs-300 extrabold fc-white"
                onClick={() => upVote(ID[0])}
              >
                +1
              </button>
            </div>
            <h1 className="fs-600 extrabold fc-white">{` ${Math.floor(
              counter / 60
            )} : ${counter % 60}`}</h1>
            <div className="flex-col" style={style}>
              <img
                alt="generateImage"
                className="poll-displayimage"
                src={images[1]}
              />
              <button
                className="button fs-300 extrabold fc-white"
                onClick={() => upVote(ID[1])}
              >
                +1
              </button>
            </div>
          </div>
        ) : isVoted === "true" ? (
          <div
            className="fs-400 fc-white extrabold flex-col poll"
            style={{ height: "100%", justifyContent: "center" }}
          >
            Thank You For Voting
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
