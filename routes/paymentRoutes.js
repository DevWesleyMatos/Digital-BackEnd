import express from "express"
import * as paymentController from "../controller/paymentController.js"

const router = express.Router()

router.get("/",paymentController.index)
router.get("/:id",paymentController.show)
router.post("/",paymentController.create)
router.put("/:id",paymentController.update)
router.delete("/:id",paymentController.destroy)
export default router