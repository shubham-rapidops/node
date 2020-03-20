
const express = require('express');
const app = express();
const courses =require('./routes/courses')


app.use(express.json());
app.use("/api/courses" , courses)



app.set("view engine",'pug');
app.set("views",'./view');



///   GET request  GET DATA



app.get('/',(req,res) => {
    res.render('index',{title:"My app",message:"hellp"})
});






const port = process.env.PORT || 5000;

app.listen(port , () => { console.log(`listening at ${port}`);
});
