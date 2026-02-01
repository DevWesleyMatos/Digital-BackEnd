import { Router } from "express";
import * as offersController from "../controller/offersController.js";

const router = Router();

router.get('/', offersController.index);
router.get('/:id', offersController.show);
router.post('/', offersController.create);
router.put('/:id', offersController.update);
router.delete('/:id', offersController.destroy);

export default router;
