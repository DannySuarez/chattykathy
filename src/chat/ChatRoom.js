import Component from '../Component.js';
import ChatItem from './ChatItem.js';

class ChatRoom extends Component {
    render() {
        const dom = this.renderDOM();
        const message = this.props.message;

        message.forEach(message => {
            const chatItem = new ChatItem({ message });
            dom.appendChild(chatItem.render());
        });


        return dom;
    }

    renderTemplate() {
        return /*html*/`
            <div>
            </div>
        `;
    }
}
export default ChatRoom;