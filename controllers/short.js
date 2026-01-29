//now i will make the logic to shorten the givne url by the user 
import mongoose from "mongoose"
import express from "express"
import shortid from "shortid"
import urlSchema from "../models/url"
// now it has to fetch the schema so it will be an async function
const shortener = async (req,res)=>{
    try{
     const body = req.body;
     if(!body) return  res.status(400).json({status: "error"});
     const shortId = shortid(8);
     await URL.create({
        shortId : shortId,
        redirectUrl : body.url,
        visited : [],
     })
     return res.status(201).json({
        status:"success",
        data : URL
     });
    }
    catch(err){
         return res.status(500).json({
            status:"error",
            message : err.message,
         }
        )
    }

}
export default shortener