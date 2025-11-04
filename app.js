import express from 'express';
import router from './routes/crackers.route.js';
import connectDB from './lib/db.js';
import cors from 'cors';

const corsOptions = {
    origin: 'http://localhost:4200', // Allow requests from this origin
    optionsSuccessStatus: 200 // Some legacy browsers (IE11, various SmartTVs) choke on 204
};

const app = express();
const port = 3000;
//data understanding middlewares
app.use(express.json());
app.use(express.urlencoded({extended : true}));
app.use(cors(corsOptions));



//connect to mongodb
connectDB();
app.get('/',(req,res) =>{
    res.json({mes : "HelloW Bala!"});
});

app.use('/api/crackers', router);

app.listen(port,() =>{
    console.log(`Server is run on port http://127.0.0.1:${port}`);
});