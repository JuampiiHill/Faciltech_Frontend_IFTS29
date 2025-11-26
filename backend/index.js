import express from 'express';
import fetch from 'node-fetch';
import cors from 'cors';

const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());


app.get('/products', async (req, res) => {
  try {
    const response = await fetch('https://fakestoreapi.com/products');
    const products = await response.json();
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener productos' });
  }
});


app.get('/products/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const response = await fetch(`https://fakestoreapi.com/products/${id}`);
    const product = await response.json();
    res.json(product);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener producto' });
  }
});

app.listen(port, () => {
  console.log(`Servidor backend corriendo en http://localhost:${port}`);
});
