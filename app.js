const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname,'/html')));

app.get('/', function(req, res) { // 홈 부분페이지
    res.sendFile(path.join(__dirname, '/html', 'index.html'));
});

app.get('/skill', function(req, res) {// 스킬 부분 페이지
    res.sendFile(path.join(__dirname, '/html', 'skill.html'));
});

app.get('/portfolio', function(req, res) {// 포트폴리오 부분 페이지
    res.sendFile(path.join(__dirname, '/html', 'portfolio.html'));
});

app.get('/about', function(req, res) { // about 부분 페이지
    res.sendFile(path.join(__dirname, '/html', 'about.html'));
});



// ERROR Handling

app.use(function(req, res, next) {
    const error = new Error('Page Not Found');
    error.status(404);
    res.send('404 Page Not Found');
    next(error);
});

app.use(function(req, res, next) {
    const error = new Error('method Allowed');
    error.status(405);
    res.send('405 method Allowed');
    next(error);
});

app.use(function(req, res, next) {
    const error = new Error('Service Unavailable');
    error.status(503);
    res.send('503 Service Unavailable');
    next(error);
});

app.use(function(req, res, next) {
   const error = new Error('Unauthorized');
   error.status(401);
   res.send('401 Unauthorized');
   next(error);
});

app.use(function(error, req, res, next) {
   res.status(error.status || 500);    
   res.send('500 Internal Server Error');
});

module.exports = app;