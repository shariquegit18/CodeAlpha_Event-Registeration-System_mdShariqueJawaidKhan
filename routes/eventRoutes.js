const express = require('express');
const router = express.Router();
const Event = require('../models/Event');


router.post('/create', async (req, res) => {
    try {
        const event = new Event(req.body);
        await event.save();
        res.status(201).json(event);
    } catch (err) {
        res.status(500).json({ error: 'Error creating event' });
    }
});

router.get('/', async (_req, res) => {
    try {
        const events = await Event.find();
        res.json(events);
    } catch (err) {
        res.status(500).json({ error: 'Error fetching events' });
    }
});

module.exports = router;
