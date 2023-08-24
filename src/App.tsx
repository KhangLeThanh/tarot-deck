import React, { useState } from "react";
import "./App.css";

export default function App() {
  const randomNumberInRange = (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };
  const [num, setNum] = useState(randomNumberInRange(1, 78));

  console.log("test number", num);
  const setTarotCard = (tarotNumber: number) => {
    switch (tarotNumber) {
      case 1:
        return <img style={{width: "12rem"}} src={require("./tarot-cards/0.jpeg")} />;
      case 2:
        return <img style={{width: "12rem"}} src={require("./tarot-cards/1.jpeg")} />;
      case 3:
        return <img style={{width: "12rem"}} src={require("./tarot-cards/2.jpeg")} />;
      case 4:
        return <img style={{width: "12rem"}} src={require("./tarot-cards/3.jpeg")} />;
      case 5:
        return <img style={{width: "12rem"}} src={require("./tarot-cards/4.jpeg")} />;
      case 6:
        return <img style={{width: "12rem"}} src={require("./tarot-cards/5.jpeg")} />;
      case 7:
        return <img style={{width: "12rem"}} src={require("./tarot-cards/6.jpeg")} />;
      case 8:
        return <img style={{width: "12rem"}} src={require("./tarot-cards/7.jpeg")} />;
      case 9:
        return <img style={{width: "12rem"}} src={require("./tarot-cards/8.jpeg")} />;
      case 10:
        return <img style={{width: "12rem"}} src={require("./tarot-cards/9.jpeg")} />;
      case 11:
        return <img style={{width: "12rem"}} src={require("./tarot-cards/10.jpeg")} />;
      case 12:
        return <img style={{width: "12rem"}} src={require("./tarot-cards/11.jpeg")} />;
      case 13:
        return <img style={{width: "12rem"}} src={require("./tarot-cards/12.jpeg")} />;
      case 14:
        return <img style={{width: "12rem"}} src={require("./tarot-cards/13.jpeg")} />;
      case 15:
        return <img style={{width: "12rem"}} src={require("./tarot-cards/14.jpeg")} />;
      case 16:
        return <img style={{width: "12rem"}} src={require("./tarot-cards/15.jpeg")} />;
      case 17:
        return <img style={{width: "12rem"}} src={require("./tarot-cards/16.jpeg")} />;
      case 18:
        return <img style={{width: "12rem"}} src={require("./tarot-cards/17.jpeg")} />;
      case 19:
        return <img style={{width: "12rem"}} src={require("./tarot-cards/18.jpeg")} />;
      case 20:
        return <img style={{width: "12rem"}} src={require("./tarot-cards/19.jpeg")} />;
      case 21:
        return <img style={{width: "12rem"}} src={require("./tarot-cards/20.jpeg")} />;
      case 22:
        return <img style={{width: "12rem"}} src={require("./tarot-cards/21.jpeg")} />;
      case 23:
        return <img style={{width: "12rem"}} src={require("./tarot-cards/W1.jpeg")} />;
      case 24:
        return <img style={{width: "12rem"}} src={require("./tarot-cards/W2.jpeg")} />;
      case 25:
        return <img style={{width: "12rem"}} src={require("./tarot-cards/W3.jpeg")} />;
      case 26:
        return <img style={{width: "12rem"}} src={require("./tarot-cards/W4.jpeg")} />;
      case 27:
        return <img style={{width: "12rem"}} src={require("./tarot-cards/W5.jpeg")} />;
      case 28:
        return <img style={{width: "12rem"}} src={require("./tarot-cards/W6.jpeg")} />;
      case 29:
        return <img style={{width: "12rem"}} src={require("./tarot-cards/W7.jpeg")} />;
      case 30:
        return <img style={{width: "12rem"}} src={require("./tarot-cards/W8.jpeg")} />;
      case 31:
        return <img style={{width: "12rem"}} src={require("./tarot-cards/W9.jpeg")} />;
      case 32:
        return <img style={{width: "12rem"}} src={require("./tarot-cards/W10.jpeg")} />;
      case 33:
        return <img style={{width: "12rem"}} src={require("./tarot-cards/W11.jpeg")} />;
      case 34:
        return <img style={{width: "12rem"}} src={require("./tarot-cards/W12.jpeg")} />;
      case 35:
        return <img style={{width: "12rem"}} src={require("./tarot-cards/W13.jpeg")} />;
      case 36:
        return <img style={{width: "12rem"}} src={require("./tarot-cards/W14.jpeg")} />;
      case 37:
        return <img style={{width: "12rem"}} src={require("./tarot-cards/C1.jpeg")} />;
      case 38:
        return <img style={{width: "12rem"}} src={require("./tarot-cards/C2.jpeg")} />;
      case 39:
        return <img style={{width: "12rem"}} src={require("./tarot-cards/C3.jpeg")} />;
      case 40:
        return <img style={{width: "12rem"}} src={require("./tarot-cards/C4.jpeg")} />;
      case 41:
        return <img style={{width: "12rem"}} src={require("./tarot-cards/C5.jpeg")} />;
      case 42:
        return <img style={{width: "12rem"}} src={require("./tarot-cards/C6.jpeg")} />;
      case 43:
        return <img style={{width: "12rem"}} src={require("./tarot-cards/C7.jpeg")} />;
      case 44:
        return <img style={{width: "12rem"}} src={require("./tarot-cards/C8.jpeg")} />;
      case 45:
        return <img style={{width: "12rem"}} src={require("./tarot-cards/C9.jpeg")} />;
      case 46:
        return <img style={{width: "12rem"}} src={require("./tarot-cards/C10.jpeg")} />;
      case 47:
        return <img style={{width: "12rem"}} src={require("./tarot-cards/C11.jpeg")} />;
      case 48:
        return <img style={{width: "12rem"}} src={require("./tarot-cards/C12.jpeg")} />;
      case 49:
        return <img style={{width: "12rem"}} src={require("./tarot-cards/C13.jpeg")} />;
      case 50:
        return <img style={{width: "12rem"}} src={require("./tarot-cards/C14.jpeg")} />;
      case 51:
        return <img style={{width: "12rem"}} src={require("./tarot-cards/S1.jpeg")} />;
      case 52:
        return <img style={{width: "12rem"}} src={require("./tarot-cards/S2.jpeg")} />;
      case 53:
        return <img style={{width: "12rem"}} src={require("./tarot-cards/S3.jpeg")} />;
      case 54:
        return <img style={{width: "12rem"}} src={require("./tarot-cards/S4.jpeg")} />;
      case 55:
        return <img style={{width: "12rem"}} src={require("./tarot-cards/S5.jpeg")} />;
      case 56:
        return <img style={{width: "12rem"}} src={require("./tarot-cards/S6.jpeg")} />;
      case 57:
        return <img style={{width: "12rem"}} src={require("./tarot-cards/S7.jpeg")} />;
      case 58:
        return <img style={{width: "12rem"}} src={require("./tarot-cards/S8.jpeg")} />;
      case 59:
        return <img style={{width: "12rem"}} src={require("./tarot-cards/S9.jpeg")} />;
      case 60:
        return <img style={{width: "12rem"}} src={require("./tarot-cards/S10.jpeg")} />;
      case 61:
        return <img style={{width: "12rem"}} src={require("./tarot-cards/S11.jpeg")} />;
      case 62:
        return <img style={{width: "12rem"}} src={require("./tarot-cards/S12.jpeg")} />;
      case 63:
        return <img style={{width: "12rem"}} src={require("./tarot-cards/S13.jpeg")} />;
      case 64:
        return <img style={{width: "12rem"}} src={require("./tarot-cards/S14.jpeg")} />;
      case 65:
        return <img style={{width: "12rem"}} src={require("./tarot-cards/P1.jpeg")} />;
      case 66:
        return <img style={{width: "12rem"}} src={require("./tarot-cards/P2.jpeg")} />;
      case 67:
        return <img style={{width: "12rem"}} src={require("./tarot-cards/P3.jpeg")} />;
      case 68:
        return <img style={{width: "12rem"}} src={require("./tarot-cards/P4.jpeg")} />;
      case 69:
        return <img style={{width: "12rem"}} src={require("./tarot-cards/P5.jpeg")} />;
      case 70:
        return <img style={{width: "12rem"}} src={require("./tarot-cards/P6.jpeg")} />;
      case 71:
        return <img style={{width: "12rem"}} src={require("./tarot-cards/P7.jpeg")} />;
      case 72:
        return <img style={{width: "12rem"}} src={require("./tarot-cards/P8.jpeg")} />;
      case 73:
        return <img style={{width: "12rem"}} src={require("./tarot-cards/P9.jpeg")} />;
      case 74:
        return <img style={{width: "12rem"}} src={require("./tarot-cards/P10.jpeg")} />;
      case 75:
        return <img style={{width: "12rem"}} src={require("./tarot-cards/P11.jpeg")} />;
      case 76:
        return <img style={{width: "12rem"}} src={require("./tarot-cards/P12.jpeg")} />;
      case 77:
        return <img style={{width: "12rem"}} src={require("./tarot-cards/P13.jpeg")} />;
      case 78:
        return <img style={{width: "12rem"}} src={require("./tarot-cards/P14.jpeg")} />;
      default:
        return <img style={{width: "12rem"}} src={require("./tarot-cards/1.jpeg")} />;
    }
  };
  return <>{setTarotCard(num)}</>;
}
