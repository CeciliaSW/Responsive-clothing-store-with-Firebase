import { messageContact } from "../backend/firebase.js";

const formContactD = document.getElementById('contactDesktopForm');
formContactD.addEventListener('submit', async (e) => {
        e.preventDefault();

        const email = formContactD['emailFooterDesktop'].value;
        const message = formContactD['textFooterDesktop'].value;

        await messageContact(email, message);
        alert("Enviado.");
        formContactD.reset();
    });

const formContactP = document.getElementById('contactPhoneForm');
formContactP.addEventListener('submit',async (e) => {
        e.preventDefault();

        const email = formContactP['emailFooterPhone'].value;
        const message = formContactP['textFooterPhone'].value;

        await messageContact(email, message);
        alert("Enviado.");
        formContactP.reset();
    });
