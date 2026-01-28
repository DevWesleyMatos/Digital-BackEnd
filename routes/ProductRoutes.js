import express from "express"
import * as ProductController from "../controller/ProductController.js"

const router = express.Router()

router.get("/Product",ProductController.index)
router.get("/Product/:id",ProductController.show)
router.post("/Product",ProductController.create)
router.put("/Product/:id",ProductController.update)
router.delete("/Product/:id",ProductController.destroy)
export default router