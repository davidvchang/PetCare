import {Router} from 'express'
import {getUsers, postUser} from '../controllers/users.controller.js'

const router = Router()

router.get('/', getUsers)
router.post('/', postUser)
// router.put('/')

export default router