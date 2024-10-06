import "./App.css";
import { useEffect, useState } from "react";
import Background from "./components/Background";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

let heroData = [
  {
    text1: "Empowering Communities with",
    text2: "Real-Time Water Pollution Data",
  },
  {
    text1: "Transforming Environmental Monitoring",
    text2: "through open space data ",
  },
  {
    text1: "Harnessing Technology to",
    text2: "Safeguard Our Water Resources",
  },
];

function App() {
  const [heroCount, setHeroCount] = useState(0);
  useEffect(() => {
    setInterval(()=>{
        setHeroCount((count) => {return count===2?0:count+1})
    }, 4000)
  },[])

  return (
    <div className="App">
      <Background heroCount={heroCount} />
      <Navbar />
      <Hero
        heroData={heroData[heroCount]}
        heroCount={heroCount}
        setHeroCount={setHeroCount}
      />
    </div>
  );
}

export default App;
