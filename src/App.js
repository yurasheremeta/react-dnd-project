import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Item from './Item';
import Target from './Target';
import HTML5Backend from 'react-dnd-html5-backend';
import { DargDropContext, DragDropContext } from 'react-dnd';

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

  deleteItem = (id) => {
    console.log("delete");
  }
      handleMouseUp = (e) => {
        console.log(e);
        
        const id = this.state.items.id;
        let x = e.target;
        // window.removeEventListener('mousemove', this.handleMouseMove);
        // window.removeEventListener('mouseup', this.handleMouseUp);

        const items = this.state.items.map(item => {
            if (item.id === id) {
                console.log("end point x: ", item.translateX, "end point y: ", item.translateY);
                console.log("tagName", x.tagName);
                return {
                    ...item,
                    lastTranslateX: item.translateX,
                    lastTranslateY: item.translateY,
                }
            } else {
                return item;
            }
        })


        this.setState(
            ({
                items,
                isDragging: false
            }),
            () => {
                if (this.props.onDragEnd) {
                    this.props.onDragEnd();

                }
            }
        );

    };
  



  render() {
    return (
      <div className = "App">
       
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
              
        </header> */}
     

          <div className="app-container">
          <div className="item-container">
         {
           this.state.items.map((item , index) => (
             <Item key={item.id} item={item} handleDrop={(e) => this.handleMouseUp(e)} />
             
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
