    const express = require('express');
    app = express();
    path = require('path');
    PORT = process.env.PORT || 3000;
    app.listen(PORT);

    //app.set('views', './views');
    app.set('view engine', 'ejs');
    app.use(express.static(path.join(__dirname, 'public')));


    /* app.get('/', (req, res) => {
        res.render(path.join(__dirname, 'views', 'index.ejs'));
        //res.render('index');
    }); */

    //, Servire contenuto dinamico
    app.get('/', (req, res) => {
        /* res.render('index', {
            title: "Home Page",
            body: 'Sei nella home page'
        }); */
        res.render('index', {
            title: "Home Page",
            link1: 'Pagina 1',
            link2: 'Pagina 2',
            link3: 'Pagina 3',
            body: 'Sei nella home page',
            footer: 'Testo del footer'
        });
    })


    .get('/about', (req, res) => {
        res.render('index', {
            title: "About",
            link1: 'Pagina 1',
            link2: 'Pagina 2',
            link3: 'Pagina 3',
            body: 'Sei nella pagina di About',
            footer: 'Testo del pagina About'
        });
    })

    .get('/users', (req, res) => {
        const users = [
            { name: "Mario Rossi", age: 29, job: "Node.js Developer" },
            { name: "Eleonora Verdi", age: 26, job: "React Developer" },
            { name: "Sabrina Gialli", age: 32, job: "Database specialist" },
        ];
        res.render('users', {
            title: "Lista degli utenti",
            users,
            style: '/css/users.css'
        });
    })


    .get('/contacts', (req, res) => {
            res.render('contacts', {
                title: "Contacts",
                link1: 'Pagina 1',
                link2: 'Pagina 2',
                link3: 'Pagina 3',
                body: 'Sei nella pagina Contacts',
                footer: 'Testo del footer della pagina Contacts',
                style: '/css/contacts.css'
            });
        })