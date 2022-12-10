import { Link } from "react-router-dom";
import Wrapper from "../Wrapper/Wrapper";
import './Homepage.css'

export default function Homepage(){
    return (
        <Wrapper>
            <div className="home borders flex-col fc-white">
                <h1 className='fs-800 extrabold'>Battle<br/> of the Bands</h1>
                <h3 className='fs-400 medium'>An AI prompt battle</h3>
                <p>
                    Battle of the Bands is a live event where bands go head-to-head and demonstrate
                    their prompt design skills using text-to-image software in 5 rounds of enthralling
                    creations. 
                </p>
                <h3>Event Details</h3>
                <p>- Using an AI-supported text-to-image software, DALL-E 2, we enable users to
generate new complex photos, images, and illustrations out of thin air by typing in
image descriptions, so-called prompts</p>
                <p>- Explore the new creative frontiers opened up by generative AI and leverage it to
add creative agency to how you create. Over the course of this event, we will be
showcasing insights and art from an exciting roster of artists and builders</p>
                <Link to='/Prompt-Battle/GenerateImage'>

                <button className='button fs-200 fc-white extrabold' style={{marginLeft: "0" , marginBottom: "0"}}><p style={{marginBottom: "0"}}>{'Enter the battle ->'}</p></button>
                </Link>
            </div>
        </Wrapper>
    )
}