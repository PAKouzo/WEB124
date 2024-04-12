import bcrypt from 'bcryptjs';
import UsersModel from '../model/users.js';
import dotenv from 'dotenv';
import jwt from 'jsonwebtoken'

dotenv.config()
const {TOKEN_SECRET} = process.env;

const creatAuth = {
    register: async (req, res) => {
        const {username, password} = req.body;
        const salt = bcrypt.genSaltSync(10)
        const hash = bcrypt.hashSync(password, salt) 
    
        const createUser = await UsersModel.create({ 
            username,
            password: hash,
        });
        res.status(201).send({
            message: "Register successful",
            data: createUser
        })    
    },
    login: async (req, res) => {
        const {username, password} = req.body;
        const users = await UsersModel.find({username: username, password: password})
        const payload = {
            username: users.username,
            password: users.password
        }
        const token = jwt.sign(payload, TOKEN_SECRET, { expiresIn: '1h' });
        res.status(200).send(token)
    }
}

export default creatAuth;