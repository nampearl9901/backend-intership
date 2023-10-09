import mongoose from "mongoose";
const {Schema} = mongoose;


const userSchema = new Schema({
    email:{
        type: String,
        require: true,
        unique:true,
    },
    password:{
        type: String,
        require: true,
    },
    name:{
        type: String,
        require:true,
        unique:true
    }
},
{
    timestamps:true
})
export const User = mongoose.model(`user`, userSchema)