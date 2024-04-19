import "../CardStack/CardStack.css";
import Card from "../Card/Card";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function CardStack({ setActiveCard, activeCard }) {
  const cardArr = useSelector((state) => state.card.cardStack);
  
  const navigate = useNavigate();
  
  function handleNavigate() {
    navigate("/addCard");
  }
  
  function handleClick(card) {
    setActiveCard(card);
  }

  //if active card present then print stack of cards without avtive card else print all cards in the stack
  if (activeCard) {
    const cardStack = cardArr.filter((card) => card !== activeCard);
    return (
      <div className="cardstack_container">
        {cardStack.map((card, index) => (
          <div
            key={index}
            className="card"
            onClick={() => {
              handleClick(card);
            }}
          >
            <Card cardInfo={card} />
          </div>
        ))}
         <input
          className="button"
          type="button"
          value="ADD NEW CARD"
          onClick={() => handleNavigate()}
        />
      </div>
    );
  } else {
    return (
      <div className="cardstack_container">
        {cardArr.map((card, index) => (
          <div
            key={index}
            className="card"
            onClick={() => {
              handleClick(card);
            }}
          >
            <Card cardInfo={card} />
          </div>
        ))}
         <input
          className="button"
          type="button"
          value="ADD NEW CARD"
          onClick={() => handleNavigate()}
        />
      </div>
    );
  }
}
export default CardStack;
