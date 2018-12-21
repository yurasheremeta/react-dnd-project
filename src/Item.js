import React from 'react';
import { DragSource } from 'react-dnd';
import styled from 'styled-components';

const Image = styled.img`
    height: 50px;
    width: 50px;
`
const itemSource = {
    beginDrag(props) {
        console.log("aaaaaaaaaa");

        return props.item;
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
        const { isDragging, connectDragSource, item } = this.props;
        const opacity = isDragging ? 0 : 1;
        return connectDragSource(
            
            <div >
                <Image alt="" src={item.url} />
            </div>
        );
    }
}
export default DragSource('item', itemSource, collect)(Item);