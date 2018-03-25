const express = require('express')
const router = express.Router();

router.use('/article', require('./article'));
router.use('/analysis',require('./analysis'))
router.get('/', (req,res) => {
    res.send('<p> This is our API (try /article or /analtics or /article/populate) </p>');
});

module.exports = router;