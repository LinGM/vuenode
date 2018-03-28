var express = require('express')
var router = express.Router()
var connection = require('./db')

router.get('/api/login/getAccount', (req, res) => {
    connection.connect();
    let sql = 'SELECT * FROM testarticle';
    connection.query(sql, function (err, result) {
        if (err) {
            console.log('[SELECT ERROR] - ', err.message);
            return;
        }else{
            res.send(result);
        }
    })
    //connection.end();
});

module.exports = router;