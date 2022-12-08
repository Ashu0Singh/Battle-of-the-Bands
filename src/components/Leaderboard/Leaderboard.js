import axios from 'axios';
import React, { useState, useEffect } from 'react'
import Wrapper from '../Wrapper/Wrapper'
import './Leaderboard.css'

function Leaderboard() {

  const [cardData, setCardData] = useState([{team_name: "Unga Bunga" , votes: "221"},{team_name: "Unga Bunga" , votes: "221"}]);

  const getCardData = (url) => {
    axios.get(url)
      .then((response) => {
        setCardData(response.data)
      })

      .catch((error) => console.log(error))
  }

  useEffect(() => {
    getCardData();
  }, [])
  

  return (
    <Wrapper>
        <div className='flex-col borders'>
            <h1 className='fc-white title'>{' >Leaderboard '}</h1>
            <div className='flex-col teams'>
              <h2 className='fc-white extrabold'>Teams</h2>
              {cardData.map(data => (Card(data)))}
            </div>
        </div>
    </Wrapper>
  )
}


function Card(data){

  return (
            <div className="card box" key={1}>
              <div className="card-body flex-row content">
                <p className='fc-white fs-300 medium'>{data.team_name}</p>
                <p className='fc-white fs-300 medium'>Votes:{data.votes}</p>
              </div>
            </div>
  )

}

export default Leaderboard