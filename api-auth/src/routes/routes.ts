import { NextFunction, Request, Response, Router } from "express";
import {StatusCodes} from 'http-status-codes'
import UserRepository from '../repositories/repository'

const route = Router()

route.get('/users', async (req : Request, res: Response , next: NextFunction) => {
    const users = await UserRepository.findAllUsers()
    res.status(StatusCodes.OK).send(users)
})

route.get('/users/:uuid', async (req: Request<{ uuid: string }>, res: Response , next: NextFunction) => {
    
    try { 
        const uuid = req.params.uuid
        const user = await UserRepository.findById(uuid)
        res.status(StatusCodes.OK).send({user})
    } catch (error) {
        next(error)
    }
})

route.post('/users', async (req: Request, res: Response , next: NextFunction) => {
    const newUser = req.body
    const uuid = await UserRepository.create(newUser)
    res.status(StatusCodes.CREATED).send({uuid})
})

route.put('/users/:uuid', async (req: Request<{ uuid: string }>, res: Response , next: NextFunction) => {
    const uuid = req.params.uuid
    const updatedUser = req.body
    updatedUser.uuid = uuid

    await UserRepository.update(updatedUser)
    res.status(StatusCodes.OK).send()
})

route.delete('/users/:uuid', async (req: Request<{ uuid: string }>, res: Response , next: NextFunction) => {
  
    const uuid = req.params.uuid
    await UserRepository.remove(uuid)
    res.sendStatus(StatusCodes.NO_CONTENT)  
    
})


export default route

