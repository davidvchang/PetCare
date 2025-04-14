import api from './api'

export const getAllClients = async () => {
    const res = await api.get("/clients")
    return res.data
}