import Component from '../Component.js';
import { chatsRef } from '../services/firebase.js';

class RoomItem extends Component {

    render() {
        const dom = this.renderDOM();
        const button = dom.querySelector('button');

        const chatRoom = this.props.chat;
        const chatRef = chatsRef.child(chatRoom.id);

        button.addEventListener('click', () => {
            chatRef.remove();

        });

        return dom;
    }

    renderTemplate() {
        const chat = this.props.chat;

        return /*html*/`
        <li class="chat-room">
            <a href="./chat.html?key=${chat.id}">${chat.title}</a>
            <button>✗</button>
        </li>
        `;
    }
}
export default RoomItem;