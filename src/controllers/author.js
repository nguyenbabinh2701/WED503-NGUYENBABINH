import e from "express";
import Author from "../models/Author";

export async function getAuthors(req, res) {
    try {
        const authors = await Author.find();
        return res.json(authors);
    } catch (error) {
        return res.status(400).json({ message: error.message });
    }
}

export async function addAuthor(req, res) {
    try {
        const newAuthor = await Author.create(req.body);
        return res.status(201).json(newAuthor);
    } catch (error) {
        return res.status(400).json({ message: error.message });
    }
}

export async function getAuthorById(req, res) {
    try {
        const { id } = req.params;
        const author = await Author.findById(id);
        if (!author) {
            return res.status(404).json({ message: "Author not found" });
        }
        return res.json(author);
    } catch (error) {
        return res.status(400).json({ message: error.message });
    }
}

export async function updateAuthor(req, res) {
    try {
        const { id } = req.params;
        const updatedAuthor = await Author.findByIdAndUpdate(id, req.body, { new: true });
        if (!updatedAuthor) {
            return res.status(404).json({ message: "Author not found" });
        }
        return res.json(updatedAuthor);
    } catch (error) {
        return res.status(400).json({ message: error.message });
    }
}

export async function deleteAuthor(req, res) {
    try {
        const { id } = req.params;
        const deletedAuthor = await Author.findByIdAndDelete(id);
        if (!deletedAuthor) {
            return res.status(404).json({ message: "khong tim thay" });
        }
        return res.json({ message: "da xoa thanh cong" });
    } catch (error) {
        return res.status(400).json({ message: error.message });
    }
}