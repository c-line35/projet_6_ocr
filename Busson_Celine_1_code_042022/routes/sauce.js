const express = require('express');
const router = express.Router();

const auth = require('../middleware/auth');
const multer = require('../middleware/multer.config');


const sauceCtrl = require('../controllers/sauce');

router.post('/', auth, multer,  sauceCtrl.createSauce);
router.post('/:id/like', auth, sauceCtrl.likeSauce)
router.put('/:id', auth, multer, sauceCtrl.modifySauce);
router.get('/', auth, sauceCtrl.getAllSauce);
router.get('/:id', auth, sauceCtrl.getOneSauce);
router.delete('/:id', auth, sauceCtrl.deleteSauce);

module.exports = router;