///DECLARE
const router = require('express').Router();
const Cats = require('../models/cat')


// INDEX
router.get('/', async (req,res) => {
    try {
        res.status(200).json(await Cats.find({}));
    } catch (error) {
        res.status(400).json({message: 'invalid'});
    }
});

// NEW
router.post('/', async (req,res) => {
    try {
        res.status(201).json(await Cats.create(req.body))
    } catch (error) {
        res.status(400).json({message: 'error on post'})
    }
})

// CREATE

/// EXPORT
module.exports = router