import { NextFunction, Request, Response, Router } from "express";
import Jwt  from "jsonwebtoken";
import { StatusCodes } from "http-status-codes";
import basicAuthentication from "../middlewares/basic-auth";
import ForbiddenError from "../models/errors/forbidden.error.model";
import jwtAuthentication from "../middlewares/jwt-auth";

const authRoute = Router()

authRoute.post('/token', basicAuthentication, async (req: Request, res: Response, next: NextFunction) => {

    try {
        const user = req.user
        
        if(!user){
            throw new ForbiddenError("Usuário não informado");
            
        }
        
        const jwtPayload = {usermane: user.username }
        const jwtOptions = {subject: user?.uuid }
        const secretKey = 'my_secret_key'

        const jwt = Jwt.sign(jwtPayload, secretKey, jwtOptions)
        res.status(StatusCodes.OK).json({token: jwt})

    } catch (error) {
        next(error)
    }

})

authRoute.post('token/validate', jwtAuthentication, (req: Request, res: Response, next: NextFunction) => {
    res.sendStatus(StatusCodes.OK)
})

export default authRoute