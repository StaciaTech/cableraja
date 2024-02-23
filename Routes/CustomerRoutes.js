import express from "express"
import { CustomerIndex, CustomerShow, CustomerStore } from "../Controllers/CustomerController.js"
// import { OrderIndex, OrderShow, OrderStore } from "../Controllers/OrderController.js"

const router = express.Router();


router.get("/index", CustomerIndex)
router.get("/show", CustomerShow)
router.get("/store", CustomerStore)

// router.get("/order-ndex", OrderIndex)
// router.get("/order-show", OrderShow)
// router.get("/order-store", OrderStore)


export default router;