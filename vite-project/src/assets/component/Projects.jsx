import playbtn from "../images/playbtn.png";
import game from "../images/game.png";
import result from "../images/result.png";
import stop from "../images/stop.png";
import stop2 from "../images/stop2.png";
import page1 from "../images/page1.png";
import page2 from "../images/page2.png";
import page3 from "../images/page3.png";
import calc from "../images/calc.png";
import count from "../images/count.png";
import menu from "../images/menu.png";
import menu1 from "../images/menu1.png";
import menu2 from "../images/menu2.png";
import React, { useState } from "react";
import ImageModal from "./ImageModal";

export default function Projects () {
    const[isOpen, setIsOpen] = useState(false);
    const[selectedImg, setSelectedImg] = useState("");

    const openImage = (src) => {
        setSelectedImg(src);
        setIsOpen(true);
    }

    return (
        <div className="project" id="projects">
            <h2>Projects</h2>
            <div className="project-card">
                <h3>Tic Tac Toe</h3>
                <p>A Simple React-based tic-tac-toe game where two players can take turns to play or a player can play with the bot</p>
                <div className="p-img">
                    <img src= {playbtn} onClick={() => openImage(playbtn)} alt="" />
                    <img src= {game} onClick={() => openImage(game)} alt="" />
                    <img src={result} onClick={() => openImage(result)} alt="" />
                </div>
                <a href="https://tic-tac-toe-one-smoky-85.vercel.app/" target="_blank" >Live Demo</a>
                <a href="https://github.com/EtsegenetE/tic-tac-toe" target="_blank">GitHub Repo</a>
            </div>

            <div className="project-card">
                <h3>Stop Watch</h3>
                 <p>A functional stopwatch app built with React and JavaScript for tracking time with start, stop, and reset options.</p>
                 <div className="p-img">
                    <img src= {stop} onClick={() => openImage(stop)} alt="" />
                    <img src={stop2} onClick={() => openImage(stop2)} alt="" />
                 </div>
                 <a href="https://stop-watch-fawn-mu.vercel.app/" target="_blank">Live Demo</a>
                 <a href="https://github.com/EtsegenetE/stop-watch" target="_blank">GitHub Repo</a>
            </div>

            <div className="project-card">
                <h3>Landing Page</h3>
                <p>A responsive landing page for a clothing store</p>
                <div className="p-img">
                    <img src={page1}  onClick={() => openImage(page1)}alt="" />
                    <img src={page2}  onClick={() => openImage(page2)} alt="" />
                    <img src={page3}  onClick={() => openImage(page3)}alt="" />
                </div>
                <a href="https://landing-page-now.vercel.app/" target="_blank">Live Demo</a>
                <a href="https://github.com/EtsegenetE/landing-page" target="_blank">GitHub Repo</a>
            </div>

            <div className="project-card">
                <h3>Calculator App</h3>
                <p>A basic calculator app created using React, capable of performing addition, subtraction, multiplication, and division.</p>
               <div className="p-img">
                 <img src={calc}   onClick={() => openImage(calc)}alt="" />
                </div>
                <a href="https://calculator-me-2sji.vercel.app/"target="_blank">Live Demo</a>
                <a href="https://github.com/EtsegenetE/calculator-me"target="_blank">GitHub Repo</a>
            </div>

            <div className="project-card">
                <h3>Character Count</h3>
                <p>A responsive character counting tool built with React. It tracks and displays the number of characters, words, and sentences typed into a text area in real-time. Great for writers and editors to monitor text length and structure.</p>
                <div className="p-img">
                   <img src={count}  onClick={() => openImage(count)}alt="" />
                </div>
                <a href="https://vercel.com/etsegenetes-projects/character-count" target="_blank">Live Demo</a>
                <a href="https://github.com/EtsegenetE/character-count"target="_blank">GitHub Repo</a>
            </div>

             <div className="project-card">
                <h3>Resturant Menu</h3>
                <p>A simple and visually appealing restaurant menu app designed with React and CSS. It displays a categorized list of food and drink items, allowing users to browse and filter through menu categories interactively.</p>
                <div className="p-img">
                    <img src={menu}  onClick={() => openImage(menu)}alt="" />
                    <img src={menu1} onClick={() => openImage(menu1)}alt="" />
                    <img src={menu2} onClick={() => openImage(menu2)}alt="" />
                </div>
                <a href="https://portfolio-little-lemon.vercel.app/ " target="_blank">Live Demo</a>
                <a href="https://github.com/EtsegenetE/portfolio-little-lemon" target="_blank">GitHub Repo</a>
            </div>

            <ImageModal 
                isOpen={isOpen}
                OnClose={() => setIsOpen(false)}
                imgSrc={selectedImg}
            />

        </div>
    );
}