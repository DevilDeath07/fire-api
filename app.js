import express from 'express';
import router from './routes/crackers.route.js';
import connectDB from './lib/db.js';
const app = express();
const port = 3000;
//data understanding middlewares
app.use(express.json());
app.use(express.urlencoded({extended : true}));



//connect to mongodb
connectDB();
app.get('/',(req,res) =>{
    res.json({mes : "HelloW Bala!"});
});

app.use('/api/crackers', router);

app.listen(port,() =>{
    console.log(`Server is run on port http://127.0.0.1:${port}`);
});