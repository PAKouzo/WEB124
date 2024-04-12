import { Router } from "express";
import creatAuth from "../controllers/users.js";
import validate from "../middleware/users.js";

const authRouter = Router();

authRouter.post('/register', creatAuth.register)
authRouter.post('/login',creatAuth.login)
authRouter.post('/resource', validate, creatAuth.login)

export default authRouter;