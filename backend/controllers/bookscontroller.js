import bookModel from "../Model/Bookmodel.js"

export const getBook = async (req,res) =>{
  try {
    const findBook = await bookModel.find({category : "free"})
    res.status(200).json(findBook)
    
  } catch (error) {
    res.status(500).json({message : 'internal server error '})

  }
}

export const paidBook = async (req,res) =>{
  try {
    const findBook = await bookModel.find()
    res.status(200).json(findBook)
    
  } catch (error) {
    res.status(500).json({message : 'internal server error '})

  }
}