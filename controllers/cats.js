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

// DELETE
router.delete('/:id', async (req,res) => {
    try {
        res.status(200).json(await Cats.findByIdAndDelete(req.params.id))
    } catch (error) {
        res.status(400).json({message: 'Failed to delete'})
    }
})

// UPDATE
router.put('/:id', async (req,res) => {
    try {
        res.status(200).json(await Cats.findByIdAndUpdate(
            req.params.id,
            req.body,
            {new: true}
            ));
    } catch (error) {
        res.status(400).json({message: "Couldn't update"});
    }
});

// CREATE

/// EXPORT
module.exports = router