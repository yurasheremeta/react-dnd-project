import React from 'react';
import { DropTarget } from 'react-dnd'

function collect (connect , monitor) {
    return {
        connectDropTraget: connect.dropTarget(),
        hovered: monitor.isOver(),
        item: monitor.getItem(),
    }
}

class Target extends React.Component {
    render(){
        const { connectDropTraget , hovered , item } = this.props
        return connectDropTraget (
            <div className="target">
                   Target
            </div> 
        )
    }
}

export default DropTarget('item' , {} , collect)(Target);