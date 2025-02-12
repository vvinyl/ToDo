const express = require('express');
const mongoose = require('mongoose')
const cors = require('cors')
const session = require('express-session')
const app = express()

const userController = require('./controller/User/UserController');

app.use(express.json())

app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true
}))

app.use(
    session({
        secret: '4d56as4fa4fgsda4fg5ds64gdasdf88v4c65av4ds689fg4asdf45cx5cv488sadf4cds74fs84fa65sd74f6d7fc6sa4fd6c74f6sad7f4654fcd5as6d4DC89ASD7CC5AS41D6s74d56a4',
        resave: false,
         saveUninitialized: true
    })
)

mongoose
    .connect('mongodb+srv://admin:admin@todolist.omxmx.mongodb.net/?retryWrites=true&w=majority&appName=ToDoList', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => {
        console.log("Połączono z bazą danych")
    })
    .catch((err) => {
        console.error('Błąd połączenia z bazą: ', err)
    });

app.use('/user', userController);

const PORT = 3001;

app.llisten(PORT, () => {
    console.log(`Serwer działa na porcie ${PORT}`)
})