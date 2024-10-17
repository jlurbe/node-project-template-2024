import express from 'express'
import dotenv from 'dotenv'

dotenv.config()

const app = express()
const port = process.env.PORT || 3000
if (port === 3000) console.log(`Listening on port ${port}`)

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
