import { useState } from "react";

function Temperature(props){
  const [tempState,setTempState] = useState({
    "temp":props.celsius,
    "tempPost":"ºC",
    "celsiusMode":true,
  });

  function getFahrenheit(celsius){
    return (celsius * 9 / 5) + 32;
  }

  function toggleTemp(){
    let temp = tempState.celsiusMode?
    props.celsius:
    getFahrenheit(props.celsius);
    let post = tempState.celsiusMode?
    " ºC":
    " ºF";
    let mode = !tempState.celsiusMode;

    setTempState({
      "temp":temp,
      "tempPost":post,
      "celsiusMode":mode,
    });
  }

  return (<div>
    <h2 id="temp">{tempState.temp + tempState.tempPost}</h2>
    <button onClick={toggleTemp}>Change Temp</button>
    </div>)
}

export default Temperature;