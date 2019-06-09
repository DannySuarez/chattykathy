import Component from '../Component.js';
import Header from '../shared/Header.js';
import AddMessage from '../chat/AddMessage.js';
import ChatRoom from '../chat/ChatRoom.js';
import { messageRef } from '../services/firebase.js';

class ChatApp extends Component {

    render() {
        const dom = this.renderDOM();
        const main = dom.querySelector('main');
        
        const header = new Header();
        dom.appendChild(header.render(), main);

        const addMessage = new AddMessage();
        dom.appendChild(addMessage.render());

        messageRef.on('value', snapshot => {
            const value = snapshot.val();
            const message = value ? Object.values(value) : [];
            chatRoom.update({ message });
        });

        const chatRoom = new ChatRoom({ message: [] });
        dom.appendChild(chatRoom.render());

        return dom;
    }
    renderTemplate() {
        return /*html*/`
            <div>
                <main>
                </main>
            </div>
        `;
    }
}
export default ChatApp;