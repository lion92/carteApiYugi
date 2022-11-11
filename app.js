var express = require('express');
var bodyParser = require('body-parser');

const cors=require('cors');
var connection = require('./app/config/connection');
var routes = require('./app/controllers/routes');

const cookieParser=require("cookie-parser");
var app = express();
var http=require('http').Server(app);

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(cookieParser());

app.use(cors())
app.use(express.static('public'))
app.use('/css', express.static(__dirname + 'public/css'))
app.use('/js', express.static(__dirname + 'public/js'))
app.use('/img', express.static(__dirname + 'public/img'))
app.use('/img', express.static(__dirname + 'public/son'))
app.use(express.static('views'))

// Set Views
app.set('views', './views')
app.set('view engine', 'ejs')

app.get('', (req, res) => {
    res.render('index', { text: 'This is EJS'})
})
app.get('/info', (req, res) => {
  res.render('chat')
})

app.get('/about', (req, res) => {
    res.render('about', { text: 'About Page'})
})
app.get('/partie', (req, res) => {
  res.render('partie')
})
app.get('/bateau', (req, res) => {
  res.render('bateau')
})
app.get('/connexion', (req, res) => {
  res.render('connexion')
})

app.get('/loginpage', (req, res) => {
  res.render('login')
})

app.post('/upload', async (req, res) => {
  try {
    console.log(req);
    
      if(!req.files) {
          res.send({
              status: false,
              message: 'No file uploaded'
          });
      } else {
          let data = []; 
  
          //loop all files
          _.forEach(_.keysIn(req.files.photos), (key) => {
              let photo = req.files.photos[key];
              
              //move photo to uploads directory
              photo.mv('./public/img' + photo.name);
              
              //push file details
              data.push({
                  name: photo.name,
                  mimetype: photo.mimetype,
                  size: photo.size
              });
          });
  
          //return response
          res.send({
              status: true,
              message: 'Files are uploaded',
              data: data
          });
      }
  } catch (err) {
      res.status(500).send(err);

  }
});

connection.init();
routes.configure(app);
//app.listen();



 //pass a http.Server instance
http.listen(8000); 
/*var server = app.listen(8000, function(){


  
  console.log('Server listening on port ' + server.address().port);
});*/
