var express = require('express');
var router = express.Router();
var mysql  = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : ''
});
/* GET users listing. */
router.get('/', function(req, res, next) {
  // res.send('respond with a resource');
  res.sendfile('./public/html/about.html');
});
router.get('/getData',function (req,res) {
  var result;
  connection.connect();
  connection.query('SELECT *  from  test.landing ', function(err, rows, fields) {
    if (err) throw err;
    console.log('The solution is: ', rows);
    result = rows;
    console.log(result);
    res.send(result);
  });
  connection.end();

});
router.get('/saveData',function (req,res) {
  var result;
  connection.connect();
  connection.query('INSERT INTO test.landing SET ? ',{name:'name1',
  phone: 17623456789}, function(err, rows, fields) {
    if (err) throw err;
    console.log('The solution is: ', rows);
    result = rows;
    console.log(result);
    res.send(result);
  });
  connection.end();
});
module.exports = router;
/*
dbConnection.query('INSERT INTO groups SET ?', {id: newId, name: params.name, \
location: params.location, size: params.size} , function(err, result) {
  if (err) throw err;
  callback({id: newId});
  dbConnection.end();
});*/
