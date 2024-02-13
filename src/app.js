import express from 'express'
import cors from 'cors'
import * as quote from './components/quote/quote.route.js'

import 'dotenv/config'

const app = express();

app.use(cors());

app.get('/', (req, res) => {
  res.send('Welcome to Insightful App!')
})


app.use('/api/v1/', quote.default)

const port = process.env.PORT;

const server = app.listen(port, () => {
  console.log(`Insightful app listening on port ${port}`)
})

export default server
