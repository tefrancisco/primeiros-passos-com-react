import React from "react";
import { createRoot } from "react-dom/client";
import "./App.css";
// We are using XML, not HTML, pay attention

export default class Todoitem extends React.Component {
  render() {
    // Simplified destructuring of the props object
    let {title, description, completed} = this.props;
    // Designando as condições para as variáveis e melhorando a leitura do código
    let descriptionText = (!description) ? "default text" : description
    let completedText = (completed) ? "Completed" : "Not Completed"
    let completedClass = (completed) ? "btn btn-success" : "btn btn-danger"

    return (

      <div className="todo-item p-3 mb-5 d-flex justify-content-between rounded">
        
        <div>
          {/*To use js inside xml we put the code into {}*/}
          {/*Passing data to the components by using the props (properties) that are specified in every component we create in App*/}
          <h5>{title}</h5>
          {/*Using ternary operator*/}
          <p>
            {descriptionText}
          </p>
        </div>
        
        <button className={completedClass}>{completedText}</button>
      </div>
    );
  }
}
