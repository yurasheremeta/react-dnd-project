import React from 'react';
import { DragSource } from 'react-dnd';
import styled from 'styled-components';

const Image = styled.img`
    height: 50px;
    width: 50px;
`
const itemSource = {
    beginDrag(props) {
       
        console.log("prop", props);
        
        return props;
    },
    endDrag(props, monitor, component) {
        if (!monitor.didDrop()) {
            return;
        }
        return props.handleDrop(props.item.id);
    }
}
function collect(connect, monitor) {
    return {
        connectDragSource: connect.dragSource(),
        connectDragPreview: connect.dragPreview(),
        isDragging: monitor.isDragging(),

    }
}
class Item extends React.Component {
    render() {
        const { connectDragSource, item } = this.props;
        return connectDragSource(
            
            <div >
                <Image alt="" src={item.url} />
            </div>
        );
    }
}
export default DragSource('item', itemSource, collect)(Item);