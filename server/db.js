var mysql      = require('mysql');
// var connection = mysql.createConnection({
//   host     : '****',
//   user     : '****',
//   password : '****',
//   database : '****'
// });

var config = {
  host     : '****',
  user     : '****',
  password : '****',
  database : '****'
}

function handleError (err) {
  if (err) {
    // 如果是连接断开，自动重新连接
    if (err.code === 'PROTOCOL_CONNECTION_LOST') {
      connect();
    } else {
      console.error(err.stack || err);
    }
  }
}

// 连接数据库
function connect () {
  connection = mysql.createConnection(config);
  connection.connect(handleError);
  connection.on('error', handleError);
}

var connection;
connect();

module.exports = connection;

