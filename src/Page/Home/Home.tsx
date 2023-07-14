// import Cube from "../../Component/Cube/Cube";
import "./Home.css";
import Typewriter from "typewriter-effect";
import { useState } from "react";
const Home = () => {
  const [pos, setPos] = useState(1);
  const onScroll = (e: any) => {
    let zoomSpeed = 0.1;
    if (pos < 0.4) return setPos(0.4);
    if (e.deltaY > 0) {
      setPos(pos - zoomSpeed);
    } else {
      setPos(pos + zoomSpeed);
    }
  };
  console.log(pos);
  return (
    <div onWheel={(e) => onScroll(e)}>
      <div
        className="mHome"
        style={{
          transformOrigin: "center",
          transform: `scale(${pos})`,
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
                "Mistakes make us stronger",
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
