import { NextFunction, Request, Response } from "express";
import ForbiddenError from "../models/errors/forbidden.error.model";
import UserRepository from '../repositories/repository'

async function basicAuthentication(error: any, req: Request, res: Response, next: NextFunction) {
    try {
        const authorizationHeader = req.headers['authorization']

        if (!authorizationHeader) {
            throw new ForbiddenError("Credenciais não informada");

        }

        const [authenticatonType, token] = authorizationHeader.split(' ')
        if (authenticatonType !== 'Basic' || !token) {
            throw new ForbiddenError("Tipo de authenticação invalido");
        }
        const tokenContent = Buffer.from(token, 'base64').toString('utf-8')

        const [usermane , password] = tokenContent.split(':')

        if(!usermane || !password){
            throw new ForbiddenError("Credenciais ");
            
        }
        const user = await UserRepository.findAllUsernameAndPassword(usermane, password)

        if(!user){
            throw new ForbiddenError("Usuário ou senha inválidos");
            
        }

        req.user = user
        next()

    } catch (error) {
        next(error)
    }
  
}

export default basicAuthentication;