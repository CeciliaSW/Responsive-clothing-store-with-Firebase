import { signInUser } from "./firebase.js";
const loginUser = document.getElementById('loginForm');
loginUser.addEventListener('submit', (e) => {
    e.preventDefault();

    const email = loginUser['emailLogin'].value
    const password = loginUser['passwordLogin'].value

    signInUser(email, password)
}); 