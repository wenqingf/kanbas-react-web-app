import React from "react";
import Add from "./Add.js";
import ClickEvent from "./ClickEvent.js";
import PassingDataOnEvent from "./PassingDataOnEvent.js";
import PassingFunctions from "./PassingFunctions.js";
import EventObject from "./EventObject.js";
import Counter from "./Counter.js";
import BooleanStateVariables from "./BolleanStateVariables.js";
import StringStateVariables from "./StringStateVariables.js";
import DateStateVariable from "./DateStateVariables.js";
import ObjectStateVariable from "./ObjectStateVariable.js";
import ArrayStateVariable from "./ArrayStateVariable.js";
import ParentStateComponent from "./ParentStateComponent.js";
import ReduxExamples from "./ReduxExamples/index.js";
import {useSelector } from "react-redux";

function Assignment4() {
  const { todos } = useSelector((state) => state.todosReducer);
  function sayHello(){
    alert("Hello")
  }
  return (
    <div className="container">
      <h1>Assignment 4</h1>
      <ul className="list-group">
        {todos.map((todo) => (
          <li className="list-group-item" key={todo.id}>
            {todo.title}
          </li>
        ))}
      </ul>
      <ReduxExamples/>
      <ParentStateComponent/>
      <ArrayStateVariable/>
      <ObjectStateVariable/>
      <DateStateVariable/>
      <StringStateVariables/>
      <BooleanStateVariables/>
      <Counter/>
      <EventObject/>
      <PassingFunctions theFunction = {sayHello} />
      <PassingDataOnEvent />
      <ClickEvent />
      <Add a={1} b={2} />
    </div>
  );
};
export default Assignment4;
