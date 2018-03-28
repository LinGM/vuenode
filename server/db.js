var mysql = require('mysql');
var dbconfig = require('./dbconfig')

var config = dbconfig
var pool = mysql.createPool(config);

var query = function(sql,callback){
  pool.getConnection(function(err,connection){
    if(err){
      callback(err,null);
    }else{
      connection.query(sql,function(err,res){
        //释放连接
        connection.release();
        //回调
        callback(err,res);
      })
    }
  })
}
module.exports = query;

