import Component from '../Component.js';

class AddMessage extends Component {
    renderTemplate() {
        return /*html*/`
            <form class="add-message">
                <input type="text" name="message" placeholder="Say Something">
                
            </form>
        `;
    }
}
export default AddMessage;