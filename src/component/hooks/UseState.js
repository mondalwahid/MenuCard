import React from "react";
import "./style.css";

const UseState = () => {
  const initialState = 0;
  const [MyNumber, setMyNumber] = React.useState(initialState);
  return (
    <>
      <div className="main-div">
        <div className="buttons">
          <button
            className="increment-button"
            onClick={() => setMyNumber(MyNumber + 1)}
          >
            INCREMENT
          </button>
          <p>{MyNumber}</p>
          <button
            className="decrement-button"
            onClick={() =>
              MyNumber > 0 ? setMyNumber(MyNumber - 1) : setMyNumber(0)
            }
          >
            DECREMENT
          </button>
        </div>
      </div>
    </>
  );
};

export default UseState;
