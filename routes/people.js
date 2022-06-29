//DEPENDENCY
const express = require('express');
const Peoples = require('../models/people_model');
const router = express.Router();



//GET
router.get('/', async (req, res) => {
    try {

        const peoples = await Peoples.find().populate(['friend']);
        res.json(peoples)

    } catch (error) {

        res.json({ message: error })

    }
})



//POST
router.post('/', async (req, res) => {

    const peoples = new Peoples({
        name: req.body.name,
        friend: req.body.friend
    });

    try {

        const data = await peoples.save();
        res.json(data);

    } catch (error) {

        res.json({ message: error })

    }

})



//SEARCH
router.get('/search=:postID', async (req, res) => {

    try {

        const peoples = await Peoples.findById(req.params.postID).populate('friend');
        res.json(peoples);

    } catch (error) {

        res.json({ message: error })

    }

})



//DELETE
router.delete('/delete=:postID', async (req, res) => {
    try {

        const peoples = await Peoples.remove({ _id: req.params.postID })
        res.json(peoples)

    } catch (error) {

        res.json({ message: error })

    }
})



//UPDATE
router.patch('/update=:postID', async (req, res) => {
    try {

        const peoples = await Peoples.updateOne(

            { _id: req.params.postID },
            { $set: { friend: req.body.friend } }

        )
        res.json(peoples)


    } catch (error) {

        res.json({ message: error })

    }
})



//EXPORT
module.exports = router;