import { createContext, useState } from "react";

const FramesContext = createContext({
  ids: [],
  addFrame: (id) => {},
  removeFrame: (id) => {},
});

function FramesContextProvider({ children }) {
  const [wordIds, setWordIds] = useState([]);

  function addToFrame(id) {
    setWordIds((currentWordIds) => [...currentWordIds, id]);
  }
  function removeFromFrame(id) {
    setWordIds((currentWordIds) =>
      currentWordIds.filter((wordId) => wordId !== id)
    );
  }

  const value = {
    ids: wordIds,
    addToFrame: addToFrame,
    removeFromFrame: removeFromFrame,
  };

  return (
    <FramesContext.Provider value={value}>
        {children}
        </FramesContext.Provider>
  );
}

export default FramesContextProvider;
