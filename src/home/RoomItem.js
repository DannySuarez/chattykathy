import Component from '../Component.js';
import { auth } from '../services/firebase.js';

class RoomItem extends Component {

    render() {
        const dom = this.renderDOM();
        const onRemove = this.props.onRemove;
        const button = dom.querySelector('#button');
        
        button.addEventListener('click', () => {
            onRemove(this.props.chat);
            
        });
        return dom;
    }
    
    renderTemplate() {
        const chat = this.props.chat;

        return /*html*/`
        <li class="chat-room">
            <a href="./chat.html?key=${chat.id}">${chat.title}</a>
            <button class="${auth.currentUser.uid === chat.owner ? '' : 'disabled'}" id="button">✗</button>
        </li>
        `;
    }
}
export default RoomItem;