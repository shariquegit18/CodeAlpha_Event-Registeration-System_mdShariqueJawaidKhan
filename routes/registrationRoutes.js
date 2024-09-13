const express = require('express');
const router = express.Router();
const Registration = require('../models/Registration');


router.post('/register', async (req, res) => {
    try {
        const registration = new Registration(req.body);
        await registration.save();
        res.status(201).json(registration);
    } catch (err) {
        res.status(500).json({ error: 'Error registering' });
    }
});


router.get('/:eventId', async (req, res) => {
    try {
        const registrations = await Registration.find({ event: req.params.eventId });
        res.json(registrations);
    } catch (err) {
        res.status(500).json({ error: 'Error fetching registrations' });
    }
});

module.exports = router;
