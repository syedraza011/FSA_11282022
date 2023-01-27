const {Character} = require("../db");
const router = require('express').Router();

//gets all characters
router.get('/', async (req, res, next) => {
    try {
        const characters = await Character.findAll();
        res.send(characters)
    } catch (e){
        //error handling code
        next(e);
    }
})

//get indidivual character
router.get('/:id', async (req, res, next)=>{
    try{
        const character = await  Character.findByPk(req.params.id);
        res.send(character);
    }catch(e){
        next(e)
    }
})


module.exports = router;