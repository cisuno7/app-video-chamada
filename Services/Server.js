import express from 'express';

const app = express();
app.use(express.json()); 


app.get('/', () => {
    console.log("oi")
})

const port = 3001;
app.listen(port, () => {
    console.log(`API rodando na porta ${port}.`);
});
