import mongoose from "mongoose";
const Schema = mongoose.Schema;

const blogSchema = new Schema({

    name: {
        type: String
    },

});

const User = mongoose.model('User', blogSchema);
export default User;
