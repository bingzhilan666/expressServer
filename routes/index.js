var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  // res.render('index', { title: 'Express' });
    res.send('welcome to home');
});

module.exports = router;

router.get('/hello', function (req, res) {
  res.send('Hello World!');
});
// 网站首页接受 POST 请求
router.post('/', function (req, res) {
  res.send('Got a POST request');
});

// /user 节点接受 PUT 请求
router.get('/user', function (req, res) {
  res.set('Content-Type', 'text/javascript');
  res.send("({'test':'test'})");
});
router.post('/login', function (req, res) {
  localStorage.setItem("req",JSON.stringify(req));
  localStorage.setItem("res",JSON.stringify(res));
  res.send('login successfully');
});

router.get('/jsonp',function(req,res,next){
  // Accept: text/html
/*  res.set('Content-Type', 'text/html');
  req.accepts('html');
// => "html"

// Accept: text/!*, application/json
  req.accepts('html');
// => "html"
  req.accepts('text/html');
// => "text/html"
  req.accepts(['json', 'text']);
// => "json"
  req.accepts('application/json');
// => "application/json"

// Accept: text/!*, application/json
  req.accepts('image/png');
  req.accepts('png');
// => undefined

// Accept: text/!*;q=.5, application/json
  req.accepts(['html', 'json']);
// => "json"*/

   // app.set('jsonp callback name', 'foo');
  res.jsonp({user: 'tobi'});
});
router.get('/verifyUser',function(req,res,next){
  var list = [ { id: 11, name: 'Mr. Nice' ,address: 'test@haitongwangxiao.com' ,password: '123456'},
    { id: 12, name: 'Narco' ,address: 'test@haitongwangxiao.com' ,password: '123456' },
    { id: 13, name: 'Bombasto' ,address: 'test@haitongwangxiao.com' ,password: '123456' },
    { id: 14, name: 'Celeritas' ,address: 'test@haitongwangxiao.com' ,password: '123456' },
    { id: 15, name: 'Magneta' ,address: 'test@haitongwangxiao.com' ,password: '123456' },
    { id: 16, name: 'RubberMan' ,address: 'test@haitongwangxiao.com' ,password: '123456' },
    { id: 17, name: 'Dynama' ,address: 'test@haitongwangxiao.com' ,password: '123456' },
    { id: 18, name: 'Dr IQ' ,address: 'test@haitongwangxiao.com' ,password: '123456' },
    { id: 19, name: 'Magma'  ,address: 'test@haitongwangxiao.com' ,password: '123456'},
    { id: 20, name: 'Tornado' ,address: 'test@haitongwangxiao.com' ,password: '123456' },
    { id: 21, name: 'test' ,address: 'test@haitongwangxiao.com' ,password: '123456' }];
  // req.params.name
  var result ={};
  if(true){
    result.status = true;
    result.data = { id: 21, name: 'test' ,address: 'test@haitongwangxiao.com' ,password: '123456' };
  }
    res.jsonp(result);
});
