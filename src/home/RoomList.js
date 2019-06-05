import Component from '../Component.js';
import RoomItem from './RoomItem.js';

class RoomList extends Component {
    render() {
        const list = this.renderDOM();
        
        const roomItem = new RoomItem();
        list.appendChild(roomItem.render());

        return list;
    }

    renderTemplate() {
        return /*html*/`
            <ul class="chats">
            </ul>
        `;
    }
}
export default RoomList;
//bring in props
//foreach on chats props