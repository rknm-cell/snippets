import { useState, useEffect, createContext } from "react";


const AppStateContext = createContext();

const AppStateProvider = () => {
const [words, setWords] = useState
  useEffect(() => {
    fetch("http://127.0.0.1:5555/words")
      // change fetch addres to ip address of local network
      // 10.129.3.215

      .then((r) => r.json())
      .then((data) => {
        console.log(data);
        setWords(data);
      });
  }, []);
  return (
    <AppStateContext.Provider value={{words, setWords}}>
     
    </AppStateContext.Provider>
  );
};
export default AppStateProvider