// Burası router denemek için yapılmıştır

import express from 'express';
import {getAllUsers, createUsers, getOneUser} from '../services/userServices.js'
// import {userService} from '../services/userServices.js'
const userRouter = express.Router();



userRouter.get('/', async (req, res) => {
    
    const AllUsers = await getAllUsers()

    res.json(AllUsers)
});

userRouter.post('/', async (req, res) => {
    try {
        const user = await createUsers(req.body)
        res.status(201).json(user)
    } catch (error) {
        console.log(error)
    }
    

});

userRouter.get('/:id', async (req,res) => {
    try {
        const user = await getOneUser(req.params.id)
        res.json(user)
    } catch (error) {
        console.log(error)
        res.status(500).json({HATA : 'Olmadı amk'})
    }
})



export default userRouter
