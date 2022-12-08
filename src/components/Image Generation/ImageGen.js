import React, { useState, useRef, useEffect } from 'react'
import './ImageGen.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Wrapper from '../Wrapper/Wrapper'
import axios from 'axios';

function GenerateImg() {

  const displayImg = useRef(null);

  const scrollToSection = (elementRef) => {
    window.scrollTo(
      {
        top: elementRef.current.offsetTop,
        behavior: 'smooth'
      }
    )
  }

  const [info, setInfo] = useState(
    {
      prompt: "",
    }
  );
  const [selectedURL, setSelectedURL] = useState("");
  const [imgURL, setImgURL] = useState([]);

  function handleChange({target :{ name , value}}){
      setInfo(prevValue => ({...prevValue,[name]:value}))
      console.log(value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    const url = "http://3.6.65.227:8080/api/submission";
    axios.post(url, {
      url: selectedURL,
    })
    .then(res => {
      console.log(res.data);
    });
  };

  const generateImg = async () => {
    const url = "http://3.6.65.227:8080/api/generate-image";
    axios.post(url, {
      prompt: info.prompt,
    })
    .then(res => {
      console.log(res.data);
    });
  };

  async function fetchData() {
    try {
      const response = await axios.get("http://3.6.65.227:8080/generate-img")
      setImgURL(imgURL => imgURL.concat(response.data))
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    fetchData();
  },[])

  const DisplayImg = () => {
    return (
        <div className='flex-col borders'>
          <div ref={displayImg} className='container text-center'>
            <div class="row">
              {imgURL.map((link, index) => (
                <div class="col fc-white grid-box" key={index} onClick={(e) => setSelectedURL(e.target.src)}>
                  <img src={link} alt='generated'></img>
                </div>
              ))}
             
            </div>
          </div>
        </div>
    )
  }

  return (
    <Wrapper>
      <div className='flex-col borders'>
        <h1 className='fc-white title'>{' >Image Generation '}</h1>
        <div className='flex-col fc-white imgGen'>
          <form onSubmit={handleSubmit}>


          <div class="form-floating mb-3">
            <textarea
                className="form-control inputFeilds" 
                placeholder="Enter your prompt here"
                rows='5' 
                col='5'
                id="floatingTextarea"
                name='prompt'
                onChange={handleChange}
            >
            </textarea>
            <label for="floatingTextarea">Prompt</label>
          </div>


          {/* <div className="form-floating mb-3">
              <input 
                  type="text" 
                  id='floatingInput' 
                  onChange={handleChange} 
                  className='form-control inputFeilds'
                  placeholder="Vinay"
                  name='name'
                  value={info.theme}
              />
              <label htmlFor="floatingName">Theme</label>
          </div> */}
            
            {/* <div className='input-container'>
              <label>Number of Images</label>
              <select class="form-select">
                <option value="1">1</option>
                <option value="4">4</option>
              </select>
              <input type='text' className='dropdown-ip' name='size' value={info.number} onChange={handleChange} />
            </div> */}
            
            

            <div className='d-grid gap-2 mb-3'>
              <button className='button fs-200 fc-white extrabold' onClick={generateImg}>Generate</button>
            </div>
            
            <div className='d-grid gap-2 mb-3'>
              <button className='button fs-200 fc-white extrabold'>Submit</button>
            </div>
            
          </form>
        </div>
        <div className='scroll flex-col' onClick={() => scrollToSection(displayImg)}>
          <h3 className='fs-50 fc-white'>Scroll for Images</h3>
          <h3 className='fs-50 fc-white'>v</h3>
        </div>

            <DisplayImg />
        </div>
    </Wrapper>
  )
}

export default GenerateImg