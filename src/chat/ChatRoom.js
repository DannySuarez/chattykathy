import Component from '../Component.js';
import Header from '../shared/Header.js';
// import AddMessage from '../chat/AddMessage.js';


class ChatRoom extends Component {

    render() {
        const dom = this.renderDOM();
        
        const header = new Header();
        dom.insertBefore(header.render());

        return dom;
    }
    renderTemplate() {
        return /*html*/`
            <ul class="messages-container">
                <li>this would be a list of messages</li>
            </ul>
        `;
    }
}
export default ChatRoom;