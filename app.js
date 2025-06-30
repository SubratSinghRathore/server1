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
            fetch('https://server2-urdt.onrender.com')
            .then(res => {
                console.log(res.status)
            })
        } catch (error) {
            console.log(error)
        }
    }, 300000);
})

app.listen(8002, console.log('listening on port 3000'))