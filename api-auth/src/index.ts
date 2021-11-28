import express , { Request, Response, NextFunction} from 'express'
import jwtAuthentication from './middlewares/jwt-auth'
import errorHandler from './middlewares/error-handler.middleware'
import authRoute from './routes/auth'
import route from './routes/routes'

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use(authRoute)
app.use(jwtAuthentication)
app.use(route)

app.get('/status', (req: Request, res: Response , next: NextFunction ) => {
    res.status(200).send({ foo: 'barbudo nub'})

})

app.use(errorHandler)

app.listen(3000, () => {
    console.log('Serve rodando')
})