import Component from '../Component.js';

class RoomItem extends Component {
    renderTemplate() {
        const chats = this.props.chats;

        return /*html*/`
        <li class="chat-room">
            <h2>${chats.title}</h2>
        </li>
        `;
    }
}
export default RoomItem;