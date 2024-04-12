import jwt from 'jsonwebtoken'
import dotenv from 'dotenv';

dotenv.config();
const {TOKEN_SECRET} = process.env;

export const validate = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    if(authHeader){
        const token = authHeader.split(' ')[1];
        jwt.verify(token, TOKEN_SECRET, (err, decoded) => {
            if(err) {
                console.log("JWT verification failed: ", err.message);
                next();
            }
            else {
                console.log('Decoded JWT: ', decoded);
            }
    })
    } 
    else {
        res.status(401).json({message: 'Access token is missing'});
    }
    
}
export default validate;