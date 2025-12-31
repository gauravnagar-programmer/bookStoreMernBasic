import { Router } from "express";
import { getBook ,paidBook } from "../controllers/bookscontroller.js";
import protectBook from "../middleware/bookValidation.js";


const route = Router()

route.get('/free',getBook)
route.get('/paid',paidBook)

export default route