import express from "express"
import { BookIndex, BookShow, BookStore } from "../Controllers/BookController.js"
import { CustomerIndex, CustomerShow, CustomerStore } from "../Controllers/CustomerController.js"
import { OrderIndex, OrderShow, OrderStore } from "../Controllers/OrderController.js"

const router = express.Router();

router.get("/book-index", BookIndex)
router.get("/book-show", BookShow)
router.post("/book-store", BookStore)

router.get("/customer-index", CustomerIndex)
router.get("/customer-show", CustomerShow)
router.get("/book-store", CustomerStore)

router.get("/order-ndex", OrderIndex)
router.get("/order-show", OrderShow)
router.get("/order-store", OrderStore)


export default router;