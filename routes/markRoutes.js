import { Router } from "express";
import * as markController from "../controller/markController.js";

const router = Router();

router.get('/', markController.index);
router.get('/:id', markController.show);
router.post('/', markController.create);
router.put('/:id', markController.update);
router.delete('/:id', markController.remove);

export default router;
