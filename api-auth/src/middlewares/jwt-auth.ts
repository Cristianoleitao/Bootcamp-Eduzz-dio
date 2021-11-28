import { NextFunction, Request, Response } from "express";
import ForbiddenError from "../models/errors/forbidden.error.model";
import Jwt  from "jsonwebtoken";

async function jwtAuthentication(error: any, req: Request, res: Response, next: NextFunction) {
    try {
        const authorizationHeader = req.headers['authorization']

        if (!authorizationHeader) {
            throw new ForbiddenError("Credenciais não informada");

        }

        const [authenticatonType, token] = authorizationHeader.split(' ')

        if (authenticatonType !== 'Bearer' || !token) {
            throw new ForbiddenError("Tipo de authenticação invalido");
        }

        const tokenPayload = Jwt.verify(token, 'my_secret_key')

        if (typeof tokenPayload !== 'object' || !tokenPayload.sub) {
            throw new ForbiddenError("Token invalido");     
        }
    
        const user = {
            uuid: tokenPayload.sub,
            username: tokenPayload.username
        }

        req.user = user
        next()

    } catch (error) {
        next(error)
    }
  
}

export default jwtAuthentication;