const express = require('express');
var app = express();
const hbs = require('hbs');
hbs.registerPartials(__dirname+"/views/partials")
hbs.registerHelper('getName',()=>{
    return 'Achref'
})
app.set('view engine','hbs');
app.use(express.static(__dirname+ '/public'));
app.use((req,res,next)=>{
    var now = new Date().toString();
    console.log(now+" "+ req.method)
  next();
});

app.get('/',(req,res)=>{

   // res.send('hello Express')
   res.send({
       name:'Achref',
       like:{
           number:2
       } 
   })
});
app.get('/about',(req,res)=>{
  res.render('about.hbs',{
      pageTitle:'About page',
      currentYear: new Date().getFullYear()
  })
})

app.listen(3000,()=>{
    console.log('Server 127.0.0.1:3000')
});