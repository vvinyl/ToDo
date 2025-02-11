const express = require("express")
const router = express.Router()
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")

const User = require("../../database/models/UserSchema")
const Task = require("../../database/models/Task")

// REJESTRACJA
router.post('/userRegister', async (req, res) => {
    try{
        const {
            name,
            dateOfBirth,
            email,
            password,
        } = req.body

        const exisitngUser = await User.findOne({email})
        if(existingUser){
            return res.status(400).json({message: "Podany email jest już zajęty"})
        }

        const hash = await bcrypt.hash(password, 10)

        const newUser = new User({
            name,
            dateOfBirth,
            email,
            password: hash
        })

        await newUser.save()

        res.status(201).json({message: "Rejestracja zakończona pomyślnie"})
    } catch(err){
        res.status(500).json({message: "Błąd przy rejestracji", err})
    }
})

// LOGOWANIE
router.post('/userLogin', async (req, res) => {
    try{
        const {email, password} = req.body
        
        const user = await User.findOne({email})
        if(!user){
            return res.status(400).json({message: "Nie ma takiego użytkownika"})
        }

        const isMatch = await bcrypt.compare(password, user.password)
        if(!isMatch){
            return res.status(400).json({message: "Błędny email lub hasło"})
        }

        const token = jwt.sign({id: user._id}, "4d56as4fa4fgsda4fg5ds64gdasdf88v4c65av4ds689fg4asdf45cx5cv488sadf4cds74fs84fa65sd74f6d7fc6sa4fd6c74f6sad7f4654fcd5as6d4DC89ASD7CC5AS41D6s74d56a4", {
            expiresIn: "6h",
        })

        res.json({token})
    } catch(err) {
        res.status(500).json({message: "Błąd serwera przy logowaniu. ", err})
    }
})