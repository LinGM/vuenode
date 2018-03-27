var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'qdm204983338.my3w.com',
  user     : 'qdm204983338',
  password : 'hs3410040434lgm',
  database : 'qdm204983338_db'
});
 
module.exports = connection;