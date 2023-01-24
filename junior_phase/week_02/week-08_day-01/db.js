// const { response } = require("express")
// const fetch=require ("node-fetch")
// const load=fetch("https://swdestinydb.com/api/public/cards/")
// .then (response=>{
//     console.log(response.json());
// })
// load();
const axios = require("axios")
const list=["tim","erik","mich"];
const getOne=async()=>{
    // return list[id]
    const response=await axios.get("https://swdestinydb.com/api/public/cards/");
    console.log(response)
}
// console.log(JSON.stringyfy(getOne(0)));
console.log(getOne());