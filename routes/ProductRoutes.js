import express from "express"
import * as ProductController from "../controller/ProductController.js"

const router = express.Router()

router.get("/",ProductController.index)
router.get("/:id",ProductController.show)
router.post("/",ProductController.create)
router.put("/:id",ProductController.update)
router.delete("/:id",ProductController.destroy)
export default router