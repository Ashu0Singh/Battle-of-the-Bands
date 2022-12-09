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
    await axios.get("https://geolocation-db.com/json/").then(async (res) => {
      setIP(res.data.IPv4);

      const options = {
        method: "POST",
        url: "http://ec2-3-6-65-227.ap-south-1.compute.amazonaws.com:8080/api/polling",
        headers: { "Content-Type": "application/json" },
        data: { ip: res.data.IPv4 },
      };

      await axios
        .request(options)
        .then(function (response) {
          setData(response.data);
          setCounter(response.data.time);
        })
        .catch(function (error) {
          console.error(error);
        });
    });
  };
  const upVote = (Userid) => {
    setUserVoted(true);
    const options = {
      method: "POST",
      url: "http://ec2-3-6-65-227.ap-south-1.compute.amazonaws.com:8080/api/votes",
      headers: { "Content-Type": "application/json" },
      data: { id: Userid, ip },
    };

    axios
      .request(options)
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
