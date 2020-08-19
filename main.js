import robotjs from 'robotjs';
const emailOrUsername = 'Dr4kk0nnys';
const encryptedPassword = 'd2h5X3lvdV9sb29raW5nX2ludG9fdGhpc18/';
setTimeout(() => {
    robotjs.typeString(emailOrUsername);
    robotjs.keyTap('enter');
    robotjs.typeString(Buffer.from(encryptedPassword, 'base64').toString('ascii'));
    robotjs.keyTap('enter');
}, 4000);
