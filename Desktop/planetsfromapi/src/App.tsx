import Header from "./components/header/Header";
import {Routes, Route} from 'react-router-dom'
import Home from "./components/home/Home";
import { useEffect, useState } from "react";

function App() {

  const [size, setSize] = useState<string>("mobile")

  const updateMedia = () => {
    if (window.innerWidth < 768) {
      setSize("mobile")
    } else if (window.innerWidth >= 768 && window.innerWidth < 1024) {
      setSize("tablet")
    } else if (window.innerWidth >= 1024) {
      setSize("desktop");
    }
  };

  useEffect(() => {
    updateMedia();

    window.addEventListener("resize", updateMedia);

    return () => {
      window.removeEventListener("resize", updateMedia);
    };
  }, []);

 

  return (
    <div style={{backgroundImage : `url(assets/background-home-${size}.jpg)`}} className=" h-[100vh] bg-no-repeat bg-cover overflow-hidden relative">
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
      </Routes>
    </div>
  );
}

export default App;
