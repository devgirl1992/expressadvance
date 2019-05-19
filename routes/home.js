const express = require('express');
const router = express.Router();



router.get('/', (req, res) => {
    res.send('hier is first page')
});


module.exports = router;