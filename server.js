import express from 'express'
const app = express()
app.get('/', (req, res) => res.send('Hello There'))
app.listen(3030, () => console.log('Server ready at port http://127.0.0.1:3030/'))


app.get('/bug', (req, res) => {
    res.send('<h1>Hello Bugs!<h1>')
})
app.get('/api/bug/save', (req, res) => {})
app.get('/api/bug/:bugId', (req, res) => {})
app.get('/api/bug/:bugId/remove', (req, res) => {})