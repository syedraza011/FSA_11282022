const db = require('./_db');
const Character = require('./character');

//makes so we need reference ot only one file rather than each individual
module.exports={
    db,
    Character
}