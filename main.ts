import robotjs from 'robotjs';
import fs from 'fs';


fs.readFile('database.txt', 'UTF-8', (err, data) => {
    if (err) throw err;

    const [email, password] = data.split('\n');

    setTimeout(() => {
        robotjs.typeString(email);
        robotjs.keyTap('enter');

        robotjs.typeString(Buffer.from(password, 'base64').toString('ascii'));
        robotjs.keyTap('enter');
    }, 4000);
});
