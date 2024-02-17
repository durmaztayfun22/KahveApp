// Burası router denemek için yapılmıştır

import express from 'express';
import Blog from '../../models/blogs.js';

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const veriler = await Blog.find().sort({ createdAt: -1 });
    res.json(veriler);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Veriler alınamadı' });
  }
});

router.post('/', async (req, res) => {
  try {
    const newBlog = new Blog({
      Image: req.body.Image,
      name: req.body.name,
      material: req.body.material,
      quantity: req.body.quantity,
    });

    const result = await newBlog.save();
    console.log(result);
    res.status(201).json(result);
    console.log('Veriler Başarı ile Gönderildi :)');
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Veriler Kaydedilemedi :(' });
  }
});

router.delete('/:id', (req,res) => {
  const id = req.params.id;

  Blog.findByIdAndDelete(id)
    .then(result => {
      res.json({ redirect: '/' });
      console.log('veriler silindi');
    })
    .catch(err => {
      console.log(err);
    });
})

export default router;
