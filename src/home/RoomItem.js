import Component from '../Component.js';

class RoomItem extends Component {
    renderTemplate() {
        return /*html*/`
        <li class="chat-room">
            <h2>room 1</h2>
        </li>
        `;
    }
}
export default RoomItem;