import Component from '../Component.js';
import Header from '../shared/Header.js';
import AddMessage from '../chat/AddMessage.js';

class ChatApp extends Component {

    render() {
        const dom = this.renderDOM();
        const main = dom.querySelector('main');
        
        const header = new Header();
        dom.insertBefore(header.render(), main);

        const addMessage = new AddMessage();
        dom.insertBefore(addMessage.render(), main);

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