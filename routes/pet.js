//DEPENDENCY
const express = require('express');
const Pets = require('../models/pet_model');
const router = express.Router();



//GET
router.get('/', async (req, res) => {
    try {

        const pets = await Pets.find().populate("owner");
        res.json(pets);

    } catch (error) {

        res.json({ message: error });

    }
})



//POST
router.post('/', async (req, res) => {
    const pets = new Pets({
        type: req.body.type,
        description: req.body.description,
        species: req.body.species,
        owner : req.body.owner
    });

    try {
        const data = await pets.save();
        res.json(data);

    } catch (error) {

        res.json({ message: error });
    }

})



//SEARCH
router.get('/search=:postID', async (req, res) => {

    try {
        const pets = await Pets.findById(req.params.postID).populate("owner");
        res.json(pets);

    } catch (error) {

        res.json({ message: error });

    }

})



//DELETE
router.delete('/delete=:postID', async (req, res) => {
    try {

        const pets = await Pets.remove({ _id: req.params.postID });
        res.json(pets);

    } catch (error) {
        res.json({ message: error });
    }
})



//UPDATE
router.patch('/update=:postID', async (req,res) => {
    try {

        const pets = await Pets.updateOne(
            { _id: req.params.postID },
            { $set: { owner: req.body.owner } }
        );

        res.json(pets);


    } catch (error) {

        res.json({ message: error });

    }
})



//EXPORT
module.exports = router;