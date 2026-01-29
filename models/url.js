//first i will make schemaa of the url
import mongoose from "mongoose";
//nwo what i need in the shcema 
//first => a hortened url,
//second => a redirect url to which this shortened id will point to
//third => no.of clicks or visits on this url
const urlSchema = mongoose.Schema({
   shortId: {
    type: String,
    required : true,
   },
   redirectUrl : {
    type : String,
    required : true,
   },
   vistited :[{
    timestamp : {
        type: Number,
    }
   }]
},{timestamps: true})

// now i will make the model
 const URL = mongoose.model("url",urlSchema);
export default urlSchema