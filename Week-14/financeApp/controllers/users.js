const User = require('../models/user')

let isLoggedIn = false
let loggedInUserEmail = ''

exports.registerUser = function(req,res){
    const userOb = new User({
        email:req.body.email,
        password:req.body.password,
        assets:{
            equity:req.body.assets.equity,
            income:req.body.assets.income,
            mutualFunds:req.body.assets.mutualFunds,
            bonds:req.body.assets.bonds,
        },
        data:{
            year:req.body.data.year,
            month:req.body.data.month,
            accounts:{
                income:req.body.data.accounts.income,
                expenses:req.body.data.accounts.expenses,
                saving:req.body.data.accounts.saving,
            }
        }
    })
    userOb.save(function(err){
        if(err){
            console.log(err)
        }
        else{
            res.json('User registered successfully')
        }
    })
}

exports.loginUser = async (req,res)=>{

    const {email,password} = req.body;

    let userOb = await User.findOne({email:email});

    if(!userOb){
        res.status(400).json({status:0,msg:'user not found'});
    }

    else{
        User.findOne({email:email},(err,foundUser)=>{
            if(err){
                console.log(err)
            }
            else{
                if(foundUser){
                    if(password === foundUser.password){
                        isLoggedIn = true
                        loggedInUserEmail = email
                        res.json({
                            msg:'Logged in successfully'
                        })
                    }
                    else{
                        isLoggedIn = false
                        loggedInUserEmail = ''
                        res.json({
                            msg:'user credentials are wrong'
                        })
                    }
                }
            }
        })
    }
}

exports.showInfo =  async(req,res)=>{

    if(isLoggedIn){

        await User.findOne(function(err,user){
                if(err){
                    console.log(err)
                }
                else{
                    res.json(user.assets)
                }
            })
    }
    else{
        res.json({
            msg:'Please login into your account'
        })
    }
}

exports.deleteUser = function(req,res){
    User.findByIdAndDelete(req.params.id,function(err){
        if(err){
            console.log(err)
        }
        else{
            res.json({
                status:1,
                msg:'Successfully deleted user with id'+req.params.id
            })
        }
    })
}

exports.editUser = function(req,res){
    let updateOb = req.body;
    console.log(updateOb)
    User.findByIdAndUpdate(req.params.id,updateOb,function(err){
        if(err) res.json(err.toString())
        res.json({
            status:1,
            msg:'Successfully edited user with id'+req.params.id
        })
    })
}

exports.filterByYear = async (req,res)=>{
    await User.find({
        'data.year':req.params.year
    },function(err,user){
        res.json(user)
    })
}

exports.filterByMonth = async (req,res)=>{
    await User.find({
        'data.month':req.params.month
    },function(err,user){
        res.json(user)
    })
}