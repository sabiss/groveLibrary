import app from './src/app.js'
const porta = 3000;

app.listen(porta, ()=>{
    console.log(`Iniciando porta http://localhost:${porta}`)
})