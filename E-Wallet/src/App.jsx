import "./App.css";
import router from "./router/router";
import { RouterProvider } from "react-router-dom";
import { useState, createContext } from "react";

// const CardContext = createContext(undefined);
// const ChangeCardNum = createContext(undefined);
// const NameContext = createContext(undefined);
// const ChangeName = createContext(undefined);
// const ValidityContext = createContext(undefined);
// const ChangeValidity = createContext(undefined);
// const venderContext = createContext(undefined);
// const ChangeVender = createContext(undefined);
// const cvvContext = createContext(undefined);
// const ChangeCvv = createContext(undefined);

function App() {
  // const [cardNum, setCardNum] = useState("XXXX XXXX XXXX XXXX");
  // const [name, setName] = useState("FIRSTNAME LASTNAME");
  // const [validity, setValidity] = useState("MM/YY");
  // const [venderValue, setVenderValue] = useState("");
  // const [cvv, setCvv] = useState("");

  return (
    <main>
      {/* <CardContext.Provider value={cardNum}>
        <ChangeCardNum.Provider value={setCardNum}>
          <NameContext.Provider value={name}>
            <ChangeName.Provider value={setName}>
              <ValidityContext.Provider value={validity}>
                <ChangeValidity.Provider value={setValidity}>
                  <venderContext.Provider value={venderValue}>
                    <ChangeVender.Provider value={setVenderValue}>
                      <cvvContext.Provider value={cvv}>
                        <ChangeCvv.Provider value={setCvv}> */}
      <RouterProvider router={router} />
      {/* </ChangeCvv.Provider>
                      </cvvContext.Provider>
                    </ChangeVender.Provider>
                  </venderContext.Provider>
                </ChangeValidity.Provider>
              </ValidityContext.Provider>
            </ChangeName.Provider>
          </NameContext.Provider>
        </ChangeCardNum.Provider>
      </CardContext.Provider> */}
    </main>
  );
}
// export {
//   CardContext,
//   ChangeCardNum,
//   NameContext,
//   ChangeName,
//   ValidityContext,
//   ChangeValidity,
//   venderContext,
//   ChangeVender,
//   cvvContext,
//   ChangeCvv,
// };
export default App;
