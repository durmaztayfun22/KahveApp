import Blog from "../../models/blogs.js";

export const getAllCoffee = async() => {
    const blog = await Blog.find()

    return blog
}


export const createBlogs = async(coffeeData) => {
    try {
        const NewCoffee = new Blog(coffeeData)
        await NewCoffee.save()
        return NewCoffee
    } catch (error) {
        console.log(error)
    }
}

export const deleteCoffee = async(id) => {
    const coffee = await Blog.find(id)
    return coffee
}