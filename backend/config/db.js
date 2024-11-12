import mongoose from "mongoose";

export const connectDB = async () =>{
    await mongoose.connect('mongodb+srv://umavemula2005:WJFYDMeud2BfPtbW@cluster0.rlxavnw.mongodb.net/foodData?retryWrites=true&w=majority').then(()=>{
       console.log('DB connected') ;
    })
}