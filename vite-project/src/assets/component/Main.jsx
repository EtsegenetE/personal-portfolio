import images from "../images/images.jpg";
import mouse from "../images/mouse.jpg";
import Skills from "./Skills";
export default function Main () {
    return (
        <div className="container" id="home">
            <h1>Front-end Developer</h1>
            <p>
        I'm a passionate Front-End Developer, specializing in JavaScript and React.
        <br /> I love building responsive, user-friendly web applications and continuously 
         <br />learning new technologies to improve my skills.
      </p>
      <Skills />


            <a href="#projects">
                <button className="btn">see my dev work</button>
            </a>
            <div className="image">
                <img src={images} alt="keyboadr" />
                <img src= {mouse} alt="mouse" className="mouse-img" />
            </div>

        </div>
    );
}