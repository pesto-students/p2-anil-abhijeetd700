const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    email:{type:String},
    password:{type:String},
    assets:{
        equity:{type:Number},
        income:{type:Number},
        mutualFunds:{type:Number},
        bonds:{type:Number}
    },
    data:{
        year:{type:Number},
        month:{type:String},
        accounts:{
            income:{type:Number},
            expenses:{type:Number},
            saving:{type:Number}
        }
    }
})

module.exports = mongoose.model('User',UserSchema);