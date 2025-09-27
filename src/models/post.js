import mongoose from "mongoose";

const postSchema = new mongoose.Schema(
    {
        title: {
        },
        content: {
        },
        viewCount: {
        },
        isPublished: {
        },
    },
    {
        timestamps:true,
    }
);
