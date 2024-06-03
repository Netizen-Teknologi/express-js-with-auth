var express = require('express');
var router = express.Router();

var testController = require('../controllers/test.controller');

router.get('/', testController.test);
router.post('/', async function(req,res) {
    console.log(req.body);
});

module.exports = router;

