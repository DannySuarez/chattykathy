import Component from '../Component.js';

class AddRoom extends Component {

    render() {
        const form = this.renderDOM();

        form.addEventListener('submit', event => {
            event.preventDefault();
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