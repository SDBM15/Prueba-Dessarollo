const { Router } = require('express');
const router = Router();
const User = require('../models/User');
const jwt = require('jsonwebtoken');
const Colaborador = require('../models/Colaborador');
const Sucursal = require('../models/Sucursal');
const Asignacion = require('../models/Asignacion');
const Viaje = require('../models/viaje.model');  
const Transportista = require('../models/transportista'); 

// Rutas de autenticación
router.post('/registro', async (req, res) => {
    const { email, password } = req.body;
    const newUser = new User({ email, password });
    await newUser.save();
    console.log(newUser);
    
    const token = jwt.sign({ _id: newUser._id }, 'secretkey');
    res.status(200).json({ token });
});

router.post('/login', async (req, res) => {
    const { email, password } = req.body;
    
    const user = await User.findOne({ email: email });
    
    if (!user) return res.status(401).json({ message: 'el email no existe' });
    if (user.password !== password) return res.status(401).json({ message: 'contraseña incorrecta' });

    const token = jwt.sign({ _id: user._id }, 'secretkey');
    return res.status(200).json({ token });
});

// Rutas públicas y privadas
router.get('/tareas-publicas', (req, res) => {
    res.json([
        { _id: 1, name: 'task uno', description: 'lorem ipuson', date: "2024-11-17" },
        { _id: 2, name: 'task dos', description: 'lorem ipuson', date: "2024-11-17" },
        { _id: 3, name: 'task tres', description: 'lorem ipuson', date: "2024-11-17" },
        { _id: 4, name: 'task cuatro', description: 'lorem ipuson', date: "2024-11-17" }
    ]);
});

router.get('/tareas-privadas', verifyToken, (req, res) => {
    res.json([
        { _id: 1, name: 'task uno', description: 'lorem ipuson', date: "2024-11-17" },
        { _id: 2, name: 'task dos', description: 'lorem ipuson', date: "2024-11-17" },
        { _id: 3, name: 'task tres', description: 'lorem ipuson', date: "2024-11-17" },
        { _id: 4, name: 'task cuatro', description: 'lorem ipuson', date: "2024-11-17" }
    ]);
});

// Rutas para CRUD de colaboradores
router.get('/colaboradores', async (req, res) => {
    try {
        const colaboradores = await Colaborador.find();
        res.json(colaboradores);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

router.post('/colaboradores', async (req, res) => {
    try {
        const colaborador = new Colaborador(req.body);
        await colaborador.save();
        res.json(colaborador);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Rutas para CRUD de sucursales
router.get('/sucursales', async (req, res) => {
    try {
        const sucursales = await Sucursal.find();
        res.json(sucursales);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

router.post('/sucursales', async (req, res) => {
    try {
        const sucursal = new Sucursal(req.body);
        await sucursal.save();
        res.json(sucursal);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Rutas para CRUD de asignaciones
router.get('/asignaciones', async (req, res) => {
    try {
        const asignaciones = await Asignacion.find().populate('colaboradorId').populate('sucursalId');
        res.json(asignaciones);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

router.post('/asignaciones', async (req, res) => {
    try {
        const asignacion = new Asignacion(req.body);
        await asignacion.save();
        res.json(asignacion);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Ruta para crear un nuevo transportista
router.post('/transportistas', async (req, res) => {
    try {
        const { nombre } = req.body;
        const transportista = new Transportista({ nombre });
        await transportista.save();
        res.json(transportista);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Ruta para crear un nuevo viaje
router.post('/viajes', async (req, res) => {
    try {
        const { distancia, fecha, transportistaId, tarifa } = req.body;
        const viaje = new Viaje({ distancia, fecha, transportistaId, tarifa });
        await viaje.save();
        res.json(viaje);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Ruta para obtener reporte de viajes
router.get('/reporte', async (req, res) => {
    const { fechaInicio, fechaFin, transportistaId } = req.query;

    try {
        const query = { fecha: { $gte: new Date(fechaInicio), $lte: new Date(fechaFin) } };
        if (transportistaId) {
            query.transportistaId = transportistaId;
        }

        const viajes = await Viaje.find(query).populate('transportistaId');
        const totalAPagar = viajes.reduce((total, viaje) => total + viaje.tarifa, 0);

        res.json({ viajes, totalAPagar });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});


async function verifyToken(req, res, next) {
    try {
        if (!req.headers.authorization) {
            return res.status(401).json({ message: 'solicitud no autorizada' });
        }
        let token = req.headers.authorization.split(' ')[1];
        if (token === 'null') {
            return res.status(401).json({ message: 'solicitud no autorizada' });
        }

        const payload = await jwt.verify(token, 'secretkey');
        if (!payload) {
            return res.status(401).json({ message: 'solicitud no autorizada' });
        }
        req.userId = payload._id;
        next();
    } catch (e) {
        return res.status(401).json({ message: 'solicitud no autorizada' });
    }
}

module.exports = router;
