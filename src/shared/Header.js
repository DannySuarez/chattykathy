import Component from '../Component.js';
import Profile from './Profile.js';
import AddRoom from '../home/AddRoom.js';
import { auth } from '../services/firebase.js';

class Header extends Component {
    render() {
        const dom = this.renderDOM();

        const profile = new Profile();
        dom.appendChild(profile.render());

        const addRoom = new AddRoom();
        const addRoomDOM = addRoom.render();
        dom.appendChild(addRoomDOM);

        auth.onAuthStateChanged(user => {
            profile.update({ user });
        });
        
        return dom;
    }
    renderTemplate() {
        const title = this.props.title || document.title;
        
        return /*html*/`
            <header>
                <h1>${title}</h1>
            </header>
        `;
    }
}
export default Header;