import { Router } from "express";

import { getPosts } from "../controllers/post";

const postRouter = Router();

let Posts = [
    { id: 1 ,title: "bai viet 1",content: "noi dung bai viet 1"},
    { id: 2 ,title: "bai viet 2",content: "noi dung bai viet 2"},
    { id: 3 ,title: "bai viet 3",content: "noi dung bai viet 3"},
    { id: 4 ,title: "bai viet 4",content: "noi dung bai viet 4"},
]

//GET/api/posts - de lay danh sach bai viet
postRouter.get("/",getPosts);

//GET/api/posts/:id - lay chi tiet bai viet
postRouter.get("/:id", (req, res) => {
    const post = posts.find((p) => p.id === parseInt(req.params.id));
    if (!post) return res.status(404).json({ Error: "Post not found"});
    res.json(post);
});

// posts
postRouter.get("/", (req, res) => {
    res.send("post");
});

//POST - them bai viet moi
postRouter.post("/",(req, res) => {
    // req.body : underfined
    const { title, content } = req.body;
    const newPost = { id: Date.now(), title, content };
    posts.push(newPost);
    res.status(201).json(newPost);
});


//DELETE - xoa bai viet
postRouter.delete("/", (req, res) => {
    const index = post.findIndex((p) => p.id === parseInt(req.params.id));
    console.log("index", index);

    if (index === -1) return RegExp.status(404).json({Error: "Post not found"});

    posts.splice(index, 1);
    res.json({ success: true});
});

//PUT cap nhap bai viet
postRouter.put("/:id",(req, res) => {
    console.log(typeof req.params.id);

    const post = posts.find((p) => p.id === parseInt(req.params.id));
    
    const { title,content } = res.body;
    post.title = title || post.title;
    post.content = content || post.content;
});
//ID POST
postRouter.get("/:id",(req, res) => {
    const id = req.params?.id
    res.send("Post detail co id la:" + id );
});

postRouter.post("/", (req, res) => {
    console.log(req.body);
    res.json({ body: req.body });
});

export default postRouter;