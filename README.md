<img alt="GoStack" src="https://storage.googleapis.com/golden-wind/bootcamp-gostack/header-desafios.png" />
<h2 align="center">
  Desafios Bootcamp GoStack
</h2>

<p align="center">
  <a href="README.en.md">English</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="README.md">Português</a>&nbsp;&nbsp;&nbsp;
</p>


# Fundamentos NodeJs


5° desafio do bootcamp GoStack - Criar uma aplicação que permita transações financeira, nela é possível realizar transações do tipo income e outcome, transações do tipo outcome só poderão ser realizadas em o saldo total for maior/igual ao valor de saque.

Essa aplicação foi construída utilizando nodejs em typscript, para instalar as dependências utilize o comando yarn.

A aplicação estará disponível em http://localhost:3333/transactions e estão implementados os métodos GET e POST;

As requisições do tipo POST deverão respeitar o seguinte formato:

{
"title": "Salário",
"value": 3000,
"type": "income"
}

ou 

{
"title": "Cadeira Gamer",
"value": 1200,
"type": "outcome"
}

Não se esqueça de conferir os outros desafios em https://github.com/francielleandro

Obrigado!
