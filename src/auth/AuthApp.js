import Component from '../Component.js';
import { auth } from '../services/firebase.js';

class AuthApp extends Component {

    render() {
        const dom = this.renderDOM();


        const ui = new firebaseui.auth.AuthUI(auth);

        // in code when time to load:
        ui.start('#firebaseui-auth-container', {
            signInOptions: [
                firebase.auth.EmailAuthProvider.PROVIDER_ID,
                firebase.auth.GoogleAuthProvider.PROVIDER_ID
            ],
            signInSuccessUrl: './',
            credentialHelper: firebaseui.auth.CredentialHelper.NONE
        });
        return dom;

    }

    renderTemplate() {
        return /*html*/`
        <div>
            <main>
            <p>Sign in to start chatting!</p>
            <div id="firebaseui-auth-container">
                <!--firebaseui auth will go here-->
            </div>
            </main>
    </div>
        `;
    }
}
export default AuthApp;