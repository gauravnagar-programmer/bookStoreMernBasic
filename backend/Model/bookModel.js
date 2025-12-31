import mongoose from "mongoose";

const bookSchema = new mongoose.Schema({
  id : String,
  name : String,
  category : String,
  price : Number,
  context : String,
  imgUrl : String
})

const bookModel = mongoose.model('book',bookSchema)

export default bookModel