import express from 'express'

import { getAllCoffee, createBlogs, deleteCoffee } from '../services/coffeeServices.js'
const coffeeRouter = express.Router()


coffeeRouter.get('/', async(req, res) => {
    const AllCoffee = await getAllCoffee()
    res.json(AllCoffee)
})

coffeeRouter.post('/', async(req, res) => {
    try {
        const coffee = await createBlogs(req.body)
        res.status(201).json(coffee)
        console.log('Veriler Başarı ile Gönderildi :)');
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: 'Veriler Kaydedilemedi :(' });
    }
})

coffeeRouter.delete('/:id', async(req,res) => {
    try {
        const coffee = await deleteCoffee(req.body)
        res.json(coffee)
    } catch (error) {
        console.log(error)
    }
})

export default coffeeRouter