import "../AddCard/AddCard.css";
import { useState, createContext } from "react";
import CardForm from "../../components/CardForm/CardForm";
import Card from "../../components/Card/Card";

// initializing useContext
const CardContext = createContext(undefined);
const ChangeCardNum = createContext(undefined);
const NameContext = createContext(undefined);
const ChangeName = createContext(undefined);
const ValidityContext = createContext(undefined);
const ChangeValidity = createContext(undefined);
const venderContext = createContext(undefined);
const ChangeVender = createContext(undefined);
const cvvContext = createContext(undefined);
const ChangeCvv = createContext(undefined);

function AddCard() {
  const [cardNum, setCardNum] = useState("XXXX XXXX XXXX XXXX");
  const [name, setName] = useState("FIRSTNAME LASTNAME");
  const [validity, setValidity] = useState("MM/YY");
  const [venderValue, setVenderValue] = useState("");
  const [cvv, setCvv] = useState("");

  return (
    <main>
      <CardContext.Provider value={cardNum}>
        <ChangeCardNum.Provider value={setCardNum}>
          <NameContext.Provider value={name}>
            <ChangeName.Provider value={setName}>
              <ValidityContext.Provider value={validity}>
                <ChangeValidity.Provider value={setValidity}>
                  <venderContext.Provider value={venderValue}>
                    <ChangeVender.Provider value={setVenderValue}>
                      <cvvContext.Provider value={cvv}>
                        <ChangeCvv.Provider value={setCvv}>
                          <h1>ADD A NEW BANK CARD</h1>
                          <Card />
                          <CardForm />
                        </ChangeCvv.Provider>
                      </cvvContext.Provider>
                    </ChangeVender.Provider>
                  </venderContext.Provider>
                </ChangeValidity.Provider>
              </ValidityContext.Provider>
            </ChangeName.Provider>
          </NameContext.Provider>
        </ChangeCardNum.Provider>
      </CardContext.Provider>
    </main>
  );
}

export {
  CardContext,
  ChangeCardNum,
  NameContext,
  ChangeName,
  ValidityContext,
  ChangeValidity,
  venderContext,
  ChangeVender,
  cvvContext,
  ChangeCvv,
};

export default AddCard;
