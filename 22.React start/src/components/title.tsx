import { useContext } from "react";
import AppContext from "../context/AppContext";

const Title = () => {
  const appContext = useContext(AppContext);

  const { name, age, group, color, nick, theme } = appContext;
  return (
    <div style={{ color: theme }}>
      Имя: {name} Возраст: {age}
      Группа: {group}
      Username: {nick}
    </div>
  );
};

export default Title;
