# API REST DO ESTOQUE DE UMA LOJA


## Dependências
- Node.js - 12.x.x


## Instalação
Para instalar todas dependências de pacotes:
`npm install`

## Execução

### Aplicação
Para executar a aplicação localmente:
`npm start`

Por padrão a aplicação roda na porta 3000, para alterar a porta na aplicação local, use:
`PORT {porta} npm start`

### Testes
Para executar os testes unitários:
`npm test`

# Documentação
Todas rotas de requisição necessitam de uma autenticação, passada através do cabeçalho 'x-access-token'. Essa autenticação é feita através
da rota `/user/login`, onde é efetuado um login com e-mail e senha. Essa requisição retorna 
uma autorização que deve ser utilizada nas demais requisições. Essa e todas especificações estão 
na [documentação feita no Postman](https://documenter.getpostman.com/view/7476087/TVYQ1Z51).