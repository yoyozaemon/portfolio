import './App.css'
import {Routes,Route} from "react-router-dom";
import Home from './components/Home';
import About from '.components/About';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div className="app-container container-fluid">
      <div className="row flex-nowrap">
        
        <Sidebar></Sidebar>
        <Routes>
 
          <Route path="/" element={ <Home/> } exact></Route>
          <Route path="/about" element={<About/>}></Route>
          <Route path="/skills" element={<Skills/>}></Route>
          <Route path="/resume" element={<Resume/>}></Route>
          <Route path="/mywork" element={<MyWork/>}></Route>
        </Routes>

      </div>
    </div>
  );
}

export default App;
