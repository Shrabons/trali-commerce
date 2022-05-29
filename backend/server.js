const express = require('express')
var cors = require('cors')
const bcrypt =  require('bcrypt')
const heroData = require('./heroData')
const logoData = require('./logoData')
const deal = require('./dealData')
const topProduct = require('./topProductData')
const freeshop = require('./freeshop')
const Userman = require ('./model/usermodel.js')
const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://trali:trali123@cluster0.yxoos.mongodb.net/trali?retryWrites=true&w=majority', ()=>{
  console.log("DB Conneted !")
});

const app = express()
app.use(cors())
app.use(express.json())

app.post('/signup', (req, res) => {
  bcrypt.hash(req.body.password, 10, (err, hash)=> {
    let user = {
      username: req.body.username,
      email: req.body.email,
      password: hash
    }
    const UserDb = new Userman(user)
    UserDb.save()
   
  })

  
})

app.post('/login', async (req, res)=> {

  let data = await Userman.find({email: req.body.email})
  if(data[0]){
    bcrypt.compare(req.body.password,data[0].password, function(err, docs){
      if(docs){
       res.send({data: data[0], msg: "Account Found"})
      }else {
        res.send({msg: "Account Not Found"})
      }
    })
  }else {
    res.send({msg: "Email Not Found"})
  }
})

// vendor careteing working function 
app.put('/vendor/:id', (req, res)=> {
  console.log(req.params.id)
  Userman.findByIdAndUpdate(req.params.id,{isVendor: true},{ returnOriginal: false }, function(err, docs) {
    if(err){
      console.log(err)
    }else {
      res.send(docs)
    }
  })
})

app.get('/hero',(req, res)=>{
  res.send(heroData)
})
app.get('/logo', (req,res) => {
  res.send(logoData)
})

app.get('/deal',(req,res)=>{
  res.send(deal)
})

app.get('/product', (req, res)=>{
  res.send(topProduct)
})
app.get('/freeshop', (req, res)=>{
  res.send(freeshop)
})

app.listen(8000, ()=> {
    console.log("server ruing port 8000")
})