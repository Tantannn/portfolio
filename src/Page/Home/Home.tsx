import React from "react";
import Nav from "../../Component/Nav/Nav";
import Cube from "../../Component/Cube/Cube";
import "./Home.css";
import Typewriter from "typewriter-effect";
import { ParticleBackground } from "../../Component/ParticleBackground/ParticleBackground";
const Home = () => {
  return (
    <div>
      <Nav />
      <Cube />
      <div className="mHome">
        <h1>Hi, I am Tan</h1>
        <div className="typewriter">
          <Typewriter
            options={{
              strings: [
                "Frontend Developer",
                "Backend Developer",
                "Fullstack Developer",
                "Mistakes make you stronger",
              ],
              autoStart: true,
              loop: true,
              deleteSpeed: 10,
            }}
          />
        </div>
        <p className="quote">
          “Every difficulty in life presents us with an opportunity to turn
          inward and to invoke our own submerged inner resources. The trials we
          endure can and should introduce us to our strengths.”
        </p>
        <p>— Epictetus</p>
      </div>
      <div className="pHome">
        <h2>
          <u>These are some of my projects</u>
        </h2>
        <div className="gHome">
          <div className="gProject">
            <img src="/e-commerce.png" alt="bookingwebsite" />
            <p className="project-title">
              <span className="code">&lt;</span> E-Commerce Website{" "}
              <span className="code">&#47;&gt;</span>
            </p>
          </div>
          <div className="gProject">
            <img src="/bookingwebsite.png" alt="bookingwebsite" />
            <p className="project-title">
              <span className="code">&lt;</span> Booking Website{" "}
              <span className="code">&#47;&gt;</span>
            </p>
          </div>
          <div className="gProject">
            <img src="/guessnumber.png" alt="bookingwebsite" />
            <p className="project-title">
              <span className="code">&lt;</span> Guess My Number!{" "}
              <span className="code">&#47;&gt;</span>
            </p>
          </div>
          <div className="gProject">
            <img src="/galaxy.png" alt="bookingwebsite" />
            <p className="project-title">
              <span className="code">&lt;</span> Galaxy{" "}
              <span className="code">&#47;&gt;</span>
            </p>
          </div>
          <div className="gProject">
            <img src="/movieapp.png" alt="bookingwebsite" />
            <p className="project-title">
              <span className="code">&lt;</span> Movie Website{" "}
              <span className="code">&#47;&gt;</span>
            </p>
          </div>
          <div className="gProject">
            <img src="/mapapp.png" alt="bookingwebsite" />
            <p className="project-title">
              <span className="code">&lt;</span> Exercise App{" "}
              <span className="code">&#47;&gt;</span>
            </p>
          </div>
        </div>
        <button>Show all</button>
      </div>
    </div>
  );
};

export default Home;
