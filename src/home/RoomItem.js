import Component from '../Component.js';

class RoomItem extends Component {
    renderTemplate() {
        const chats = this.props.chats;

        return /*html*/`
        <li class="chat-room">
            <p>${chats.title}</p>
        </li>
        `;
    }
}
export default RoomItem;