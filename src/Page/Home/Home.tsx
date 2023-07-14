// import Cube from "../../Component/Cube/Cube";
import "./Home.css";
import Typewriter from "typewriter-effect";
import { useState } from "react";
const Home = () => {
  const [pos, setPos] = useState({ x: 0, y: 0, scale: 1 });
  const onScroll = (e: any) => {
    // if (e.deltaY > 0) return
    const delta = e.deltaY * -0.01;
    const newScale = pos.scale + delta;

    const ratio = 1 - newScale / pos.scale;
    setPos({
      scale: newScale,
      x: pos.x + (e.clientX - pos.x) * ratio,
      y: pos.y + (e.clientY - pos.y) * ratio,
    });
  };
    console.log(pos)
  return (
    <div onWheel={(e) => onScroll(e)}>
      <div
        className="mHome"
        style={{
          transformOrigin: 'center',
          transform: `scale(${pos.scale})`,
        }}
      >
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
    </div>
  );
};

export default Home;
