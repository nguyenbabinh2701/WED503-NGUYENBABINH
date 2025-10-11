import { Router } from "express"
import {
    addAuthor,
    deleteAuthor,
    getAuthorById,
    getAuthors,
    updateAuthor
} from "../controllers/author.js"

const authorRouter = Router();

//GET/api/authors - de lay danh sach tac gia
authorRouter.get("/", getAuthors);

//POST - them tac gia moi
authorRouter.post("/", addAuthor);

//GET/api/authors/:id - lay thong tin tac gia theo id
authorRouter.get("/:id", getAuthorById);

//PUT/api/authors/:id - cap nhat thong tin tac gia theo id
authorRouter.put("/:id", updateAuthor);

//DELETE/api/authors/:id - xoa tac gia theo id
authorRouter.delete("/:id", deleteAuthor);

export default authorRouter;