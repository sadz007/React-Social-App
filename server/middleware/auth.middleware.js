import jwt from 'jsonwebtoken';
import dotenv from 'dotenv'



const auth = async (req, res, next) => {

    try {
        // token from fronthead to verify authentication
        // Google Authentication

        const token = req.headers.authorization.split(" ")[1];
        
        // console.log("MIDDLE WEAR TOKEN", token)
        // Custom Auth
        const isCustomAuth = token.length < 500;


        let decodedData;

        if (token && isCustomAuth){
            decodedData = jwt.verify(token, process.env.SECRET)
            req.userId = decodedData?.id;

        }else{
            // for Google 
            decodedData = jwt.decode(token)
            req.userId = decodedData?.sub;

            // google id is called Sub 
        }
        next()

        
    } catch (error) {
        console.log("Auth Middle Error",error);
        
    }

}

export default auth;