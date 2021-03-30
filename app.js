const express=require('express');

const app=express();

let items=[
  {name:'mobole phone',
  price:10000
},
{name:'Laptop',
  price:20000
}
,{name:'Ipad',
price:100000
}
]


app.set('view engine','ejs');



app.listen(3000);



app.get('/',(req,res)=>{

res.render('index',{items:items})
})


app.get('/add-item',(req,res)=>{

  res.render('add-item');
})

app.use((req,res)=>{

  res.render('error');

})