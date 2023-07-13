import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Page/Home/Home'
import Cursor from './Component/Cursor/Cursor';
import { Projects } from './Page/Projects/Projects';
function App() {
  return (
    <BrowserRouter>
      <Cursor />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/projects' element={<Projects/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
