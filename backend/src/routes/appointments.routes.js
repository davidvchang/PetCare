import {Router} from 'express'
import {getAppointments} from '../controllers/appointments.controller.js'

const router = Router()

router.get('/', getAppointments)

export default router