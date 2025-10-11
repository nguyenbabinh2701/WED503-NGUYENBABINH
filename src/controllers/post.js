import Post from "../models/post";

export async function getPosts(req, res) {
    try {
        const posts = await Post.find();
        return res.json(posts);
    } catch (error) {
        return res.status(400).json({ message: error.message });
    }
}

export async function getPostById(req, res) {
    try {
        const { id } = req.params;
        const post = await Post.findById(id);
        if (!post) {
            return res.status(404).json({ message: "Post not found" });
        }
        return res.json(post);
    } catch (error) {
        return res.status(400).json({ message: error.message });
    }
}
export async function addPost(req , res) {
    try {
        const newPost = await Post.create(req.body);
        return res.status(201).json(newPost);
    } catch (error) {
        return res.status(400).json({ message: error.message });
    }
}

export async function updatePost(req, res) {
    try {
        const { id } = req.params;
        const updatedPost = await Post.findByIdAndUpdate(id, req.body, { new: true });
        if (!updatedPost) {
            return res.status(404).json({ message: "Post not found" });
        }
        return res.json(updatedPost);
    } catch (error) {
        return res.status(400).json({ message: error.message });
    }
}
export async function deletePost(req, res) {
    try {
        const { id } = req.params;
        const deletedPost = await Post.findByIdAndDelete(id);
        if (!deletedPost) {
            return res.status(404).json({ message: "Post not found" });
        }
        return res.json({ message: "Post deleted successfully" });
    } catch (error) {
        return res.status(400).json({ message: error.message });
    }   
}

