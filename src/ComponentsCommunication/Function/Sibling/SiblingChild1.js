import React, { useState } from "react";
import './sibling.css';

export default function SiblingChild1(props) {
  const { addChild2List, deleteChild2List } = props;
  const [inpValue, setInpValue] = useState("");

  const addList = () => {
    if (inpValue) {
      addChild2List(inpValue);
    }
  };

  const deleteList = () => {
    deleteChild2List(0);
  };
  return (
    <>
      <div className="child-1">
        <h4 style={{ textAlign: "left" }}>我是Child1组件</h4>
        <div style={{ textAlign: "left" }}>
          <input
            placeholder="请输入名字"
            value={inpValue}
            onChange={(e) => setInpValue(e.target.value)}
          />
          <button onClick={addList}>为Child2组件的list添加一项</button>
          <button onClick={deleteList}>删除第一项</button>
        </div>
      </div>
    </>
  );
}
