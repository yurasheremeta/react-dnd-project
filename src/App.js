import React, { Component } from 'react';
import './App.css';
import Item from './Item';
import Target from './Target';
import HTML5Backend from 'react-dnd-html5-backend';
import { DragDropContext } from 'react-dnd';

export const items = [
  {
    id: 1,
    name: 'item 1',
    url: 'moon.png',
    isDragged: false,
  },
  {
    id: 2,
    name: 'item 2',
    url: 'moon.png',
    isDragged: false,
  },
  {
    id: 3,
    name: 'item 3',
    url: 'moon.png',
    isDragged: false,
  },
  {
    id: 4,
    name: 'item 4',
    url: 'moon.png',
    isDragged: false,

  }
]
const droppedItems = [];
class App extends Component {

  handleMouseUp = (id) => {
    console.log("Dropped" , id);
  
    
    const findItem = items.find(item => item.id === id)
    console.log("Find item", findItem);
    
        droppedItems.push(findItem);
        console.log("Dropped Item" , droppedItems);
    };
   

  render() {
    return (
      <div className = "App">
          <div className="app-container">
          <div className="item-container">
         {
           items.map((item) => (
             <Item key={item.id} item={item} handleDrop= {this.handleMouseUp}/>
             
           ))
         }
         </div>
          <Target/>
         </div>

     
     </div>
    );
  }
}
export default DragDropContext(HTML5Backend)(App);
