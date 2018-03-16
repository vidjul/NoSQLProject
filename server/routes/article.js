const express = require('express');
const router = express.Router();

// Route: BASE_URL/article

router.get('/', (req,res) => {
    res.send('<p> Un article! </p>');
});

module.exports = router;