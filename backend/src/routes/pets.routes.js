import {Router} from 'express'
import {getPets, postPet, updatePet, deletePet} from '../controllers/pets.controller.js'

const router = Router()

router.get('/', getPets)
router.post('/', postPet)
router.put('/:id_pet', updatePet)
router.delete('/:id_pet', deletePet)

export default router