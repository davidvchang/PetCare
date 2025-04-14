import api from './api'

interface PetsData {
    name: string
    client_id: number
    age: number
    species: string
}

export const getAllPets = async () => {
    const res = await api.get("/pets")
    return res.data
}

export const registerClient = async (data: PetsData) => {
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