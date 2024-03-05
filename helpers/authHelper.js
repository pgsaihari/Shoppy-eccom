const bcrypt =require('bcrypt')

module.exports={
     hashPassword:async(password)=>{
        try {
            const saltRound=10
            const hashPassword =await bcrypt.hash(password,saltRound)
            return hashPassword
        } catch (error) {
            console.log(error)
        }    
    },
    comparePassword:async(password,hashedPassword)=>{
        return bcrypt.compare(password,hashedPassword)
    }
}