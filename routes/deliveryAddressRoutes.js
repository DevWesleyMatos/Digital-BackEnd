import express from "express"
import * as deliveryAddressController from "../controller/deliveryAddressController.js"

const router = express.Router()

router.get("/",deliveryAddressController.index) 
router.get("/:id",deliveryAddressController.show) 
router.post("/",deliveryAddressController.create) 
router.put("/:id",deliveryAddressController.update) 
router.delete("/:id",deliveryAddressController.destroy) 
export default router

