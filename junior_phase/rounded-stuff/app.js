const express= require('express');
const app =express();
const PORT =8080;
const characterRouter = require('./routes/characters');

const {db}= require('./db');

const setup = async()=>{
    try{
        app.use('/characters',characterRouter);

        app.use((req,res)=>{
            res.status(404).send("Nothing is here");
        })

        await db.sync();
        app.listen(PORT, ()=>{
            console.log(`hosting on ${PORT}`);
        })

    }catch(e){
        console.log(e)
    }
}

setup();

