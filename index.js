require('dotenv').config();
const express = require('express');
var cookieParser = require('cookie-parser');
const path = require('path')

const app = express();

const cors = require('cors');
// Suggested code may be subject to a license. Learn more: ~LicenseLog:3341742222.

const port = parseInt(process.env.PORT) || process.argv[3] || 8080;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(cookieParser());

const testRouter = require('./src/routes/test.route');
const v1Routes = require('./src/routes/v1');

app.use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs');

const db = require('./src/models');
db.sequelize.sync();

app.use('/test', testRouter);
app.use('/api/v1', v1Routes)

app.get('/', (req, res) => {
  res.render('index');
});


app.get('/api', (req, res) => {
  res.json({"msg": "Hello world"});
});

app.post('/apix', (req, res) => {
  res.json({"msg": "Hello world"});

});

app.listen(port, () => {
  console.log(`Listening on http://localhost:${port}`);
})