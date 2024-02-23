import BookModel from "../Models/Book.js"

// create a new book
const BookStore = async (req, res) => {
    // console.log(req.body)
    const { title, author, publisher, yearOfPublication, img } = req.body

    console.log("inside")

    const book = new BookModel()
    book.title = title
    book.author = author
    book.publisher = publisher
    book.yearOfPublication = yearOfPublication
    book.img = img

    await book.save()
    return res.status(200).send("new book created")
}


// list of books

const BookIndex = async (req, res) => {

    const books = await BookModel.find()

    // const books = book
    return res.send(books)
}


const BookShow = async (req, res) => {

    const book = await BookModel.findOne({ _id: req.params.id })
    return res.send(book)
}

export { BookIndex, BookStore, BookShow }