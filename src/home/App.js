import Component from '../Component.js';
import Header from '../shared/Header.js';
import AddRoom from '../home/AddRoom.js';
import RoomList from './RoomList.js';
import { chatsRef } from '../services/firebase.js';

class App extends Component {

    render() {
        const dom = this.renderDOM();
        const main = dom.querySelector('main');

        const header = new Header();
        const headerDOM = header.render();
        dom.insertBefore(headerDOM, main);

        const addRoom = new AddRoom();
        const addRoomDOM = addRoom.render();
        dom.insertBefore(addRoomDOM, main);

        chatsRef.on('value', snapshot => {
            const value = snapshot.val();
            const chats = value ? Object.values(value) : [];
            roomList.update({ chats });
        });

        const roomList = new RoomList({ chats: [] });
        main.appendChild(roomList.render());

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
export default App;

//import firebasejs
//