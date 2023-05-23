import { useContext } from "react";
import AppContext from "../context/AppContext";

const Title = () => {
  const appContext = useContext(AppContext);

  const { name, age } = appContext;
  return (
    <div>
      Имя: {name} Возраст: {age}
    </div>
  );
};

export default Title;
