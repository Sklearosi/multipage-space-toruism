import Header from "./components/header/Header";
import {Routes, Route} from 'react-router-dom'
import Home from "./components/home/Home";

function App() {
  return (
    <div style={{backgroundImage : "url(assets/background-home-mobile.jpg)"}} className=" h-[100vh] bg-no-repeat bg-cover">
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
      </Routes>
    </div>
  );
}

export default App;
