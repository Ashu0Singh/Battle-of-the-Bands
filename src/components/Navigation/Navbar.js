import './Navbar.css';
import React,{ useState } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar(){
    const [hamRotation , setHamRotation] = useState(
        { 
            width:"20px",
            height:"20px",
            transform:"rotate(0deg)",
            transitionDuration: '300ms'
        }
    );
    const [isVisible , setisVisible]= useState(false);
    const [hamB,setHamb] = useState({});
    const hamburgerMenu = () => {
        if(!isVisible){
            setHamb({
                height: "25vh"
            })
            console.log(hamRotation)
            setHamRotation(prevVal =>({...prevVal, transform:`rotate(180deg)`}));
        }else{
            setHamb({
                height: "0px"
            });
            console.log(hamRotation)
            setHamRotation(prevVal =>({...prevVal, transform:`rotate(0deg)`}));
        }
        console.log(isVisible);
        setisVisible(prevVal => !prevVal);
    }

    return(
        <div className='navBar flex-col'>
            <div className='navBar-top flex-col'>
                <Link to='/Prompt-Battle/'>
                    <h1 className='navBar-title fc-white fs-400 bold'>
                        _prompt battle
                    </h1>
                </Link>
                <button className='navBar-hamB' onClick={hamburgerMenu}>
                    <img 
                        style={hamRotation}
                        src={process.env.PUBLIC_URL + "/assests/icons/menu.png"}
                        alt="menu"
                    />
                </button>
            </div>
            <div style={hamB} className='navBar-hamMenu navBar-iconTray flex-col'>
                    <Link to='/Prompt-Battle/'>
                        <img className='navIcons' style={{ 
                                width:"30px",
                                height:"30px"
                            }}
                            alt="Homepage Icon"
                            src={process.env.PUBLIC_URL + "/assests/icons/HomePage.png"} 
                        />
                        <p className='navBar-hamMenuLabels fc-white '>Homepage</p>
                    </Link>

                    <Link to='/Prompt-Battle/GenerateImage'>
                        <img className='navIcons' style={{ 
                                width:"30px",
                                height:"30px"
                            }} 
                            alt="Generation Icon"
                            src={process.env.PUBLIC_URL + "/assests/icons/ImagesGen.png"} 
                        />
                        <p className='navBar-hamMenuLabels fc-white fs-200'>Generate Image</p> 
                    </Link>
                    
                    <Link to='/Prompt-Battle/Leaderboard'>
                        <img className='navIcons' style={{ 
                                width:"30px",
                                height:"30px"
                            }} 
                            alt="Leaderboard Icon"
                            src={process.env.PUBLIC_URL + "/assests/icons/LeaderBoard.png"} 
                        />
                        <p className='navBar-hamMenuLabels fc-white '>Leaderboard</p>
                    </Link>

                    <Link to='/Prompt-Battle/Polling'>
                        <img className='navIcons' style={{ 
                                width:"30px",
                                height:"30px"
                            }} 
                            alt="Polling Icon"
                            src={process.env.PUBLIC_URL + "/assests/icons/Polling.png"} 
                        />
                        <p className='navBar-hamMenuLabels fc-white '>Polling</p>
                    </Link>
            </div>
        </div>
    );
}