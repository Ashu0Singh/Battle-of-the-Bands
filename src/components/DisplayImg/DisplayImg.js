import React from 'react'
import Wrapper from '../Wrapper/Wrapper'
import './DisplayImg.css'

function DisplayImg({ imgURL, setSelectedURL }) {
  return (
    // <Wrapper>
 <div className='flex-col borders'>
         <h1 className='fc-white title'>{' >Generated Images '}</h1>
         <div className='flex-col fc-white'>
         <div className="row text-center disp-img align-items-center">
              {/* {imgURL.map((link, index) => (
                    <div className="col-6 col-sm-12 grid-box" key={index} onClick={(e) => setSelectedURL(e.target.src)}>
                      <img src={link} alt='generated'></img>
                    </div>
              ))} */}

              <div className='grid'>
                <a className="col-6 col-sm-12 grid-box" href="#popup1"></a>
                <a className="col-6 col-sm-12 grid-box" href="#popup1"></a>
              </div>

              <div className='grid'>
                <a className="col-6 col-sm-12 grid-box" href="#popup1"></a>
                <a className="col-6 col-sm-12 grid-box" href="#popup1"></a>
              </div>

             
              </div>

              <div id="popup1" className="overlay">
                <div className="popup">
                  <a className='close' href="#">&times;</a>
                  <div className="content flex-row gap-1">
                    <button className='button fs-200 fc-white extrabold'>Confirm</button>
                    <button className='button fs-200 fc-white extrabold'>Cancel</button>
                  </div>
                </div>
              </div>
         </div>
    </div>
  )
   
  
}

export default DisplayImg