import Component from '../Component.js';
import RoomItem from './RoomItem.js';
import { chatsRef } from '../services/firebase.js';

class RoomList extends Component {
    render() {
        const list = this.renderDOM();
        const chats = this.props.chats;
        
        chats.forEach(chat => {
            const roomItem = new RoomItem({ 
                chat,
                onRemove:(chat => {
                    chatsRef.child(chat.key).remove();
                })
            });
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