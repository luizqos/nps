const express = require('express');
const server = express();

server.get('/', (req, res)=>{
    return res.json({mensagem: 'A api está funcionando'})
})

server.listen(3000, ()=>{
    console.log('Server está executando');
}
);