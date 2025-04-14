import {Router} from 'express'
import {deleteClient, getClients, postClient, updateClient} from '../controllers/clients.controller.js'

const router = Router()

router.get('/', getClients)
router.post('/', postClient)
router.put('/:id_client', updateClient)
router.delete('/:id_client', deleteClient)

export default router