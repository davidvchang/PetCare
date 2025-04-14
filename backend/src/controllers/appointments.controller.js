import {pool} from '../bd.js'

export const getAppointments = async (req, res) => {
    try {
        const appointments = await pool.query("SELECT * FROM appointments")
        res.status(200).json(appointments.rows)
    } catch (ex) {
        res.status(500).json({message: "An error has ocurred to get appointments", error: ex.message})
    }
}

export const postAppointments = async (req, res) => {
    const {client_id, pet_id, medical_history} = req.body

    try {
        await pool.query("INSERT INTO appointments (client_id, pet_id, medical_history) VALUES ($1, $2, $3)", [client_id, pet_id, medical_history])
        res.status(201).json({message: "Registered correctly"})
    } catch (ex) {
        res.status(500).json({message: "An error has ocurred to register appointments", error: ex.message})
    }
}

export const updateAppointment = async (req, res) => {
    const {id_appointment} = req.params
    const {client_id, pet_id, medical_history} = req.body

    try {
        const existAppointment = await pool.query("SELECT COUNT(*) FROM appointments WHERE id_appointment = $1", [id_appointment])
        if(existAppointment.rows[0].count === 0) {
            return res.status(409).json({message: "The appointment not exist"})
        }

        await pool.query("UPDATE appointments SET client_id = $1, pet_id = $2, medical_history = $3 WHERE id_appointment = $4", [client_id, pet_id, medical_history, id_appointment])
        res.status(201).json({message: "The appointment has been updated"})
    } catch (ex) {
        res.status(500).json({message: "An error has ocurred to register appointments", error: ex.message})
    }
}

export const deleteAppointment = async (req, res) => {
    const {id_appointment} = req.params

    try {
        const existAppointment = await pool.query("SELECT COUNT(*) FROM appointments WHERE id_appointment = $1", [id_appointment])
        if(existAppointment.rows[0].count === 0) {
            return res.status(409).json({message: "The appointment not exist"})
        }

        await pool.query("DELETE FROM appointments WHERE id_appointment = $4", [client_id, pet_id, medical_history, id_appointment])
        res.status(201).json({message: "The appointment has been deleted"})
    } catch (ex) {
        res.status(500).json({message: "An error has ocurred to delete the appointment", error: ex.message})
    }
}