import React, { useContext } from "react";
import { StoreContext } from "./store";

const ToDo = props => {
  const { dispatch } = useContext(StoreContext);

  return (
    <div
      className="card"
      onClick={() => {
        dispatch({ type: "toggleCompleted", payload: props.todo.id });
      }}
      className={`item${props.todo.completed ? " completed" : ""}`}
    >
      <p>{props.todo.item}</p>
    </div>
  );
};

export default ToDo;