import React from "react";
import { createRoot } from "react-dom/client";
import "./App.css";
// We are using XML, not HTML, pay attention

export default class Todoitem extends React.Component {

  // Once props are imutable, we use state to track and change data

  constructor(props) {
    super(props);

    // Now completed is a state variable, so it's mutable
    this.state = {
      completed: props.completed
    }
  }


  render() {
    // Simplified destructuring of the props object
    let {title, description} = this.props;
    let completed = this.state.completed;
    // Designando as condições para as variáveis e melhorando a leitura do código
    // Props são imutáveis
    let descriptionText = (!description) ? "default text" : description
    let completedText = (completed) ? "Completed" : "Not Completed"
    let completedClass = (completed) ? "btn btn-success" : "btn btn-danger"

    console.log('render')

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
        
        <button 
        className={completedClass}
        // Using the method of setState to change the state of the component
        onClick={() => this.setState({completed: !completed})}
        >{completedText}</button>
      </div>
    );
  }
}
