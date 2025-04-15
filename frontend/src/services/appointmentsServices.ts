import api from './api'
import {Appointment} from '../types/interfaces'

export const getAllAppointments = async () => {
    const res = await api.get("/appointments")
    return res.data
}

export const registerAppointment = async (data: Appointment) => {
    const res = await api.post("/appointments", data)
    return res.data
}

export const updateAppointment = async (id_appointment: number) => {
    const res = await api.put(`/appointments/${id_appointment}`)
    return res.data
}

export const deleteAppointment = async (id_appointment: number) => {
    const res = await api.delete(`/appointments/${id_appointment}`)
    return res.data
}