import React, { useState } from "react";
import "./ImageGen.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Wrapper from "../Wrapper/Wrapper";
import axios from "axios";
import DisplayImg from "../DisplayImg/DisplayImg";
import { useParams } from "react-router-dom";

function GenerateImg() {
  const [isGenerated, setIsGenerated] = useState(false);
  const [isLoading, setIsLoading] = useState("Submit");
  const { teamId } = useParams();

  const [info, setInfo] = useState({
    prompt: "",
  });
  const [selectedURL, setSelectedURL] = useState("");
  const [imgURL, setImgURL] = useState([]);

  function handleChange({ target: { name, value } }) {
    setInfo((prevValue) => ({ ...prevValue, [name]: value }));
    console.log(value);
  }

  const handleSubmit = (selectedURL, id) => {
    const url =
      `${process.env.REACT_APP_URL}/api/submission`;
    axios
      .post(url, {
        id,
        img: selectedURL,
      })
      .then((res) => {
        console.log(res.data);
      });
  };

  const generateImg = async () => {
    setIsLoading("");
    const url =
    `${process.env.REACT_APP_URL}/api/images/generations`;
    await axios
      .post(url, {
        prompt: info.prompt,
      })
      .then((res) => {
        if (!res.data.error) {
          console.log(res.data.images.data);
          setImgURL(res.data.images.data);
        } else {
          console.log("This Prompt Violate terms and condition of Dall e");
        }
      });

    setIsGenerated(true);

    if (isGenerated) {
      setIsLoading("Submitted");
    } else {
      setIsLoading("Retry");
    }
  };

  if (!(selectedURL === "")) {
    handleSubmit(selectedURL, teamId);
  }

  if (teamId === undefined) {
    return (
      <Wrapper>
        <div className="flex-col borders">
          <h1 className="fc-white title">{" >Image Generation "}</h1>
          <div
            className="fs-400 fc-white extrabold flex-col poll"
            style={{ height: "100%", justifyContent: "center" }}
          >
            Please contact the Event Managment Team for Login
          </div>
        </div>
      </Wrapper>
    );
  }
  return (
    <Wrapper>
      (
      {!isGenerated && (
        <div className="flex-col borders">
          <h1 className="fc-white title">{" >Image Generation "}</h1>
          <div className="flex-col fc-white imgGen">
            <div className="form-floating mb-5">
              <textarea
                className="form-control inputFeilds"
                placeholder="Enter your prompt here"
                rows="5"
                col="10"
                charswidth="23"
                id="floatingTextarea"
                name="prompt"
                onChange={handleChange}
              ></textarea>
              <label for="floatingTextarea">Prompt</label>
            </div>
            {/* <div className="d-grid mb-2">
              <button
                className="button fs-200 fc-white extrabold"
                onClick={generateImg}
              >
                Generate
              </button>
            </div> */}
            <button
              className="button fs-50 extrabold fc-white"
              onClick={() => {
                if (!(info.prompt === "")) {
                  generateImg();
                }
              }}
            >
              {isLoading === "" ? (
                <span
                  className="spinner-border spinner-border-sm"
                  role="status"
                  aria-hidden="true"
                ></span>
              ) : (
                isLoading
              )}
            </button>
          </div>
        </div>
      )}
      {isGenerated && (
        <DisplayImg imgURL={imgURL} setSelectedURL={setSelectedURL} />
      )}
      )
    </Wrapper>
  );
}

export default GenerateImg;

/* 


import './Login.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Wrapper from '../Wrapper/Wrapper'
import { useState } from 'react'
import Axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Login(){

    const [classNames , setClassName] = useState(['','','','']);
    const [isLoading , setIsLoading] = useState('Submit');


    const [input , setInput ] = useState(
        {
            name:'',
            team_name:'',
            api_key:'',
            security_code:''
        }
    );


    function handleSubmit(){
        setIsLoading('');
        Axios.post(
            "http://3.6.65.227:8080/api/login",
            {
                "name":`${input.name}`,
                "team_name":`${input.team_name}`,
                "api_key":`${input.api_key}`,
                "security_code":`${input.security_code}`
            }
        ).then(({data:{isLoggedIn , message}, status}) => {
            if(status === 200 && isLoggedIn){
                setIsLoading("Submitted");
                toast.success(message);
            }else{
                setIsLoading("Retry")
                toast.error(message);
            }
        });
    }


    function handleChange({target :{ name , value}}){
        setInput(prevValue => ({...prevValue,[name]:value}))
    }

    return (
        <Wrapper>
            <div className="flex-col borders" style={{gap:"2rem"}}>
                <h1 className='fs-800 title fc-white extrabold'>{">Login"}</h1>
                <div className='login flex-col'>
                    <div className="form-floating">
                        <input 
                            type="text" 
                            id='floatingName' 
                            onChange={handleChange} 
                            className={`form-control inputFeilds ${classNames[0]}`} 
                            placeholder="Vinay"
                            name='name'
                            value={input.name}
                        />
                        <label htmlFor="floatingName">Name</label>
                    </div>
                    <div className="form-floating">
                        <input 
                            type="text" 
                            id='floatingInput' 
                            onChange={handleChange} 
                            className={`form-control inputFeilds ${classNames[1]}`} 
                            placeholder="Cute Capybara"
                            name='team_name'
                            value={input.team_name}
                        />
                        <label htmlFor="floatingInput">Team Name</label>
                    </div>
                    <div className="form-floating">
                        <input 
                            type="text" 
                            id="floatingAPI" 
                            onChange={handleChange} 
                            className={`form-control inputFeilds ${classNames[2]}`} 
                            placeholder="xxxxxxxxxxxx"
                            name='api_key'
                            value={input.api_key}
                        />
                        <label htmlFor="floatingAPI">API Key</label>
                    </div>
                    <div className="form-floating">
                        <input 
                            type="password" 
                            id='floatingCode' 
                            onChange={handleChange} 
                            className={`form-control inputFeilds ${classNames[3]}`} 
                            placeholder="234209"
                            name='security_code'
                            value={input.security_code}
                        />
                        <label htmlFor="floatingCode">Security Code</label>
                    </div>
                    <button className='button fs-50 extrabold fc-white' onClick={handleSubmit}>
                        {isLoading === "" ? 
                        <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> 
                        :isLoading}
                    </button>
                </div>
            </div>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
            />
        </Wrapper>
    )
}





*/
