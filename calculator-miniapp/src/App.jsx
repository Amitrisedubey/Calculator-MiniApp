import "./App.css";
import { useState } from "react";
import "./calc.css";
import { RiDeleteBack2Fill } from "react-icons/ri";
function App() {
  const [data, setData] = useState("");
  console.log(data);
  const caldata = (value) => {
    if (value === "=") {
      const result = eval(data) || "";
      setData(result.toString());
    } else if (value === "AC") {
      const dat = "";
      setData(dat);
    } else if (value === "x") {
      const re = data.slice(0, -1);
      setData(re);
    } else {
      setData((prevData) => prevData + value);
    }
  };
  return (
    <div className="App">
      <div className="main">
        <div style={{ backgroundColor: "green" }}>
          <h1 style={{ color: "white" }}>Calculator</h1>
        </div>

        <div className="display">
          <p>{data}</p>
        </div>
        <div className="keyboard">
          <button className="fir" onClick={() => caldata("AC")}>
            AC
          </button>
          <button className="fir">+/-</button>
          <button className="fir" onClick={() => caldata("%")}>
            %
          </button>
          <button className="col" onClick={() => caldata("/")}>
            ÷
          </button>
          <button className="num" onClick={() => caldata(7)}>
            7
          </button>
          <button className="num" onClick={() => caldata(8)}>
            8
          </button>
          <button className="num" onClick={() => caldata(9)}>
            9
          </button>
          <button className="col" onClick={() => caldata("*")}>
            *
          </button>
          <button className="num" onClick={() => caldata(4)}>
            4
          </button>
          <button className="num" onClick={() => caldata(5)}>
            5
          </button>
          <button className="num" onClick={() => caldata(6)}>
            6
          </button>
          <button className="col" onClick={() => caldata("-")}>
            -
          </button>
          <button className="num" onClick={() => caldata(1)}>
            1
          </button>
          <button className="num" onClick={() => caldata(2)}>
            2
          </button>
          <button className="num" onClick={() => caldata(3)}>
            3
          </button>
          <button className="col" onClick={() => caldata("+")}>
            +
          </button>
          <button className="num" onClick={() => caldata(0)}>
            0
          </button>
          <button className="num" onClick={() => caldata("x")}>
            <RiDeleteBack2Fill />
          </button>
          <button className="num" onClick={() => caldata(".")}>
            .
          </button>
          <button className="col" onClick={() => caldata("=")}>
            =
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
