import "../CardForm/CardForm.css";
import { useContext, useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  ChangeCardNum,
  ChangeName,
  ChangeValidity,
  ChangeVender,
  CardContext,
  NameContext,
  ValidityContext,
  venderContext,
  ChangeCvv,
  cvvContext,
} from "../../pages/AddCard/AddCard";
import { addCard } from "../../reducers/cardReducer";
import { useNavigate } from "react-router-dom";

function CardForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  //useContext to set the present card value
  const setCardNum = useContext(ChangeCardNum);
  const setName = useContext(ChangeName);
  const setValidity = useContext(ChangeValidity);
  const setVenderValue = useContext(ChangeVender);
  const setCvv = useContext(ChangeCvv);

  //usecontaxt to get the present card value
  const cardNum = useContext(CardContext);
  const name = useContext(NameContext);
  const validity = useContext(ValidityContext);
  const venderValue = useContext(venderContext);
  const cvv = useContext(cvvContext);

  //creating a card object
  const [cardData, setCardData] = useState({
    cardNumber: "",
    name: "",
    validity: "",
    cvv: "",
    vendor: "",
  });

  //saving the card values in redux
  useEffect(() => {
    if (
      cardData.cardNumber !== "" &&
      cardData.name !== "" &&
      cardData.validity !== "" &&
      cardData.cvv !== "" &&
      cardData.vendor !== ""
    ) {
      dispatchCard();
    }
  }, [cardData]);

  function updateCardData() {
    setCardData({
      cardNumber: cardNum,
      name: name,
      validity: validity,
      cvv: cvv,
      vendor: venderValue,
    });
  }

  function dispatchCard() {
    dispatch(addCard(cardData));
    navigate("/");
  }

  return (
    <div className="form_container">
      <form>
        <label id="cardNo_placeholder">CARD NUMBER</label>
        <input
          type="number"
          id="cardNum"
          placeholder="XXXX XXXX XXXX XXXX"
          onKeyUp={(event) => {
            setCardNum(event.target.value);
          }}
        />
        <br></br>
        <label id="name_placeholder">CARDHOLDER NAME</label>
        <input
          type="text"
          id="name"
          placeholder="FIRSTNAME LASTNAME"
          onKeyUp={(event) => {
            setName(event.target.value);
          }}
        />
        <br></br>
        <label id="validity_placeholder">VALID THRU</label>
        <input
          type="text"
          id="validity"
          placeholder="MM/YY"
          onKeyUp={(event) => {
            setValidity(event.target.value);
          }}
        />
        <br></br>
        <label id="cvv_placeholder">CVV</label>
        <input
          type="number"
          id="cvv"
          placeholder="123"
          onKeyUp={(event) => {
            setCvv(event.target.value);
          }}
        />
        <br></br>
        <label id="vendor_placeholder">VENDOR</label>

        <select
          name="vendors"
          id="vendor"
          onChange={(event) => {
            setVenderValue(event.target.value);
          }}
        >
          <option value="SELECT VENDER"> --- SELECT VENDER ---</option>
          <option value="one">BITCOIN INC</option>
          <option value="two">NINJA BANK</option>
          <option value="three">BLOCK CHAIN INC</option>
          <option value="four">EVIL CORP</option>
        </select>
        <br></br>
        <input
          type="button"
          value="ADD CARD"
          id="submit"
          onClick={() => updateCardData()}
        />
      </form>
    </div>
  );
}

export default CardForm;
