var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const db = require("./models/model")
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
const loginRouter = require('./routes/login.routes')
const student = require('./controllers/user.controller')
const middleware = require('./middleware/jwt.middleware');
var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
db.sequelize.sync({});
app.use('/', indexRouter);
app.use('/users', loginRouter);
app.use('/createuser', student.createUser)
app.use('/getallusers', middleware.checkToken, student.getAll)

module.exports = app;