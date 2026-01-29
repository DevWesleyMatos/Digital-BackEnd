import express from "express"
import * as CategoryController from "../controller/categoryController.js"

const router = express.Router()

router.get("/category",CategoryController.index)
router.get("/category/:id",CategoryController.show)
router.post("/category",CategoryController.create)
router.put("/category/:id",CategoryController.update)
router.delete("/category/:id",CategoryController.remove)
export default router