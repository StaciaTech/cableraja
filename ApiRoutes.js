import express from "express"
import { BookIndex, BookShow, BookStore } from "./Controllers/BookController.js"
import { CustomerIndex, CustomerShow, CustomerStore } from "./Controllers/CustomerController.js"
import { OrderIndex, OrderShow, OrderStore } from "./Controllers/OrderController.js"

const router = express.Router();

router.get("/book-index", BookIndex)
router.get("/book-show/:id", BookShow)
router.post("/book-store", BookStore)

router.get("/customer-index", CustomerIndex)
router.get("/customer-show/:id", CustomerShow)
router.post("/customer-store", CustomerStore)

router.get("/order-index", OrderIndex)
router.get("/order-show/:id", OrderShow)
router.post("/order-store", OrderStore)


export default router;