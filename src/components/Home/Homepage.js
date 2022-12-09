import { Link } from "react-router-dom";
import Wrapper from "../Wrapper/Wrapper";
import './Homepage.css'

export default function Homepage(){
    return (
        <Wrapper>
            <div className="home borders flex-col fc-white">
                <h1 className='fs-800 extrabold'>Battle<br/> of the Bands</h1>
                <p className='fs-400 medium'>An AI prompt battle</p>
                <p>
                    Battle of the Bands: India's 1st Prompt Battle
                    Indulge in the Depths of Human Creativity Ft. AI Creations in a
                    Mind-Blowing Prompt Battle Competition - it’s like a rap battle but with keyboards!
                </p>
                <Link to='/Prompt-Battle/GenerateImage'>
                <button className='button fs-200 fc-white extrabold' style={{marginLeft: "0" , marginBottom: "0"}}><p style={{marginBottom: "0"}}>{'Enter the battle ->'}</p></button>
                </Link>

                <p className='fs-700 extrabold'>Event Details</p>
                <p>
                    - Using an AI-supported text-to-image software, DALL-E 2, we enable users to
                    generate new complex photos, images, and illustrations out of thin air by typing in
                    image descriptions, so-called prompts.
                    <br/>
                    <br/>
                    - Based on the Rap Battle format, contesting teams go head-to-head to elicit
                    beautiful images from the latent spaces of generative AI software based on an
                    assigned theme.
                    <br/><br/>
                    - Explore the new creative frontiers opened up by generative AI and leverage it to
                    add creative agency to how you create. Over the course of this event, we will be
                    showcasing insights and art from an exciting roster of artists and builders.
                </p>

                <p className='fs-600 extrabold'>Format</p>
                <p className='fs-500 bold'>1. The Arena</p>
                <p>
                    Battle of the Bands is a live event where bands go head-to-head and demonstrate
                    their prompt design skills using text-to-image software in 5 rounds of enthralling
                    creations. The teams which elicit the most surprising, disturbing or beautiful
                    images from the latent spaces of DALL-E 2 will be chosen to progress to the next
                    round.
                </p>
                <p className='fs-500 bold'>2. La Grand Finale</p>
                <p>
                    The final top 16 teams will commence to compete in the finale, in which diverse
                    themes and compositions will be provided as reference, on the basis of which
                    prompt engineering skills and generated art will be judged. The top teams will be
                    awarded in the finale and also, prizes for different themes will be given.
                </p>
                <p className='fs-500 bold'>3. The Showdown</p>
                <p>
                    ​The warmup rounds and the grand finale will be followed by rigorous elimination
                    rounds consisting of the top bands going head to head in the quarterfinals,semifinals and finally, the much-awaited showdown to crown the top 2 winning
                    teams!
                </p>
                <p className='fs-600 extrabold'>Prizes</p>
                <p>
                    ​- Numerous prizes will be offered to the winners and runner-ups - The top 3 teams
                    crowned will receive Google schwags such as hoodies and kits. Also, be a part of
                    the audience to bag goodies for ideation of cool prompts and themes!
                    <br/>
                    - Participants will also be rewarded with exciting schwags and stickers, in addition
                    to certificates for all!
                </p>

            </div>
        </Wrapper>
    )
}