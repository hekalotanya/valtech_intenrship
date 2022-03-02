const createError = require('http-errors');
const express = require('express');
const cors = require('cors');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const hbs = require('hbs');

const indexRouter = require('./routes/home');
const productsRouter = require('./routes/products');
const productDetailRouter = require('./routes/product_detail');

const app = express();

app.use(cors());

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', '.hbs');
const publicPath = path.join(__dirname, 'dist');
app.use('/', express.static(publicPath));

hbs.registerPartials(__dirname + '/views/partials');
hbs.registerHelper('product', function(products, page, limit) { 
  let result = ''
  let firstProduct = (page-1) * limit;
  let lastProduct = firstProduct + limit-1;
  for (let i = firstProduct; i <= lastProduct; i++) {
    if (products && products[i]) {
      result += `<div class="products__product_card product_card">
    <img src="${products[i].images[0].path}" alt="" class="product_card__image">
    <div class="product_card__text text">
      <span class="text__name">${products[i].name}</span>
      <span class="text__price">${products[i].price}</span>
      <span class="text__color">${products[i].color}</span>
      <span class="text__size">Size: ${products[i].size}</span>
      <span class="text__category">Category: ${products[i].category.name}</span>
      <span class="text__description">${products[i].description}</span>
    </div>
    <div class="product_card__buttons">
      <a href="" class="icon">
        <svg width="43" height="43" viewBox="0 0 43 43" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g filter="url(#filter0_d_3_5350)">
          <circle cx="21.5" cy="20.5" r="17.5" fill="white"/>
          </g>
          <path d="M27.7884 15.5189C27.003 14.6882 25.9631 14.2342 24.8533 14.2342C23.7435 14.2342 22.7004 14.6916 21.915 15.5223L21.5048 15.9561L21.0882 15.5156C20.3027 14.6849 19.2565 14.2241 18.1467 14.2241C17.0401 14.2241 15.997 14.6815 15.2148 15.5088C14.4293 16.3395 13.9968 17.4427 14 18.6164C14 19.7901 14.4357 20.8899 15.2211 21.7206L21.1931 28.0366C21.2758 28.124 21.3871 28.1711 21.4952 28.1711C21.6034 28.1711 21.7147 28.1274 21.7973 28.0399L27.7821 21.734C28.5675 20.9033 29 19.8002 29 18.6265C29.0032 17.4527 28.5739 16.3496 27.7884 15.5189ZM27.1779 21.0917L21.4952 27.0781L15.8253 21.0816C15.202 20.4224 14.8586 19.548 14.8586 18.6164C14.8586 17.6848 15.1989 16.8104 15.8221 16.1546C16.4422 15.4988 17.269 15.1355 18.1467 15.1355C19.0276 15.1355 19.8575 15.4988 20.4808 16.1579L21.1995 16.918C21.368 17.0963 21.6383 17.0963 21.8069 16.918L22.5192 16.1647C23.1425 15.5055 23.9724 15.1423 24.8501 15.1423C25.7278 15.1423 26.5546 15.5055 27.1779 16.1613C27.8011 16.8205 28.1414 17.6949 28.1414 18.6265C28.1446 19.5581 27.8011 20.4325 27.1779 21.0917Z" fill="black"/>
          <defs>
          <filter id="filter0_d_3_5350" x="0" y="0" width="43" height="43" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
          <feFlood flood-opacity="0" result="BackgroundImageFix"/>
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
          <feOffset dy="1"/>
          <feGaussianBlur stdDeviation="2"/>
          <feColorMatrix type="matrix" values="0 0 0 0 0.541176 0 0 0 0 0.623529 0 0 0 0 0.658824 0 0 0 0.15 0"/>
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_3_5350"/>
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_3_5350" result="shape"/>
          </filter>
          </defs>
        </svg>
      </a>
      <a href="" class="icon">
        <svg width="43" height="43" viewBox="0 0 43 43" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g filter="url(#filter0_d_3_5345)">
          <circle cx="21.5" cy="20.5" r="17.5" fill="#60A00C"/>
          </g>
          <path d="M17.4354 16.4115C19.6499 14.2929 22.9641 14.2605 25.2093 16.1945L23.4297 16.2657C23.2 16.2754 23.0223 16.4763 23.0315 16.7193C23.0407 16.9557 23.2245 17.1404 23.445 17.1404C23.4512 17.1404 23.4542 17.1404 23.4604 17.1404L26.1926 17.0335C26.4162 17.0238 26.5908 16.8326 26.5908 16.5962V16.5638C26.5908 16.5573 26.5908 16.554 26.5908 16.5476V16.5443L26.4897 13.6871C26.4805 13.4442 26.2875 13.2563 26.0609 13.266C25.8311 13.2757 25.6535 13.4766 25.6627 13.7195L25.727 15.5109C24.6151 14.5488 23.2459 13.9916 21.7818 13.9139C19.9685 13.8167 18.2256 14.4743 16.881 15.7636C15.0309 17.5356 14.2468 20.2308 14.8349 22.7965C14.8808 22.9973 15.0493 23.1302 15.2361 23.1302C15.2698 23.1302 15.3004 23.1269 15.3341 23.1172C15.5547 23.0589 15.6925 22.8224 15.6374 22.5892C15.1228 20.3345 15.8089 17.9664 17.4354 16.4115Z" fill="white"/>
          <path d="M28.1651 19.5992C28.11 19.3659 27.8864 19.2202 27.6659 19.2785C27.4453 19.3368 27.3075 19.5733 27.3626 19.8065C27.8803 22.0612 27.1911 24.4292 25.5646 25.9842C24.4221 27.0758 22.9886 27.6136 21.5612 27.6136C20.1982 27.6136 18.8382 27.1244 17.7416 26.1591L19.5427 25.9874C19.7694 25.9647 19.9378 25.7541 19.9164 25.5112C19.8949 25.2682 19.6958 25.0933 19.4661 25.116L16.7431 25.3751C16.5164 25.3978 16.348 25.6084 16.3694 25.8513L16.6144 28.7312C16.6328 28.958 16.8135 29.1297 17.0249 29.1297C17.0371 29.1297 17.0494 29.1297 17.0616 29.1264C17.2883 29.1037 17.4568 28.8932 17.4353 28.6502L17.2883 26.8977C18.4002 27.8501 19.7632 28.404 21.2182 28.4818C21.3346 28.4882 21.451 28.4915 21.5643 28.4915C23.252 28.4915 24.8571 27.8371 26.119 26.632C27.9691 24.8601 28.7532 22.1681 28.1651 19.5992Z" fill="white"/>
          <defs>
          <filter id="filter0_d_3_5345" x="0" y="0" width="43" height="43" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
          <feFlood flood-opacity="0" result="BackgroundImageFix"/>
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
          <feOffset dy="1"/>
          <feGaussianBlur stdDeviation="2"/>
          <feColorMatrix type="matrix" values="0 0 0 0 0.541176 0 0 0 0 0.623529 0 0 0 0 0.658824 0 0 0 0.15 0"/>
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_3_5345"/>
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_3_5345" result="shape"/>
          </filter>
          </defs>
        </svg>
      </a>
      <a href="" class="icon">
        <svg width="43" height="43" viewBox="0 0 43 43" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g filter="url(#filter0_d_3_5337)">
          <circle cx="21.5" cy="20.5" r="17.5" fill="white"/>
          </g>
          <path d="M18.5031 23.7109H26.7681C27.7052 23.7109 28.4698 22.9023 28.4698 21.9111V18.2334C28.4698 18.2302 28.4698 18.2236 28.4698 18.2204C28.4698 18.2106 28.4698 18.2041 28.4698 18.1943C28.4698 18.1878 28.4698 18.1813 28.4667 18.1747C28.4667 18.1682 28.4636 18.1584 28.4636 18.1519C28.4636 18.1454 28.4605 18.1389 28.4605 18.1324C28.4574 18.1258 28.4574 18.1193 28.4544 18.1095C28.4513 18.103 28.4513 18.0965 28.4482 18.09C28.4451 18.0835 28.4451 18.0769 28.442 18.0704C28.4389 18.0639 28.4359 18.0574 28.4328 18.0476C28.4297 18.0411 28.4266 18.0345 28.4235 18.0313C28.4205 18.0248 28.4174 18.0182 28.4143 18.0117C28.4112 18.0052 28.4081 18.0019 28.405 17.9954C28.402 17.9889 28.3958 17.9824 28.3927 17.9759C28.3896 17.9693 28.3865 17.9661 28.3804 17.9596C28.3773 17.953 28.3711 17.9498 28.368 17.9433C28.365 17.9367 28.3588 17.9335 28.3557 17.927C28.3526 17.9204 28.3465 17.9172 28.3434 17.9139C28.3372 17.9074 28.3341 17.9041 28.328 17.8976C28.3218 17.8943 28.3187 17.8878 28.3126 17.8846C28.3064 17.8813 28.3002 17.8748 28.2941 17.8715C28.2879 17.8683 28.2848 17.865 28.2786 17.8617C28.2725 17.8585 28.2663 17.8552 28.2601 17.8487C28.254 17.8454 28.2478 17.8422 28.2416 17.8389C28.2355 17.8357 28.2293 17.8324 28.2232 17.8291C28.217 17.8259 28.2108 17.8226 28.2047 17.8194C28.1985 17.8161 28.1923 17.8161 28.1862 17.8128C28.18 17.8096 28.1707 17.8063 28.1646 17.8063C28.1584 17.8063 28.1522 17.8031 28.1492 17.8031C28.1399 17.7998 28.1338 17.7998 28.1245 17.7998C28.1214 17.7998 28.1183 17.7965 28.1122 17.7965L17.6368 16.2674V14.722C17.6368 14.7057 17.6368 14.6894 17.6337 14.6764C17.6337 14.6731 17.6337 14.6698 17.6306 14.6633C17.6306 14.6535 17.6275 14.6437 17.6275 14.634C17.6245 14.6242 17.6245 14.6177 17.6214 14.6079C17.6214 14.6014 17.6183 14.5981 17.6183 14.5916C17.6152 14.5818 17.6121 14.572 17.609 14.5622C17.609 14.559 17.606 14.5525 17.606 14.5492C17.6029 14.5394 17.5998 14.5329 17.5936 14.5231C17.5905 14.5199 17.5905 14.5133 17.5875 14.5101C17.5844 14.5036 17.5813 14.497 17.5751 14.4905C17.572 14.484 17.569 14.4807 17.5659 14.4742C17.5628 14.4677 17.5597 14.4644 17.5566 14.4579C17.5535 14.4514 17.5474 14.4449 17.5443 14.4383C17.5412 14.4351 17.5381 14.4318 17.5351 14.4286C17.5289 14.422 17.5227 14.4155 17.5166 14.409C17.5135 14.4057 17.5104 14.4025 17.5073 14.3992C17.5011 14.3927 17.495 14.3862 17.4857 14.3797C17.4826 14.3764 17.4765 14.3731 17.4734 14.3699C17.4672 14.3634 17.4611 14.3601 17.4549 14.3536C17.4456 14.3471 17.4364 14.3405 17.4302 14.3373C17.4272 14.334 17.4241 14.334 17.421 14.3308C17.4087 14.3242 17.3932 14.3177 17.3809 14.3112L15.1089 13.3005C14.8962 13.2059 14.6526 13.3103 14.5632 13.5352C14.4738 13.7602 14.5725 14.0178 14.7852 14.1123L16.8013 15.0122V17.0075V17.3238V19.7495V21.9177V24.6564C16.8013 25.5693 17.4487 26.3257 18.2842 26.4398C18.1331 26.7072 18.0437 27.0202 18.0437 27.3527C18.0437 28.3341 18.799 29.1296 19.7238 29.1296C20.6487 29.1296 21.404 28.3308 21.404 27.3527C21.404 27.0267 21.3207 26.7169 21.1728 26.4561H24.9153C24.7673 26.7202 24.6841 27.0267 24.6841 27.3527C24.6841 28.3341 25.4394 29.1296 26.3642 29.1296C27.2891 29.1296 28.0444 28.3308 28.0444 27.3527C28.0444 26.3746 27.2891 25.5758 26.3642 25.5758H18.5031C18.0221 25.5758 17.6337 25.1617 17.6337 24.6564V23.4631C17.8865 23.6196 18.1855 23.7109 18.5031 23.7109ZM20.5747 27.3495C20.5747 27.845 20.1924 28.2461 19.7269 28.2461C19.2614 28.2461 18.8792 27.8418 18.8792 27.3495C18.8792 26.8571 19.2614 26.4529 19.7269 26.4529C20.1924 26.4529 20.5747 26.8539 20.5747 27.3495ZM27.2151 27.3495C27.2151 27.845 26.8328 28.2461 26.3673 28.2461C25.9018 28.2461 25.5195 27.8418 25.5195 27.3495C25.5195 26.8571 25.9018 26.4529 26.3673 26.4529C26.8328 26.4529 27.2151 26.8539 27.2151 27.3495ZM26.7681 22.8306H18.5031C18.0221 22.8306 17.6337 22.4165 17.6337 21.9111V19.743V17.3173V17.1542L27.6374 18.6116V21.9079C27.6374 22.4198 27.2459 22.8306 26.7681 22.8306Z" fill="black"/>
          <defs>
          <filter id="filter0_d_3_5337" x="0" y="0" width="43" height="43" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
          <feFlood flood-opacity="0" result="BackgroundImageFix"/>
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
          <feOffset dy="1"/>
          <feGaussianBlur stdDeviation="2"/>
          <feColorMatrix type="matrix" values="0 0 0 0 0.541176 0 0 0 0 0.623529 0 0 0 0 0.658824 0 0 0 0.15 0"/>
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_3_5337"/>
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_3_5337" result="shape"/>
          </filter>
          </defs>
        </svg>
      </a>
      <a href="" class="icon">
        <svg width="43" height="43" viewBox="0 0 43 43" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g filter="url(#filter0_d_3_5341)">
          <circle cx="21.5" cy="20.5" r="17.5" fill="white"/>
          </g>
          <path d="M28.8687 27.235L25.2234 23.5898C26.2013 22.4656 26.7933 20.9989 26.7933 19.3958C26.7933 15.867 23.923 13 20.3975 13C16.8687 13 14.0017 15.8703 14.0017 19.3958C14.0017 22.9213 16.872 25.7916 20.3975 25.7916C22.0006 25.7916 23.4673 25.1996 24.5915 24.2217L28.2367 27.867C28.3232 27.9534 28.4396 28 28.5527 28C28.6658 28 28.7822 27.9568 28.8687 27.867C29.0416 27.694 29.0416 27.408 28.8687 27.235ZM14.8964 19.3958C14.8964 16.3625 17.3642 13.898 20.3942 13.898C23.4274 13.898 25.892 16.3659 25.892 19.3958C25.892 22.4257 23.4274 24.8969 20.3942 24.8969C17.3642 24.8969 14.8964 22.429 14.8964 19.3958Z" fill="black"/>
          <defs>
          <filter id="filter0_d_3_5341" x="0" y="0" width="43" height="43" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
          <feFlood flood-opacity="0" result="BackgroundImageFix"/>
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
          <feOffset dy="1"/>
          <feGaussianBlur stdDeviation="2"/>
          <feColorMatrix type="matrix" values="0 0 0 0 0.541176 0 0 0 0 0.623529 0 0 0 0 0.658824 0 0 0 0.15 0"/>
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_3_5341"/>
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_3_5341" result="shape"/>
          </filter>
          </defs>
        </svg>
      </a>
    </div>
  </div>`
    }
  }

  return result;
})
hbs.registerHelper('page2', (value) => { 
  let result = '<a id="1" class="page">1</a>';

  if (Math.ceil(value / 6) >= 2) {
    result += '<a id="2" class="page">2</a>'
  }

  if (Math.ceil(value / 6)  >= 3) {
    result += '<a id="3" class="page">3</a>'
  }

  if (Math.ceil(value / 6)  >= 4) {
    result += '<a id="increase" class="page">></a>';
  }

  return result;
})


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/', indexRouter);
app.use('/products', productsRouter);
app.use('/productDetail', productDetailRouter);

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
