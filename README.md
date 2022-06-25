# Maratona Ignite Lab <img  align='center' width='100px' src='https://yt3.ggpht.com/ytc/AKedOLQkXnYChXAHOeBQLzwhk1_BHYgUXs6ITQOakoeNoQ=s176-c-k-c0x00ffffff-no-rj'/>

<p align='center'>
  <img src='https://github.com/PedrohvFernandes/maratona-ignite-lab/blob/main/event-plataform/public/screenshot/Wallpaper%20-%201920x1080.png?raw=true'/>
</p>

## Sobre o projeto:
 
#### Nesse projeto foi realizado uma event platform, a onde o aluno cadastrado na plataforma conseguira assistir as aulas da Rocketseat, a data de quando a aula foi lançada, quando que a proxima vai ser lançada etc tudo que o aluno precisa em uma plataforma de eventos

## 🔖 Layout, prototipo e demonstração de como sera feito a aplicação
- Prototipo: https://www.figma.com/file/M1hb6wN2Dsgx5BMzRxivCh/Plataforma-de-evento---Ignite-Lab-(Community)?node-id=40%3A129
- Demonstração Web: https://www.figma.com/proto/M1hb6wN2Dsgx5BMzRxivCh/Plataforma-de-evento---Ignite-Lab-(Community)?page-id=0%3A1&node-id=8%3A399&viewport=-1061%2C780%2C0.46&scaling=min-zoom

## 🌐 Demonstração do app na web:
<img width='350' src=''/>


## Deploy
- Em breve

## ✨Tecnologias:

### Principais Stacks:
- React
- Vite
- NodeJs
- Graphql
- GraphCMS - HeadlessCMS(interface para req de api usando Graphql)
- Graphql-code-generator
- Apollo(req de api's que utilizam Graphql)
- react-router-dom

### Secundarias Stacks:
- Typescript
- Tailwind CSS
- Phosphor icon
- date-fns
- Vime
- classnames


## 🛠️ Features:
- Assistir aulas de forma organizada
- So pode assistir as aulas de acordo com a data prevista na interface.

## 🛠️ Próximas atualizações:
- Deixar o Layout responsivo;
- Colocar algo no /event quando o usuário não clicar em nem uma aula;
- Tela de loading(spinner) quando clicar em uma aula;

## Executando o projeto local: 
### event-platform
- 1- Criar uma conta no GraphCMS e clona esse projeto: https://app.graphcms.com/clone/f411e65e5587442cb48a90a21447a535?name=Ignite%20Lab%2002 OU https://rseat.in/lab-graphcms
- 2- No GraphCM: Em settings -> API Access: copy Content API
- 3- No projeto: Em libe -> apollo.ts: cola sua URL api
- 4- Crie algo em content nas entidades, de preferencia em Professor primeiro e depois em Aula fazendo com que a entidade professor criada anteriormente vire uma FK com a entidade da aula criada agora
- 5- Quando criar o professor em avatar url use de preferencia: https://github.com/SEUNOMENOGITHUB.png
- 6- Quando for criar a aula, o slug cria automaticamente igual o nome da entidade passado por você e o id, passe o que voce quiser, de preferencia o que vem depois do ?v= no youtube ex: SO4-izct7Mc
<pre>
   npm i
   npm run dev / yarn dev 
</pre>

## 👨‍💻 Autor:
- Linkedin: https://www.linkedin.com/in/pedro-henrique-vieira-fernandes
- Git: https://github.com/PedrohvFernandes
- Instagram: pedro17fernandes
- portfolio: PedrohvFernandes.github.io
