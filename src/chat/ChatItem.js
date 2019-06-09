import Component from '../Component.js';

class ChatItem extends Component {
    renderTemplate() {
        const message = this.props.message;
        const date = new Date(message.date);

        return /*html*/`
        <section>
        <img src="${message.photoURL}">
        ${date.toLocaleDateString()} ${date.toLocaleTimeString()}
        ${message.displayName}:
        ${message.message}
        </section>
        `;
    }
}
export default ChatItem;