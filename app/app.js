const createError = require('http-errors');
const express = require('express');
const cors = require('cors');
const path = require('path');
const cookieParser = require('cookie-parser');
const bp = require('body-parser');
const logger = require('morgan');
const hbs = require('hbs');
const bodyParser = require('body-parser');
const session = require('express-session');

const indexRouter = require('./routes/home');
const productsRouter = require('./routes/products');
const shopCartRouter = require('./routes/shop_cart');
const checkoutRouter = require('./routes/checkout');
const authorizationRouter = require('./routes/authorization');
const cabinetRouter = require('./routes/cabinet');
const favouritesRouter = require('./routes/favourites');
const reviewRouter = require('./routes/review');
const subscriberRouter = require('./routes/subscriber');

const app = express();

app.use(session({
  secret: 'cat',
}));
app.use(cors());
app.use(bodyParser.json());
app.use(cookieParser());

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', '.hbs');

const publicPath = path.join(__dirname, 'dist');

app.use('/', express.static(publicPath));

const helpers = require('./views/helpers');

hbs.registerPartials(__dirname + '/views/partials');
hbs.registerPartials(__dirname + '/views/svg');
hbs.registerHelper(helpers);

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(bp.json());
app.use(bp.urlencoded({ extended: true }));

app.use('/', indexRouter);
app.use('/products', productsRouter);
app.use('/cart', shopCartRouter);
app.use('/checkout', checkoutRouter);
app.use('/authorization', authorizationRouter);
app.use('/cabinet', cabinetRouter);
app.use('/favourites', favouritesRouter);
app.use('/review', reviewRouter);
app.use('/subscribe', subscriberRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});
module.exports = app;
