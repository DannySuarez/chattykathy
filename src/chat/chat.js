import ChatRoom from './ChatRoom.js';

const root = document.getElementById('app');
const app = new ChatRoom();
root.appendChild(app.render());