import { useEffect, useState } from "react";
import ApiComponent from "./components/api-component";
import Title from "./components/title";
import AppContextProvider from "./context/AppContextProvider";

const App = () => {
  const [count, setCount] = useState<number>(0);
  const [countTwo, setCountTwo] = useState<number>(0);

  useEffect(() => {
    // Отрабатываю только тогда когда состояние count меняется!
    // и больше никогда!
    console.log("Значение count изменилось:", count);
  }, [count]);

  useEffect(() => {
    // Отрабатываю только тогда когда состояние countTwo меняется!
    // и больше никогда!
    console.log("Значение count изменилось:", countTwo);
  }, [countTwo]);

  const handleButtonClick = (setState: any, counter: any) => {
    setState(counter + 1);
  };
  return (
    <div className="App">
      <AppContextProvider>
        <Title />
        <ApiComponent />
      </AppContextProvider>
      <button onClick={() => handleButtonClick(setCount, count)}>
        Увеличить count
      </button>
      <button onClick={() => handleButtonClick(setCountTwo, countTwo)}>
        Увеличить countTwo
      </button>
      <h2>{count}</h2>
      <h2>{countTwo}</h2>
    </div>
  );
};

export default App;

// const App = () => {
//   const [name, setName] = useState<string>("");

//   const charOne: string = "https://rickandmortyapi.com/api/character/1";
//   const charTwo: string = "https://rickandmortyapi.com/api/character/2";

//   useEffect(() => {

//     console.log(`Состояние name изменилось на ${name}`);
//   }, [name]);

//   const getCharacter = (url: string) => {
//     fetch(url)
//       .then((response) => response.json())
//       .then((data) => {
//         const fetchedName = data.name;
//         setName(fetchedName);
//       })
//       .catch((error) => {
//         console.log("Error fetching character data:", error);
//       });
//   };

//   return (
//     <div className="App">
//       <button onClick={() => getCharacter(charOne)}>
//         Получить первого персонажа
//       </button>
//       <button onClick={() => getCharacter(charTwo)}>
//         Получить первого персонажа
//       </button>
//       <h1>Персонаж {name}</h1>
//     </div>
//   );
// };

// export default App;
