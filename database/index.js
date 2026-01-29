import mongoose from "mongoose"
// now i will make a method which i can use anywhere to update database
const connectDB = async()=>{
    try{
        const connect = await mongoose.connect(process.env.MONGO_URI,{
          tls: true,
         tlsAllowInvalidCertificates: true,
        });
        console.log("MONGO connected");
        
    }
    catch(err){
        console.log("Mongo not connected",err);
        process.exit(1);
    }
}
export default connectDB;