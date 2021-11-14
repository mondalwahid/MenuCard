import React from "react";
import "./style.css";

const UseEffect = () => {
  const initialState = 0;
  const [MyNumber, setMyNumber] = React.useState(initialState);
  React.useEffect(() => {
    document.title = `chats(${MyNumber})`;
  });
  return (
    <>
      <div className="main-div">
        <div className="buttons">
          <p>{MyNumber}</p>
          <button
            className="increment-button"
            onClick={() => setMyNumber(MyNumber + 1)}
          >
            INCREMENT
          </button>
        </div>
      </div>
    </>
  );
};

export default UseEffect;
