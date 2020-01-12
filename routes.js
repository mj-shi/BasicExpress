const express = require('express');
const exp = express();
const path = require('path');

exp.set('views', path.join(__dirname, 'views'));
exp.set('view engine', 'ejs');

exp.get('/', (req, res) => {
   res.sendFile(path.join(__dirname, '/htmlOne.html'));
});
exp.get('/htmlOne', (req, res) => {
   res.redirect('/htmlTwo');
});
exp.get('/htmlTwo', (req, res) => {
   res.sendFile(path.join(__dirname, '/htmlTwo.html'));
});
exp.get('/htmlThree', (req, res) => {
   res.sendFile(path.join(__dirname, '/htmlThree.html'));
});
exp.get('/htmlFour', (req, res) => {
   res.sendFile(path.join(__dirname, '/htmlFour.html'));
});
exp.get('/htmlFive', (req, res) => {
   res.sendFile(path.join(__dirname, '/htmlFive.html'));
});
exp.get('/ejsOne', (req, res) => {
   res.render('one', {'title': 'Home', 'message': 'Welcome to the ejs one'});
});
exp.get('/ejsTwo', (req, res) => {
   res.render('two', {'title': 'Home Below', 'message': 'The message comes first for ejs two'});
});

exp.use(express.static(path.join(__dirname, 'animals')));
exp.use(express.static(path.join(__dirname, 'food')));
exp.use('/sport', express.static(path.join(__dirname, 'sports')));

module.exports = exp;

