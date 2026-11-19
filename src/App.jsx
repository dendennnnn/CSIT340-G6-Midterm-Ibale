import { useState } from "react";
import Hero from "./components/Hero";
import StatCard from "./components/StatCard";
import FeatureCard from "./components/FeatureCard";
import Footer from "./components/Footer";
import Stats from "./components/Stats";
import Features from "./components/Features";

function App() {
  const [seats, setSeats] = useState(1);
  const [months, setMonths] = useState(1);

  function handleAddSeat() {
    setSeats(seats + 1);
  }

  function handleAddMonth() {
    setMonths(months + 1);
  }

  function handleReset() {
    setSeats(1);
    setMonths(1);
  }

  return (
    <div className="flex min-h-screen flex-col bg-[#DDDDDD] text-[#000000]">
      


      

      
    </div>
  );
}

export default App;