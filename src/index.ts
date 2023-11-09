import express from 'express'
import cors from 'cors'
// import { UserController } from './controller/UserController'
import { AccountController } from './controller/AccountController'
import { userRouter } from './router/userRouter'

const app = express()

app.use(cors())
app.use(express.json())

app.listen(3003, () => {
    console.log(`Servidor rodando na porta ${3003}`)
})

// const userController = new UserController()

// app.get("/users", userController.getUsers)
// app.post("/users", userController.createUser)

app.use("/users", userRouter)


// TODO = accountRouter
const accountController = new AccountController()

app.get("/accounts", accountController.getAccounts)
app.get("/accounts/:id/balance", accountController.getAccountBalance)
app.post("/accounts", accountController.createAccount)
app.put("/accounts/:id/balance", accountController.editAccountBalance)
