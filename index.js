import express, { json, urlencoded } from 'express'
import path from 'path'
import cors from 'cors'
import { fileURLToPath } from 'url'
import { dirname } from 'path'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const app = express()
const port = 1500

app.use(cors())
app.use(json())
app.use(urlencoded({ extended: true }))

app.get('/ductos_pemex', (req, res) => {
    const kmlPath = path.join(__dirname, 'assets', 'KML', 'DuctosPemex.kml')
    res.sendFile(kmlPath)
})

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`)
})