import React from 'react';
import { createRoot } from 'react-dom/client';
// Here we created an component, once we are using the to-do-items more than once, then we import it here
import Todoitem from './Todoitem';
import './App.css';
// We are using XML, not HTML, pay attention

export default class App extends React.Component {
    render() {
        return (
        <div className="container">
            <div className="mt-3 mb-5">To-do creation</div>
            <div>

                {/*Using the component that we created*/}
                {/*We pass data to components through props (properties) like title and description here*/}
                <Todoitem title="Item 1" 
                description="Item 1 description" 
                completed={true}/>

                <Todoitem title="Item 2" 
                completed={false}/>
            </div>
            </div>
        );
    }
}