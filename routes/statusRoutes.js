import express from "express"
import * as statusController from "../controller/statusController.js"

const router = express.Router()

router.get("/status",statusController.index)
router.get("/status/:id",statusController.show)
router.post("/status",statusController.create)
router.put("/status/:id",statusController.update)
router.delete("/status/:id",statusController.destroy)
export default router