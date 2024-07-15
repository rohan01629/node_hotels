const express = require('express')
const app = express();
const db = require('./db');

const bodyParser = require('body-parser');
app.use(bodyParser.json()); //req.body


const MenuItem = require('./models/MenuItem');

app.get('/', function (req, res) {
  res.send('welcome to my hotel...how can i help you ?')
})


    
//import the router files

const personRoutes = require('./routes/personRoutes');
const menuItemRoutes = require('./routes/menuItemRoutes');
//use the routers
app.use('/person',personRoutes);
app.use('/menu',menuItemRoutes);

app.listen(3000,()=>{
    console.log('listening on port 3000');
})