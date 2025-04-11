import {pool} from '../bd.js'

export const getUsers = async (req, res) => {
    try {
        const users = await pool.query("SELECT * FROM users")
        res.status(200).json(users.rows)
    } catch (ex) {
        res.status(500).json({message: "An error has ocurred", error: ex.message})
    }
} 