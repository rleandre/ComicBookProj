const express = require('express');
const charactersCtrl = require('../controllers/characters');
const router = express.Router()


router.get('/characters', charactersCtrl.show);


module.exports = router;