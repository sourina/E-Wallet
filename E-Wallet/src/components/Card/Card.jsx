import chipLogo from "../../assets/assets/chip-dark.svg";
import "../Card/Card.css";
import { useContext } from "react";
import {
  CardContext,
  NameContext,
  ValidityContext,
  venderContext,
} from "../../pages/AddCard/AddCard";

function Card(cardInfo) {
  //using useContext to get the value of card
  const cardNum = useContext(CardContext);
  const name = useContext(NameContext);
  const validity = useContext(ValidityContext);
  const venderValue = useContext(venderContext);

  //checking if cardInfo is present as a prop, if present print it else use values from UseContext
  if (cardInfo.cardInfo) {
    return (
      <div className="card_container cardStack" id={cardInfo.cardInfo.vendor}>
        <img src={chipLogo} alt="logo" className="logo_chip" />
        <p className="card_no">{cardInfo.cardInfo.cardNumber}</p>
        <p className="cardHolder_placeholder"> CARDHOLDERS NAME</p>
        <p className="cardHolder_name"> {cardInfo.cardInfo.name}</p>
        <p className="card_validity"> VALID THRU</p>
        <p className="card_validity_dt"> {cardInfo.cardInfo.validity}</p>
      </div>
    );
  } else {
    return (
      <div className="card_container" id={venderValue}>
        <img src={chipLogo} alt="logo" className="logo_chip" />
        <p className="card_no">{cardNum}</p>
        <p className="cardHolder_placeholder"> CARDHOLDERS NAME</p>
        <p className="cardHolder_name"> {name}</p>
        <p className="card_validity"> VALID THRU</p>
        <p className="card_validity_dt"> {validity}</p>
      </div>
    );
  }
}

export default Card;
