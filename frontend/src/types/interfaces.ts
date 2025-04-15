export interface Clients {
    id_client: number
    name: string,
    last_name: string,
    email: string,
    phone_number: string
}

export interface Pets {
    id_pet: number
    name: string,
    client_id: number,
    age: number,
    species: string
}

export interface Appointment {
    id_appointment: number,
    client_id: number,
    pet_id: number,
    medical_history: string
}