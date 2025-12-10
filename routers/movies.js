const express = require('express')
const router = express.Router();
const moviesController = require('../controllers/moviesController')

// index
router.get('/', moviesController.index);

// show
router.get('/:id', function (req, res) {
    res.send(`Qui ti prendi il cazzo di film con id: ${id}`)
});

//store
router.post('/', function (req, res) {
    res.send('Qui ci cacci dentro un nuovo film')
});

//update
router.put('/:id', function (req, res) {
    res.send(`Qui hai modificato il fucking movies con id: ${id}`)
});

//destroy
router.delete('/:id', function (req, res) {
    res.send(`Qui invece cancelli un film di cui non ti frega un cazzo`)
});


module.exports = router;