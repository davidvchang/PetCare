import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
import usersRoutes from './routes/users.routes.js'
import petsRoutes from './routes/pets.routes.js'
import clientsRoutes from './routes/clients.routes.js'
import appointmentsRoutes from './routes/appointments.routes.js'

const app = express()

app.set('port', process.env.PORT || 4000)

app.use(morgan("dev"))
app.use(cors("*"))
app.use(express.json())

app.use('/api/users', usersRoutes)
app.use('/api/pets', petsRoutes)
app.use('/api/clients', clientsRoutes)
app.use('/api/appointments', appointmentsRoutes)

export default app