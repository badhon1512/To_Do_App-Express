const express=require('express');

const app=express();



app.listen(3000);



app.get('/',(req,res)=>{

res.sendFile('./view/index.html',{root:__dirname});
})


app.get('/add-item',(req,res)=>{

  res.sendFile('./view/add-item.html',{root:__dirname});
})

app.use((req,res)=>{
  res.sendFile('./view/error.html',{root:__dirname});

})