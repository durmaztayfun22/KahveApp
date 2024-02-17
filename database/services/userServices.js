// Burası router denemek için yapılmıştır

import User from "../../models/userModel.js";



export const getAllUsers = async() => {
    const user = await User.find()

    return user
 }

 export  const createUsers = async(userData) => {
    try {
        const NewUser = new User(userData)
        await NewUser.save()
        return NewUser
    } catch (error) {
        console.log(error)
    }
    
 }

export const getOneUser = async(id) => {
   
    const user = await User.findById(id)
    return user

}



