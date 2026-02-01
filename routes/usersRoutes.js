import express from "express"
import * as usersController from "../controller/usersController.js"

const router = express.Router()

router.get("/",usersController.index)
router.get("/:id",usersController.show)
router.post("/",usersController.create)
router.put("/:id",usersController.update)
router.delete("/:id",usersController.destroy)
export default router