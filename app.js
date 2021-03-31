const express=require('express');
const mongoose=require('mongoose');

const app=express();

const Item=require('./models/items');


const mongodb="mongodb+srv://badhon12:badhon123@cluster0.mmywa.mongodb.net/item-database?retryWrites=true&w=majority";

mongoose.connect(mongodb,{ useUnifiedTopology: true , useNewUrlParser: true}).then(()=> console.log('connected')).catch(err=>console.log(err));



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
app.use(express.urlencoded({extended:true}))



app.listen(3000);


app.delete('/delete-item/:id',(req,res)=>{

  Item.findByIdAndDelete(req.params.id).then(result=> res.redirect('/')).catch(err=>console.log(err));

      
})

app.get('/get-item',(req,res)=>{
  
  
  Item.find().then(result=>res.send(result));
})
 app.get('/create-item',(req,res)=>{
   let item=new Item({
     name:'phone',
     price:100
   })
   
   item.save().then(result=>res.send(result));
 })
app.get('/',(req,res)=>{

  Item.find().then(result=>res.render('index',{items:result}));



})

app.post('/add-item',(req,res)=>{

  const item=new Item(req.body)
  item.save().then(result=>res.redirect('/')).catch(err=>console.log(err));
})
app.get('/add-item',(req,res)=>{

  res.render('add-item');
})

app.use((req,res)=>{

  res.render('error');

})