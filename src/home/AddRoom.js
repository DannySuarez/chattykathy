import Component from '../Component.js';
import { auth, chatsRef } from '../services/firebase.js';

class AddRoom extends Component {

    render() {
        const form = this.renderDOM();
        
        form.addEventListener('submit', event => {
            event.preventDefault();

            const userChatRef = chatsRef.push();
            const formData = new FormData(form);

            const room = {
                id: userChatRef.key,
                owner: auth.currentUser.uid,
                title: formData.get('room')
            };

            userChatRef.set(room).then(() => {
                form.reset();
            });

        });

        return form;
    }

    renderTemplate() {
        return /*html*/`
        <form class="add-form">
        <input type="text" name="room" placeholder="Add a Room">
        <button>Add Chat</button>
    </form>
        `;
    }
}
export default AddRoom;