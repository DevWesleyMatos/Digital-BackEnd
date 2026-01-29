import { Router } from "express";
import * as offersController from "../controller/offersController.js";

const router = Router();

router.get('/offers', offersController.index);
router.get('/offers/:id', offersController.show);
router.post('/offers', offersController.create);
router.put('/offers/:id', offersController.update);
router.delete('/offers/:id', offersController.destroy);

export default router;
