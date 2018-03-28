var express = require('express')
var router = express.Router()
var query = require('./db')

router.get('/api/login/getAccount', (req, res) => {
    var sql = 'SELECT * FROM testarticle';
    query(sql, function (err, result) {
        if (err) {
            console.log('[SELECT ERROR] - ', err.message);
            return;
        } else {
            res.send(result);
        }
    })
});

module.exports = router;