import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';


import User from '../models/user.js'

export const signIn = async(req,res) =>{
    // from front end data we get
    const {email, password} = req.body;

    try {
        const exisitingUser = await User.findOne({ email})

        if(!exisitingUser) return res.status(404).json({message: "User does not exist"});
        
        const isPasswordCorrect = await bcrypt.compare(password,exisitingUser.password);

        if(!isPasswordCorrect) return res.status(404).json({message: "Invalid Credentials"});
        //  token sent to frontend
        const token = jwt.sign({ email:exisitingUser.email, id: exisitingUser._id},
            "secret", {expiresIn:'1h'})

        // Return User object   
        res.status(200).json({result :exisitingUser, token:token});



    } catch (error) {
        res.status(500).json({message:'Can not Sign In, Something went wrong'})
        console.log("SIGN IN CONTROLLER ERROR: " + error)
        
    }

}

export const signUp = async (req,res) => {
    const { email, password,repeat_password,first_name,last_name } = req.body;

    try {
        const exisitingUser = await User.findOne({ email });

        if(exisitingUser) return res.status(400).json({message: "User already exist."});

        if(password !== repeat_password) return res.status(400).json({message: "Passwords do not match."});
        // salt : 12
        const hashedPassword = await bcrypt.hash(password, 12)

        const result = await User.create(
            { email, password:hashedPassword, first_name, last_name}
            )

        const token = jwt.sign({ email:result.email, id: result._id},
            "secret", {expiresIn:'1h'})
            
        // return User in Result
        res.status(200).json({result:result , token:token});

    } catch (error) {
        res.status(500).json({message:'Can not Register, Something went wrong'})
        console.log("SIGN IN CONTROLLER ERROR: " + error)
        
    }
    
}