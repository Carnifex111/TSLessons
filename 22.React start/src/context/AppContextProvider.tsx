import React, { useEffect, useState } from "react";
import AppContext from "./AppContext";

interface AppContextProviderProps {
  children: React.ReactNode;
}

const AppContextProvider: React.FC<AppContextProviderProps> = ({
  children,
}) => {
  const [name, setName] = useState<string>("Ivan Shirov");
  const [age, setAge] = useState<number>(25);
  const [characterName, setCharacterName] = useState<string>("");

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character/1")
      .then((response) => response.json())
      .then((data) => {
        const fetchedName = data.name;
        setCharacterName(fetchedName);
      })
      .catch((error) => {
        console.log("Error fetching character data:", error);
      });
  }, [characterName]);

  const value = {
    name,
    age,
    characterName,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export default AppContextProvider;
