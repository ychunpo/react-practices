import React, { createContext, useState, useContext } from 'react'

const Context = createContext();

function Child(props) {
  const { state, setState } = useContext(Context);
  const onButtonClick = () => {
    setState("後代知道了");
  };
  return (
    <>
      <div>{state}</div>
      <button onClick={onButtonClick}>后代知道了</button>
    </>
  );
}
function Child1() {
  return (
    <div>
      <Child />
    </div>
  );
}
function AncestorContext() {
  const [state, setState] = useState("state");
  return (
    <Context.Provider value={{ state, setState }}>
      <div>
        <Child1 />
      </div>
    </Context.Provider>
  );
}

export default AncestorContext;

