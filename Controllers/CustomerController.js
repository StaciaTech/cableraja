import CustomerModel from "../Models/Customer.js"



// create a new customer
const CustomerStore = async (req, res) => {

    const { name, address, age, img } = req.body

    const customer = new CustomerModel()
    customer.name = name
    customer.address = address
    customer.age = age
    customer.img = img

    await customer.save()
    return res.send("new customer created")
}


// list of customers

const CustomerIndex = async (req, res) => {

    const customers = await CustomerModel.find()
    return res.send(customers)
}


const CustomerShow = async (req, res) => {
    const customer = await CustomerModel.findOne({ _id: req.params.id })
    return res.send(customer)
}


export { CustomerStore, CustomerIndex, CustomerShow }
