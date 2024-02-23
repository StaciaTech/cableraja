import express from "express"
import { OrderIndex, OrderShow, OrderStore } from "../Controllers/OrderController.js"

const router = express.Router();

router.get("/order-ndex", OrderIndex)
router.get("/order-show", OrderShow)
router.get("/order-store", OrderStore)


export default router;