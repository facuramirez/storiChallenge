var express = require('express');
var StoriController = require('../controllers/storiController');
var router = express.Router();


router.get('/home', StoriController.home);
router.post('/saveFile', StoriController.saveFile);
router.get('/getFiles', StoriController.getFiles);
router.delete('/deleteFiles', StoriController.deleteFiles);

module.exports = router;