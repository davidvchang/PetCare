import {Router} from 'express'
import {getUsers, postUser, updateUser} from '../controllers/users.controller.js'

const router = Router()

router.get('/', getUsers)
router.post('/', postUser)
router.put('/:id_user', updateUser)

export default router