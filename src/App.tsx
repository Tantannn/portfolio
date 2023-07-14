import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Page/Home/Home";
import { Projects } from "./Page/Projects/Projects";
import AnimatedCursor from "react-animated-cursor";
import Nav from "./Component/Nav/Nav";
function App() {
  return (
    <BrowserRouter>
      <AnimatedCursor
        innerSize={15}
        outerSize={15}
        color="85, 85 ,255"
        outerAlpha={0.4}
        innerScale={0.7}
        outerScale={5}
      />
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
