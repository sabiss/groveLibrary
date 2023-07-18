import express from "express";
import livros from "./livrosRouter.js"

const routes = (app) => {//pega a instância do express que é o app
    app.route('/').get((req, res) =>{
        res.status(200).send({titulo:"Curso alura"})
    })

    app.use(//outras rotas que serão USE(u)das
        express.json(),
        livros
    )
}

export default routes