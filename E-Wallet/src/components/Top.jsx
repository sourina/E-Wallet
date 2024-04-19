import Card from "./Card/Card";


function Top() {
  //resetting the default value of card
  const card = {
    cardNumber: "XXXX XXXX XXXX XXXX",
    name: "FIRSTNAME LASTNAME",
    cvv: "",
    vendor: "",
    validity: "MM/YY",
  };

  return (
    <>
      <div>
        <Card cardInfo={card} />
      </div>
    </>
  );
}

export default Top;
