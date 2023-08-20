const express = require('express');
const response = require('../../../network/response');
const router = express.Router();

router.get('/',
    (req, res, next) => {
        res.send('todo funciona'); 
        response.success(req, res, 'todo correct', 200); 
    }
);

module.exports = router;