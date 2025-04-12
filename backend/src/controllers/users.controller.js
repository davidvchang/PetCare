import {pool} from '../bd.js'
import bcryptjs from 'bcryptjs'

export const getUsers = async (req, res) => {
    try {
        const users = await pool.query("SELECT * FROM users")
        res.status(200).json(users.rows)
    } catch (ex) {
        res.status(500).json({message: "An error has ocurred", error: ex.message})
    }
} 

export const postUser = async (req, res) => {
    const {name, last_name, email, password} = req.body

    try {
        const existEmail = await pool.query("SELECT COUNT(*) FROM users WHERE email = $1", [email])
        if(existEmail.rows[0].count > 0) {
            return res.status(409).json({message: "The email already exist"})
        }

        const hashedPassword = await bcryptjs.hash(password, 10)

        await pool.query("INSERT INTO users (name, last_name, email, password) VALUES ($1, $2, $3, $4)", [name, last_name, email, hashedPassword])
        res.status(201).json({message: "Registered correctly"})
    } catch (ex) {
        res.status(500).json({message: "An error has ocurred", error: ex.message})
    }
} 