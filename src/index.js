const express = require('express');
const app = express();
const port = 3000
const nodemailer = require('nodemailer');

const user = "#################"
const pass = "######"

app.get('/',(req, res) => res.send('Hello Word'));

app.get('/send',(req, res) => {
  const transporter = nodemailer.createTransport({
    host: "smtp.hostinger.com",
    port: 465,
    auth:{user,pass}

  });

  transporter.sendMail({
    from:user,
    to:user,
    replyTo:"#############_@hotmail.com",
    subject:"Ola,o seu cadastro foi efetuado!",
    text:"Fique de olho nas nossas redes sociais",
  }).then(info=>{
    res.send(info)
  }).catch(error =>{
    res.send(error)
  });


})

app.listen(port, () => {
  console.log(`Running on port ${port}!`)
})
