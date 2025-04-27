import { useNavigate } from "react-router-dom";
import Button from "../components/Button";

const Landing = () => {

    const navigate = useNavigate()

    function playGame() {
        navigate("/game")
    }

  return (
    <div className="px-20 py-20">
      <div className="flex justify-center items-center">
        <div className="w-96">
          <img src="/img/chessboard.jpeg" alt="" />
        </div>
        <div className="pl-20">
          <h1 className="text-4xl text-white font-bold flex-wrap">Play chess online on the #1 site!</h1>
          <div className="p-10">
            <Button text="Play Online" onClick={playGame} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
