import {pool} from '../bd.js'

export const getClients = async (req, res) => {
    try {
        const clients = await pool.query("SELECT * FROM clients")
        res.status(200).json(clients.rows)
    } catch (ex) {
        res.status(500).json({message: "An error has ocurred to get clients", error: ex.message})
    }
}

export const postClient = async (req, res) => {
    const {name, last_name, email, phone_number} = req.body

    try {
        const existEmail = await pool.query("SELECT COUNT(*) FROM clients WHERE email = $1", [email])
        if(existEmail.rows[0].count > 0) {
            return res.status(409).json({message: "The client with that email already exist"})
        }

        await pool.query("INSERT INTO clients (name, last_name, email, phone_number) VALUES ($1, $2, $3, $4)", [name, last_name, email, phone_number])
        res.status(201).json({message: "Registered correctly"})

    } catch (ex) {
        res.status(500).json({message: "An error has ocurred to register a client", error: ex.message})
    }
}

export const updateClient = async (req, res) => {
    const {id_client} = req.params
    const {name, last_name, email, phone_number} = req.body

    try {
        const existClient = await pool.query("SELECT COUNT(*) FROM clients WHERE id_client = $1", [id_client])
        if(existClient.rows[0].count === 0) {
            return res.status(409).json({message: "The client not exist"})
        }

        await pool.query("UPDATE clients SET name = $1, last_name = $2, email = $3, phone_number = $4 WHERE id_client = $5", [name, last_name, email, phone_number, id_client])
        res.status(201).json({message: "The client has been updated"})

    } catch (ex) {
        res.status(500).json({message: "An error has ocurred to update the client", error: ex.message})
    }
}

export const deleteClient = async (req, res) => {
    const {id_client} = req.params

    try {
        const existClient = await pool.query("SELECT COUNT(*) FROM clients WHERE id_client = $1", [id_client])
        if(existClient.rows[0].count === 0) {
            return res.status(409).json({message: "The client not exist"})
        }

        await pool.query("DELETE FROM clients WHERE id_client = $1", [id_client])
        res.status(201).json({message: "The client has been deleted"})
    } catch (ex) {
        res.status(500).json({message: "An error has ocurred to delete the client", error: ex.message})
    }
}