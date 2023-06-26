const http = require("http"); //importando módulo http
const porta = 3000;

const rotas = {//objeto que contém todas as possíveis rotas que podem estar na url e o que elas irão exibir
    //lembre do google.com/*minha_pesquisa_aqui*
    '/': 'Bem vindo a GroveLibray',
    '/livros': 'lista de livros',
    '/autores': 'lista de autores'
}
const server = http.createServer((req, res) => {
    //req = minha requisição, a URL
    //res = a resposta que vou dar
    res.writeHead(200, {'Content-Type': 'text/plain'});
    //minha repsosta vai ter o código 200 = ok | e o conteúdo vai ser o tipo texto
    res.end(rotas[req.url])//aqui ele vê o objeto rotas qual das querisições bate com a do navegador
    //ex:req = localhost/livros -> ai eles vai mostrar o que tem em "/livros" lá no objeto ROTAS
})

server.listen(porta, () => {
    //passo a porta que o servidor vai rodar(escutar as requisições) e mostro uma mensagem pra saber se funcionou
    console.log(`Escutando porta ${porta}`)
})