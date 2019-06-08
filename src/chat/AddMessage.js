import Component from '../Component.js';
import { auth, messageRef } from '../services/firebase.js';
class AddMessage extends Component {

    render() {
        const form = this.renderDOM();
        
        form.addEventListener('submit', event => {
            event.preventDefault();
            
            const avatar = auth.currentUser.photoURL || './assets/default-avatar.png';
            const userMessageRef = messageRef.push();
            const formData = new FormData(form);

            const message = {
                message: formData.get('message'),
                owner: auth.currentUser.uid,
                displayName: auth.currentUser.displayName,
                photoURL: avatar,
                date: new Date().toISOString()
            };

            userMessageRef.set(message).then(() => {
                form.reset();
            });

        });

        return form;
    }

    renderTemplate() {
        return /*html*/`
            <form class="add-message">
                <input type="text" name="message" placeholder="Say Something">
                <button>Send</button>
            </form>
        `;
    }
}
export default AddMessage;