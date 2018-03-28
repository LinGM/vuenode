var express = require('express')
var body = require('body-parser')
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

router.get('/api/getAllArticle',(req,res)=>{
    var sql = "SELECT article_id,title,author,scan_amount,content,date_entered FROM testarticle ORDER BY date_entered DESC ";
    query(sql,function(err,result){
        if(err){
            res.send("something error"+err.message);
        }else{
            res.send(result);
        }
    })
})

router.post('/api/getArticleDetail',(req,res)=>{
    var articleId = req.body.articleId;
    var sql = "SELECT article_id,title,author,scan_amount,content,date_entered FROM testarticle WHERE article_id="+articleId;
    query(sql,function(err,result){
        if(err){
            res.send("something error"+err.message);
        }else{
            res.send(result);
        }
    })
})

module.exports = router;