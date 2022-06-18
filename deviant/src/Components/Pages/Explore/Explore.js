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
            <img src="public/images/bookshelf.png" alt="bookshelf"/>
            <div className="browse-games">
                    <h1 className="title">Browse Games</h1>
                <ul className="genres">
                    <li onClick={()=>{setTag('action');setIsShown(true)}} ><i className="fa-solid fa-hand-fist"></i>Action</li>
                    <li onClick={()=>{setTag('adventure');setIsShown(true)}}><i
                        className="fa-solid fa-mountain-sun"></i>Adventure</li>
                    <li onClick={()=>{setTag("puzzle");setIsShown(true)}}><i className="fa-solid fa-puzzle-piece"></i>Puzzle</li>
                    <li onClick={()=>{setTag("role-play");setIsShown(true)}}><i className="fa-solid fa-masks-theater"></i>Role-play</li>
                    <li onClick={()=>{setTag("simulation");setIsShown(true)}}><i className="fa-solid fa-dragon"></i>Simulation</li>
                    <li onClick={()=>{setTag("strategy");setIsShown(true)}}><i className="fa-solid fa-chess-knight"></i>Strategy</li>
                    <li onClick={()=>{setTag("sports");setIsShown(true)}}><i className="fa-solid fa-football"></i>Sports</li>

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

