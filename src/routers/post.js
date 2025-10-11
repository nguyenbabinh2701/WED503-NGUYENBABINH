import { Router } from "express";

import {
    addPost,
    deletePost,
    getPostById,
    getPosts,
    updatePost
} from "../controllers/post";

const postRouter = Router();


//GET/api/posts - de lay danh sach bai viet
postRouter.get("/",getPosts);

//POST - them bai viet moi
postRouter.post("/",addPost);

//GET/api/posts/:id - lay thong tin bai viet theo id
postRouter.get("/:id",getPostById);

//PUT/api/posts/:id - cap nhat thong tin bai viet theo id
postRouter.put("/:id",updatePost);

//DELETE/api/posts/:id - xoa bai viet theo id
postRouter.delete("/:id",deletePost);


export default postRouter;