// 이름이나 문자열을 입력 받을 때, 간결하고 빠르게 할 수 있는 방법의 코드임. ref를 이용한 방법.

import { useState, useRef } from "react";

export default function Player() {
  const playerName = useRef();

  const [enteredPlayerName, setEnteredPlayerName] = useState(null);
  // const[submitted, setSubmitted] = useState(false);

  // function handleChange(event){
  //   setSubmitted(false);
  //   setEnteredPlayerName(event.target.value);
  // }

  function handleClick() {
    // setSubmitted(true);
    setEnteredPlayerName(playerName.current.value);
    playerName.current.value = ""; // 문자열을 초기화 시켜줌.
  }
  return (
    <section id="player">
      <p>
        <input ref={playerName} type="text" />
        <button onClick={handleClick}>Set Name</button>
      </p>
      <h2>Welcome {enteredPlayerName ?? ""} 🤎</h2>
    </section>
  );
}
