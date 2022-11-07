const express=require('express');
const app=express();

const nodemailer=require("nodemailer");

const PORT=process.env.PORT || 5000;

//middleware
app.use(express.static('travel'))
app.use(express.json())

app.get('/',(req,res)=>{
res.sendFile(__dirname+'/travel/travel-main.html')
})

app.post('/',(req,res)=>{
    console.log(req.body)
const contactdetails=`
<p>You have a new messaage</p>
<h2>Contact Details</h2>
<ul>
<li>USERNAME: ${req.body.name}</li>
<li>EMAIL: ${req.body.email}</li>
<li>MOBILE: ${req.body.num}</li>
</ul>
<h2>Message</h2>
<p>${req.body.msg}</p>
`
    
    const transporter=nodemailer.createTransport({
        service:'gmail',
    auth:{
        user:'easy123id@gmail.com',
        pass:'hqnarqxmtesrfgmp'
    }
})
const mailOptions={
    subject:`New Message from ${req.body.name}`,
    from:'"TRAVEL USER" <easy123id@gmail.com>',
    to:'easy123id@gmail.com',
    html:contactdetails
}
transporter.sendMail(mailOptions,(error, info)=>{
    if(error){
        console.log(error);
        res.send('error');
    }else{
        console.log(`email ${info.response}`)
        res.send('success')
    }
})
})
app.listen(PORT,()=>{
    console.log(`server running on port ${PORT}`)
})
