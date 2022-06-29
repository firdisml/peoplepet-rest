//DEPENDENCY
const express = require('express');
const router = express.Router();


//GET
router.get('/', async (req, res) => {
    try {

        res.send("Welcome to People Pet API!")

        res.send("/people - People")
        res.send("/pet - Pet")

    } catch (error) {

        res.send({ message: error })

    }
})



//EXPORT
module.exports = router;
