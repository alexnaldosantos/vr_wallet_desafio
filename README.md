# Atenção!

Este é um projeto de prova de conceito feito por Alexnaldo Santos (alexnaldo.santos@gmail.com).
Seu uso é meramente didático, sendo proibida sua reprodução sem a devida autorização.
Meu contato é : [Alexnaldo Santos](https://www.linkedin.com/in/alexnaldo/)


# Iniciando - Instalar o Json Server (porta 3000)

>**Note**: É necessário ter o [JSon Server](https://reactnative.dev/docs/environment-setup)
```bash
npm install -g json-server
```

 ## Rodando o JSon Server
Execute o comando a seguir diretamente na pasta principal do projeto

```bash
json-server --watch db.json
```
>**Note** - Os testes foram feitos no emulador do Android, que utiliza a porta 10.0.2.2 como alternativa ao localhost
Verifique no arquivo src/data/api.ts

## Passo 1: Inicie Metro Server

No diretório principal do projeto execute:

```bash
# using npm
npm start

# OR using Yarn
yarn start
```

## Step 2: Rodar os testes unitários
Foram feitos alguns testes unitários a fim de demonstrar como os componentes visuais podem ser testados.

# using npm
npm test

# OR using Yarn
yarn test
```

## Step 3: Inicie a aplicação


### For Android

```bash
# using npm
npm run android

# OR using Yarn
yarn android
```

### For iOS

```bash
# using npm
npm run ios

# OR using Yarn
yarn ios
```