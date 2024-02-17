import mongoose from "mongoose";
const Schema = mongoose.Schema;

const blogSchema = new Schema({
    Image: {
        type: String
    },
    name: {
        type: String
    },
    material: [{
        type: String
    }],
    quantity: [{
        type: Number
    }]
});

const Blog = mongoose.model('Blog', blogSchema);
export default Blog;
