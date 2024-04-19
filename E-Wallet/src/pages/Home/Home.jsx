import "../Home/Home.css";
import { useState } from "react";
import CardStack from "../../components/CardStack/CardStack";
import Card from "../../components/Card/Card";
import Top from "../../components/Top";

function Home() {
  const [activeCard, setActiveCard] = useState(null);//set an active card

  //checking if active card present, then show information of active card else default card is shown
  if (activeCard) {
    return (
      <div className="home_container">
        <h1 className="heading">E-Wallet</h1>
        <h3>Active card</h3>
        <Card cardInfo={activeCard} />
        <CardStack setActiveCard={setActiveCard} activeCard={activeCard} />
       
      </div>
    );
  } else {
    return (
      <div className="home_container ">
        <h1 className="heading">E-Wallet</h1>
        <Top />
        <CardStack setActiveCard={setActiveCard} />
       
      </div>
    );
  }
}

export default Home;
