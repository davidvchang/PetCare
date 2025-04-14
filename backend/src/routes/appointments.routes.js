import {Router} from 'express'
import {getAppointments, postAppointments, updateAppointment, deleteAppointment} from '../controllers/appointments.controller.js'

const router = Router()

router.get('/', getAppointments)
router.post('/', postAppointments)
router.put('/:id_appointment', updateAppointment)
router.delete('/:id_appointment', deleteAppointment)

export default router