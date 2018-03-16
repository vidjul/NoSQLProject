const express = require('express')
const router = express.Router();

router.use('/article', require('./article'));

router.get('/', (req,res) => {
    res.send('<p> Wesh! </p>');
});

module.exports = router;