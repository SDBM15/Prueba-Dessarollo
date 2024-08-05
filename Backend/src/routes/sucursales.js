const express = require('express');
const router = express.Router();
const Sucursal = require('../models/Sucursal');

// Obtener todas las sucursales
router.get('/', async (req, res) => {
  try {
    const sucursales = await Sucursal.find();
    res.json(sucursales);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Crear una nueva sucursal
router.post('/', async (req, res) => {
  const { nombre, direccion } = req.body;
  const nuevaSucursal = new Sucursal({ nombre, direccion });
  try {
    const sucursal = await nuevaSucursal.save();
    res.status(201).json(sucursal);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
