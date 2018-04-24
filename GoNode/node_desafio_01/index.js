const express = require('express');
const nunjucks = require('nunjucks');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();

nunjucks.configure('views', {
  autoescape: true,
  express: app,
});

app.set('view engine', 'njk');
app.set('views', path.join(__dirname, 'views'));

app.use(bodyParser.urlencoded({ extended: false }));

const middlewareValidation = (req, res, next) => {
  const { name } = req.query;

  if (!name) return res.redirect('/');

  return next();
};

app.get('/', (req, res) => {
  res.render('main', { nome: 'Douglas Lira' });
});

app.post('/check', (req, res) => {
  const { name, birthday } = req.body;
  const dateNow = new Date();
  const datePast = new Date(birthday);
  const now = dateNow.getTime();
  const past = datePast.getTime();
  const age = parseInt((now - past) / (1000 * 3600 * 24 * 365), 10);

  if (age > 18) {
    return res.redirect(`/major?name=${name}`);
  }

  return res.redirect(`/minor?name=${name}`);
});

app.get('/major', middlewareValidation, (req, res) => {
  const { name } = req.query;

  res.render('major', { name });
});

app.get('/minor', middlewareValidation, (req, res) => {
  const { name } = req.query;

  res.render('minor', { name });
});

app.listen(3000);
