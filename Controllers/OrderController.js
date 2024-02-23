import OrderModel from "../Models/Order.js"
import CustomerModel from "../Models/Customer.js"
import BookModel from "../Models/Book.js"
import HelperService from "../HelperService.js"



const OrderStore = async (req, res) => {

    const { bookId, customerId, initialDate, deliveryDate } = req.body

    const order = new OrderModel()
    order.bookId = bookId
    // order.customerId = customerId
    // order.initialDate = initialDate
    // order.deliveryDate = deliveryDate

    await order.save()
    return res.send("new order created")
}


// list of orders

const OrderIndex = async (req, res) => {

    const orders = await OrderModel.find()

    let data = []

    await HelperService.asyncForEach(orders, async function (element) {
        let bookData
        if (element.bookId != null) {
            bookData = await BookModel.findOne({ _id: element.bookId })
        }
        data.push({ orderData: element, bookData: bookData })
    })
    return res.send(data)
}


const OrderShow = async (req, res) => {

    let order = await OrderModel.findOne({ _id: req.params.id })

    let customerData = await CustomerModel.findone({ _id: order.customerId })
    let bookData = await BookModel.findOne({ _id: order.bookId })
    let response = {}

    response.order = order
    response.customerDetails = customerData
    response.bookDetails = bookData

    return res.json({ response })
}

export { OrderShow, OrderIndex, OrderStore }