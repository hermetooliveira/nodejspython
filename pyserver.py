from urllib.request import Request
from flask import Flask, request
import json

# Configurando servidor flask

app = Flask(__name__)

# configurando rota URL que irá realizar o cálculo
# soma total de array

@app.route('/veiculos', methods = ['POST'])
def placa():
    veiculo = request.get_json()
    print(veiculo)
    situacao = 'ROUBO/FURTO!'
    letreiro = veiculo['placa']       
    print(json.dumps({"letreiro":letreiro, "situacao": situacao}))
    return json.dumps({"letreiro":letreiro, "situacao": situacao})
    

if __name__=="__main__":
    app.run(port=5000)    
