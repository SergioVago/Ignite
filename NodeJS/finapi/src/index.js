const e = require('express')
const express = require('express')
const { v4: uuid } = require('uuid')

const app = express()

app.use(express.json())

const costumers = []

// Middleware
function verifyIfExistisAccountCPF(request, response, next) {
  const { cpf } = request.headers

  const costumer = costumers.find((costumer) => costumer.cpf === cpf)

  if (!costumer) {
    return response.status(400).json({
      error: "Costumer not found!"
    })
  }

  request.costumer = costumer

  return next()
}

function getBalance(statement) {
  const balance = statement.reduce((acc, operation) => {
    if (operation.type === 'credit') {
      return acc + operation.amount
    } else {
      return acc - operation.amount
    }
  }, 0)

  return balance
}

/**
 * cpf - string
 * name - string
 * id - uuid
 * statement []
 */
app.post('/account', (request, response) => {
  const { cpf, name } = request.body

  const customerAlreadyExistis = costumers.some((costumer) => costumer.cpf === cpf)

  if (customerAlreadyExistis) {
    return response.status(400).json({
      error: "Costumer already existis!"
    })
  }

  const newAccount = {
    id: uuid(),
    name,
    cpf,
    statement: []
  }

  costumers.push(newAccount)

  return response.status(201).send()
})

// app.use(verifyIfExistisAccountCPF)

app.get('/statement', verifyIfExistisAccountCPF, (request, response) => {
  const { costumer } = request

  return response.json(costumer.statement)
})

app.post('/deposit', verifyIfExistisAccountCPF, (request, response) => {
  const { description, amount } = request.body
  const { costumer } = request

  const statementOperation = {
    description,
    amount,
    created_at: new Date(),
    type: 'credit'
  }

  costumer.statement.push(statementOperation)

  return response.status(201).send()
})

app.post('/withdraw', verifyIfExistisAccountCPF, (request, response) => {
  const { amount } = request.body
  const { costumer } = request

  const balance = getBalance(costumer.statement)

  if (balance < amount) {
    return response.status(400).json({
      error: "Insufficient founds!"
    })
  }

  const statementOperation = {
    amount,
    created_at: new Date(),
    type: 'debit'
  }

  costumer.statement.push(statementOperation)

  return response.status(201).send()
})

app.get('/statement/date', verifyIfExistisAccountCPF, (request, response) => {
  const { costumer } = request
  const { date } = request.query

  const dateFormat = new Date(date + " 00:00")

  const statements = costumer.statement.filter((statement) =>
    statement.created_at.toDateString() === new Date(dateFormat).toDateString())

  return response.json(statements)
})

app.put('/account', verifyIfExistisAccountCPF, (request, response) => {
  const { name } = request.body
  const { costumer } = request

  costumer.name = name

  return response.status(201).send()
})

app.get('/account', verifyIfExistisAccountCPF, (request, response) => {
  const { costumer } = request

  return response.json(costumer)
})

app.delete('/account', verifyIfExistisAccountCPF, (request, response) => {
  const { costumer } = request

  costumers.splice(costumer, 1)

  return response.status(200).json(costumers)
})

app.get('/balance', verifyIfExistisAccountCPF, (request, response) => {
  const { costumer } = request

  const balance = getBalance(costumer.statement)

  return response.json(balance)
})

app.listen(3333, () => console.log('Server running on port 3333'))