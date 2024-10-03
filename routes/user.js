import { Router } from "express";
import { register, login, logout} from "../controllers/user.js";

 export const userRouter = Router();

//Define Routes
userRouter.post('register', register);

userRouter.post('login', login);

userRouter.post('logout', logout);

