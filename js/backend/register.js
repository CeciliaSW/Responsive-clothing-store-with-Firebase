import { createUser, saveUser } from "./firebase.js";

const registerUser = document.getElementById('registerForm');
registerUser.addEventListener('submit', (e) => {
    e.preventDefault();

    const nameP = registerUser['nameRegister'].value
    const lastName = registerUser['lastNameRegister'].value
    const email = registerUser['emailRegister'].value
    const birthday = registerUser['birthdayRegister'].value
    const country = registerUser['countryRegister'].value
    const password = registerUser['passwordRegister'].value
    const passwordVerify = registerUser['verifyPasswordRegister'].value
    const phone = registerUser['phoneRegister'].value

    if(password == passwordVerify) {
        createUser(email, password)
        saveUser(nameP, lastName, email, birthday, country, password, phone)
    }
    else {alert("Las contraseñas no coinciden.");
    console.log(password, passwordVerify)}
});