import express from "express";
import cors from "cors"

const app = express()
app.use(cors({
    origin: "*",
    methods: ['POST', 'GET']
}))
app.use(express.json())

app.get('/', (req, res) => {
    console.log('receved')
    res.status(200).send("alive")
})
app.get('/server1', (req, res) => {
    setInterval(() => {
        try {
            fetch('https://server1.onrender.com')
        } catch (error) {
            
        }
    }, 300000);
})