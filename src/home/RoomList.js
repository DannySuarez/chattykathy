import Component from '../Component.js';
import RoomItem from './RoomItem.js';

class RoomList extends Component {
    render() {
        const chats = this.props.chats;
        const list = this.renderDOM();
        
        chats.forEach(chat => {
            const roomItem = new RoomItem({ chats: chat });
            list.appendChild(roomItem.render());
        });

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