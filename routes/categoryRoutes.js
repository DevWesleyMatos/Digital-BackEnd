import express from "express"
import * as CategoryController from "../controller/categoryController.js"

const router = express.Router()

router.get("/",CategoryController.index)
router.get("/:id",CategoryController.show)
router.post("/",CategoryController.create)
router.put("/:id",CategoryController.update)
router.delete("/:id",CategoryController.remove)
export default router