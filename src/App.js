import React, { Component } from 'react';
import './App.css';
import Item from './Item';
import Target from './Target';
import HTML5Backend from 'react-dnd-html5-backend';
import { DragDropContext } from 'react-dnd';

class App extends Component {
  state = {
    items : [
      {
        id: 1,
        name: 'item 1',
        url: 'moon.png',

        originalX: 0,
    originalY: 0,

    translateX: 0,
    translateY: 0,

    lastTranslateX: 0,
    lastTranslateY: 0,
      },
      {
        id: 2,
        name: 'item 2',
        url: 'moon.png',
        originalX: 0,
    originalY: 0,

    translateX: 0,
    translateY: 0,

    lastTranslateX: 0,
    lastTranslateY: 0,
      },
      {
        id: 3,
        name: 'item 3',
        url: 'moon.png',
        originalX: 0,
    originalY: 0,

    translateX: 0,
    translateY: 0,

    lastTranslateX: 0,
    lastTranslateY: 0,
      },
      {
        id: 4,
        name: 'item 4',
        url: 'moon.png',
        originalX: 0,
    originalY: 0,

    translateX: 0,
    translateY: 0,

    lastTranslateX: 0,
    lastTranslateY: 0,
      }
    ],
  }
    // onDrag= (id) => {
    //     console.log("aaaa", id);
    //     // 
    // }

      handleMouseUp = ( id) => {
        console.log("DROPED", id );
        
        const items = this.state.items.map(item => {
            if (item.id === id) {
              console.log("end point x: ", item.translateX, "end point y: ", item.translateY);
                return {
                    ...item,
                    lastTranslateX: item.translateX,
                    lastTranslateY: item.translateY,
                    
                }
               
             
            } else {
                return item;
            }
            
        })

        console.log("asasasa");
        
        this.setState(
            ({
                items,
                //sDragging: false
            })
        );

    };
  



  render() {
    return (
      <div className = "App">
          <div className="app-container">
          <div className="item-container">
         {
           this.state.items.map((item , index) => (
             <Item key={item.id} item={item}  handleDrop={( id) => this.handleMouseUp(id)} />
             
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
