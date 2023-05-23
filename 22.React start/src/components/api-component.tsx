import { useContext } from "react";
import AppContext from "../context/AppContext";

const ApiComponent = () => {
  const appContext = useContext(AppContext);

  const { characterName } = appContext;
  return <div>Имя: {characterName}</div>;
};

export default ApiComponent;
