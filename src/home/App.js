import Component from '../Component.js';
import Header from '../shared/Header.js';
import RoomList from './RoomList.js';

class App extends Component {

    render() {
        const dom = this.renderDOM();

        const header = new Header();
        const headerDOM = header.render();
        
        const main = dom.querySelector('main');
        dom.insertBefore(headerDOM, main);

        const roomList = new RoomList();
        const roomListDOM = roomList.render();
        dom.appendChild(roomListDOM);

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