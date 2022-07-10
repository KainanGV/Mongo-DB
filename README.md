# Mongo-DB

- Linguagem de consulta de dados para banco de dados não relacional, ou seja nosql
- Dados podem ter estruturas diferentes
- a collection só existe se tiver dados nela
- Posso ter document dentro de outro document ({})

## Comparação SQL X NoSQL

|SQL |NoSQL
--- | --- |
|database|database
|table|collections
|rows|document(BSON)
|columns|fields

## Tipo de dados em MongoDB
- String
- Boolean
- Number
- Date
- Document, {}

## Comandos
- mongod, para iniciar o serviço do Mongodb
- 'db', refere-se há o meu banco de dados atual
- db.pessoas.insertOne({dados})
- db.pessoas.insertMany([{dados}])
- db.collection.find().pretty, para ler os dados de uma forma limpa
- db.collection.find({}), as chaves para colocar o where do document
- db.collection.find().count, para contas os documents
- db.pessoas.updateOne({nome: "Kainan Gabriel" }, {$set: {isEmpregado: false}})
- db.pessoas.updateMany({}, {$set: {newField: "value"}}), para criar um novo campo ou atualizar muitos valores
- db.collection.deleteOne, para deletar document
- db.collection.deleteMany, para deletar varios dados
- db.collection.drop()
- db.dropDatabase()

Operators em mongoDB possui o prefixo: '$', eles são usados para fazer operações relacionais
- $gt, maior que
- $gte, maior ou igual
- $lt, menor que
- $lte, menor ou igual

Operators exclusivos em update
- $inc, operador de incremento e decremento, ex db.collection.updateOne({name: "sla", {$inc: { salario: 1000 }}})

Indices, aumenta a performance no momento da busca de alguma informação
- db.pessoas.createIndex({ "name": 1 })
- db.pessoas.dropIndex("name_index")
- db.pessoas.getIndexes()

