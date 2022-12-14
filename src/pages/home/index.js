import Button from "../../components/buttons";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  const onClickButton = (url) => {
    navigate(url);
  };

  return (
    <Button
      onClick={() => onClickButton("/game")}
      text="Haz click para iniciar el juego"
    />
  );
}

export default Home;
