import api from './api'
import {Clients} from '../types/interfaces'

export const getAllClients = async () => {
    const res = await api.get("/clients")
    return res.data
}

export const registerClient = async (data: Clients) => {
    const res = await api.post("/clients", data)
    return res.data
}

export const updateClient = async (id_client: number) => {
    const res = await api.put(`/clients/${id_client}`)
    return res.data
}

export const deleteClient = async (id_client: number) => {
    const res = await api.delete(`/clients/${id_client}`)
    return res.data
}