import express from "express";
import * as productOrderController from "../controller/productOrderController.js";

const router = express.Router();

router.get("/", productOrderController.index);

router.get("/:id", productOrderController.show);

router.post("/", productOrderController.create);

router.put("/:id", productOrderController.update);

router.delete("/:id", productOrderController.destroy);

export default router;
