const express = require('express');
// import db from "../config/database.js";
const router = express.Router();

router.get('/users', (req, res, ) =>{
    res.json({
        message: 'Get user sukses'
    })
} )

router.post('/users', (req, res, ) =>{
    res.json({
        message: 'post user sukses'
    })
} )

module.exports = router;



