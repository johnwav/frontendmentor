import { useEffect, useState } from "react";
import "./App.css";
import { dice, divDesktop } from "./assets";

function App() {
  const [data, setData] = useState();
  const [loaded, setLoaded] = useState(false);

  async function getData() {
    await fetch("https://api.adviceslip.com/advice")
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw response;
      })
      .then((data) => {
        setData(data);
      })
      .catch((error) => {
        console.error("Error Fetching Data", error);
      })
      .finally(() => {
        setLoaded(true);
      });
  }

  useEffect(() => {
    getData();
  }, []);

  const handleClick  = () => {
    getData()
  }

  return (
    <>
      {loaded ? (
        <div className="cont">
          <div className="Container">
            <div className="adviceNumber">
              ADVICE #<span>{data.slip.id}</span>
            </div>
            <div className="advice">
              {data.slip.advice}
            </div>
            <img
              className="divider"
              src={divDesktop.img}
              alt={divDesktop.alt}
            ></img>
            <button className="loadmore"
            onClick={handleClick}>
              <img src={dice.img} alt={dice.alt}></img>
            </button>
          </div>
        </div>
      ) : null}
    </>
  );
}

export default App;
