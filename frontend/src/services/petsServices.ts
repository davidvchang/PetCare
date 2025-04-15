import api from './api'
import {Pets} from '../types/interfaces'

export const getAllPets = async () => {
    const res = await api.get("/pets")
    return res.data
}

export const registerClient = async (data: Pets) => {
    const res = await api.post("/pets", data)
    return res.data
}

export const updateClient = async (id_pet: number) => {
    const res = await api.put(`/pets/${id_pet}`)
    return res.data
}

export const deleteClient = async (id_pet: number) => {
    const res = await api.delete(`/pets/${id_pet}`)
    return res.data
}