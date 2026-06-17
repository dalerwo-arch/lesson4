import { useEffect } from "react";
import Home from "../src/component/pages/home";
import Aos from "aos";
import "aos/dist/aos.css";


function App(){
  useEffect(()=> {
    Aos.init()
  },[])
  return <>
    <Home />
  </>
}

export default App;