## Finance APP
APIs:

login : users log into app,
signup : new users registration,
update : update the data on the basis of key,
portfolio : get all information of your account,
delete : delete the data with key,
updateexpense : update the expenses,
byyear : filter the expenses by year,
bymonth : fiter the expenses by month

## Features

You can do following thinks with this repository:

/login : get logged in,
/logout : get logged out,
/signup : pass the data in body and get the userId and key,
/update : update the data on the basis of key,
/portfolio : get all information of your account,
/delete : delete the data with key,
/updateexpense : update the expenses,
/byyear : filter the expenses by year,
/bymonth : fiter the expenses by month

## Database Schema
```json
{
    email:String,
    password:String,
    accounts : [{
        year:Number,
        month:String,
        data:{
            income:Number,
            expenses:Number
        }
    }],
    assets:{
	    equity:Number,
	    income:Number,
	    liabilities:Number,
	    savings: Number,
	}
}
```