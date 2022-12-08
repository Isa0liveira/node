var fs = require('fs');

fs.appendFile('novoarquivo.txt', 'arquivo criado com sucesso!', function(err){
    if (err) throw err;
    console.log('arquivo criado');
});