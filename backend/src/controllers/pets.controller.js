import {pool} from '../bd.js'

export const getPets = async (req, res) => {
    try {
        const pets = await pool.query("SELECT * FROM pets")
        res.status(200).json(pets.rows)
    } catch (ex) {
        res.status(500).json({message: "An error has ocurred to get pets", error: ex.message})
    }
} 

export const postPet = async (req, res) => {
    const {name, client_id, age, species} = req.body

    try {
        await pool.query("INSERT INTO pets (name, client_id, age, species) VALUES ($1, $2, $3, $4)", [name, client_id, age, species])
        res.status(201).json({message: "Registered correctly"})
    } catch (ex) {
        res.status(500).json({message: "An error has ocurred to register pet", error: ex.message})
    }
} 

export const updatePet = async (req, res) => {
    const {id_pet} = req.params
    const {name, age, species} = req.body

    try {
        const existUser = await pool.query("SELECT COUNT(*) FROM pets WHERE id_pet = $1", [id_pet])
        if(existUser.rows[0].count === 0) {
            return res.status(409).json({message: "The pet not exist"})
        }

        await pool.query("UPDATE pets SET name = $1, age = $2, species = $3", [name, age, species])
        res.status(201).json({message: "The pet has been updated"})
    } catch (ex) {
        res.status(500).json({message: "An error has ocurred to update the pet", error: ex.message})
    }
} 

export const deletePet = async (req, res) => {
    const {id_pet} = req.params

    try {
        const existUser = await pool.query("SELECT COUNT(*) FROM pets WHERE id_pet = $1", [id_pet])
        if(existUser.rows[0].count === 0) {
            return res.status(409).json({message: "The pet not exist"})
        }

        await pool.query("DELETE FROM pets WHERE id_pet = $1", [id_pet])
        res.status(201).json({message: "The pet has been deleted"})
    } catch (ex) {
        res.status(500).json({message: "An error has ocurred to delete the pet", error: ex.message})
    }
} 