let express = require('express');
let session = require('express-session');
let bodyParser = require('body-parser');
let cors = require('cors');
let config = require('./config.js');
let profileCtrl = require('./controllers/profileCtrl.js')
let userCtrl = require('./controllers/userCtrl.js')

let app = express();

var corsOptions = {
  origin: 'http://localhost:3000'
};
app.use(express.static('public'));
app.use('/node_modules', express.static('node_modules'));
app.use(bodyParser.json());
app.use(cors(corsOptions));
app.use(session({ secret: config.sessionSecret}));

app.post('/api/login', userCtrl.login);
app.get('/api/profiles', profileCtrl.friends);

const port = 3000;
app.listen(port, function() {
  console.log(`listen to ${port}`);
})
