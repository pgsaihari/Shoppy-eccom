const mongoose=require('mongoose')

const connectToDb=mongoose.connect(process.env.MONGOOSE_URI).then(()=>{
    console.log("connected to mongoose database")
}).catch(err=>console.log(err))

module.exports=connectToDb