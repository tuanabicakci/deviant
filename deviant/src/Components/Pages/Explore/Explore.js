import React from "react";
import './Explore.css'
import { useState } from "react";

export const GameGen=['action game 1','action game 2','action game 3','action game 4','action game 5','action game 6',
    'adventure game','puzzle game','role-play game','simulation game','strategy game','sports game',]

function Genres() {
    const[tag, setTag]=useState(null);
    const [isShown, setIsShown] = useState(false);
    return(

        <div >
                       <div className="browse-games">
                <ul className="genres">
                    <li style={{backgroundImage:"url(/images/explore/blueB.png)"}} onClick={()=>{setTag('action');setIsShown(true)}} >Action</li>
                    <li style={{backgroundImage:"url(/images/explore/redB.png)"}} onClick={()=>{setTag('adventure');setIsShown(true)}}>Adventure</li>
                    <li style={{backgroundImage:"url(/images/explore/pinkB.png)"}} onClick={()=>{setTag("puzzle");setIsShown(true)}}>Puzzle</li>
                    <li style={{backgroundImage:"url(/images/explore/greenB.png)"}} onClick={()=>{setTag("role-play");setIsShown(true)}}>Role-play</li>
                    <li style={{backgroundImage:"url(/images/explore/yellowB.png)"}} onClick={()=>{setTag("simulation");setIsShown(true)}}>Simulation</li>
                    <li style={{backgroundImage:"url(/images/explore/purpleB.png)"}} onClick={()=>{setTag("strategy");setIsShown(true)}}>Strategy</li>
                    <li style={{backgroundImage:"url(/images/explore/orangeB.png)"}} onClick={()=>{setTag("sports");setIsShown(true)}}>Sports</li>

                </ul>
            </div>

            {isShown && (
                <div>
                <button  className="hashtag" onClick={()=>{setTag(null);setIsShown(false)}}><i
                    className="fa-solid fa-xmark"></i> {tag}</button>
                    <ul className="game-list">
                    {GameGen.filter(game=>game.includes(tag)).map(filteredGames=>(
                        <li className="games">
                            {filteredGames}
                        </li>
                    ))}
                    </ul>
                </div>
                )}

        </div>

    )

}

function Explore(){

        return(
            <div>
            <div><Genres/></div>
            </div>
        )

}

export {
    Explore,Genres
}

