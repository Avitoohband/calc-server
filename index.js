import epxress from 'express';
import dotenv from 'dotenv';



const app = epxress();
dotenv.config();

app.listen(3001, ()=>{
    console.log(`server is running on port: ${3000}`);
})

