var request = require('request-promise');

async function placa() {
        var data = {
            placa: 'OSA0670'
        }

        var options = {
            method: 'POST',
            uri: 'http://127.0.0.1:5000/veiculos',
            body: data,
            json: true
        };

        var sendrequest = await request(options)
        .then(function(parsedBody) {
            console.log(parsedBody);
            let letreiro;
            let situacao;
            letreiro = parsedBody['letreiro'];
            situacao = parsedBody['situacao'];
            
            console.log("A placa é : ", letreiro);
            console.log("A situação do veículo é: ", situacao)

        })
        .catch(function(err){
            console.log(err)
        });

}

placa()