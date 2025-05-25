import { useState } from "react";
import ButtonComponent from "./components/ButtonComponent";

function App() {
  // const [arr, setArr] = useState(Array.fill());

  let [box1, setBox1] = useState("");
  let [box2, setBox2] = useState("");
  let [box3, setBox3] = useState("");
  let [box4, setBox4] = useState("");
  let [box5, setBox5] = useState("");
  let [box6, setBox6] = useState("");
  let [box7, setBox7] = useState("");
  let [box8, setBox8] = useState("");
  let [box9, setBox9] = useState("");

  let [isFirstUser, setIsFirstUser] = useState(true);

  let handleOnClick = (setFunction) => {
    setFunction(isFirstUser ? "X" : "O");
    setIsFirstUser(!isFirstUser);
  };

  return (
    <div className="h-full w-full flex flex-col justify-center items-center gap-6">
      <span className="text-[32px] text-gray-700">Tic Tac Toe Game</span>
      <div className="flex flex-col">
        <div className="flex">
          <ButtonComponent text={box1} onClick={() => handleOnClick(setBox1)} />
          <ButtonComponent text={box2} onClick={() => handleOnClick(setBox2)} />
          <ButtonComponent text={box3} onClick={() => handleOnClick(setBox3)} />
        </div>
        <div className="flex">
          <ButtonComponent text={box4} onClick={() => handleOnClick(setBox4)} />
          <ButtonComponent text={box5} onClick={() => handleOnClick(setBox5)} />
          <ButtonComponent text={box6} onClick={() => handleOnClick(setBox6)} />
        </div>
        <div className="flex">
          <ButtonComponent text={box7} onClick={() => handleOnClick(setBox7)} />
          <ButtonComponent text={box8} onClick={() => handleOnClick(setBox8)} />
          <ButtonComponent text={box9} onClick={() => handleOnClick(setBox9)} />
        </div>
      </div>
    </div>
  );
}

export default App;
