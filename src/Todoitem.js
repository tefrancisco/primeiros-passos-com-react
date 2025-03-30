import React from "react";
import { createRoot } from "react-dom/client";
import "./App.css";
// We are using XML, not HTML, pay attention

export default class Todoitem extends React.Component {
  render() {
    return (

      <div className="todo-item p-3 mb-5 d-flex justify-content-between rounded">
        
        <div>
          {/*To use js inside xml we put the code into {}*/}
          {/*Passing data to the components by using the props (properties) that are specified in every component we create in App*/}
          <h5>{this.props.title}</h5>
          {/*Using ternary operator*/}
          <p>
            {!this.props.description ? "default text" : this.props.description}
          </p>
        </div>
        
        <button className="btn btn-success">{(this.props.completed === true) ? 'Completed' : 'Not completed'}</button>
      </div>
    );
  }
}
