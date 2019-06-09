import Profile from '../src/shared/Profile.js';

const test = QUnit.test;

QUnit.module('profile'),

test('render profile', assert => {

    //arrange
    const user = {
        displayName: 'Danny',
        photoURL: 'https://lh5.googleusercontent.com/-EnRNBAYvURk/AAAAAAAAAAI/AAAAAAAAAK8/cMJNFAVX5SE/photo.jpg'
    };

    const profile = new Profile({ user });

    const expected = /*html*/ `
        <div class="profile">
            <img src="https://lh5.googleusercontent.com/-EnRNBAYvURk/AAAAAAAAAAI/AAAAAAAAAK8/cMJNFAVX5SE/photo.jpg">
            <span>${user.displayName}</span>
            <button>Sign Out</button>
        </div>
    `;

    //act
    const rendered = profile.renderTemplate();
    //assert
    assert.htmlEqual(rendered, expected);
});