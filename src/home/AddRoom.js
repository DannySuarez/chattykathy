import Component from '../Component.js';

class AddRoom extends Component {
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