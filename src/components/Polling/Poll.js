

import React, { useState, useEffect } from "react";
import "./Poll.css";
import axios from "axios";
import Wrapper from "../Wrapper/Wrapper";

export default function Poll() {
  const [data, setData] = useState([]);
  const [counter, setCounter] = useState([]);
  const [ip, setIP] = useState();
  const [isuserVoted, setUserVoted] = useState(false);
  
  const getData = async () => {
    const res = await axios.get('https://geolocation-db.com/json/');
    console.log(res.data);
      setIP(res.data.IPv4);
      await axios.post(
        `${process.env.REACT_APP_URL}/api/polling`,
          { ip: res.data.IPv4 }
      ).then(function (response) {
          setData(response.data);
          setCounter(response.data.time);
        })
        .catch(function (error) {
          console.error(error);
        });
  };
  const upVote = (Userid) => {
    setUserVoted(true);
    axios.post(
      `${process.env.REACT_APP_URL}/api/votes`,
      { id: Userid, ip })
      .then(function (response) {
        console.log(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  useEffect(() => {
    getData();

    const interval = setInterval(() => {
      setCounter((prevCounter) => prevCounter - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const style = { gap: "1rem" };

  console.log(data);
  return (
    <Wrapper>
      <div className="flex-col borders" style={{ gap: "2rem" }}>
        <h1 className="fs-800 title fc-white extrabold">{">Polling"}</h1>
        {data.isPollingStarted > 0 &&
        !data.isVoted &&
        !isuserVoted &&
        counter > 0 ? (
          <div className="flex-col poll">
            <div className="flex-col" style={style}>
              <img
                alt="generateImage"
                className="poll-displayimage"
                src={data.team[0].imageURL}
              />
              <button
                className="button fs-300 extrabold fc-white"
                onClick={() => upVote(data.team[0].id)}
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
                src={data.team[1].imageURL}
              />
              <button
                className="button fs-300 extrabold fc-white"
                onClick={() => upVote(data.team[1].id)}
              >
                +1
              </button>
            </div>
          </div>
        ) : data.isVoted || isuserVoted ? (
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