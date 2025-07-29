# api-gerenciadora-de-podcasts-com-typescripts
# nome do aplicativo
pódcast menager

### descriçao
um app ao estilo netflix aonde possa centralizar diferentes episodeos podcasts 
separados por categoria 

### dominio
podcasts feito em video

### features
 - listar os podcasts em sessoes de categorias
   - [saude, bodybuilder, mentalidade, humor]
 - filtrar episodeos por nome de podcast

## Como

#### feature:
- listar os podcasts em sessoes de categorias

### como vou implementar:
GET: vou retornar em uma api rest (json) o 
nome podcast, nome do episodio, imagem de capa, link, categoria
```js
{
    podcastName: "flow"
    episode: "CBUM - Flow #319"
    cover: "https://i.ytimg.com/vi/pQSuQmUfS30/hqdefault.jpg?sqp=-oaymwEnCPYBEIoBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUABrs=AOn4CLCY0Mpjnn8itKAySqpf0QURZKw"
    link:"https://www.youtube.com/watch?v=pQSuQmUfS30"
    category: ["saude", "bodybuilder"]
},
{
    podcastName: "flow"
    episode: "SPACE TODAY - Flow Podcast #231"
    cover: "https://i.ytimg.com/vi/PC_tgI7Tf8E/hqdefault.jpg?sqp=-oaymwEnCNACELwBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUABrs=AOn4CLBsHXjEj6d1CHGBm9-Cwo5FYsPrEA"
    link:"https://www.youtube.com/watch?v=PC_tgI7Tf8E"
    category: ["mentalidade"]
}
```

GET: retorna lista de episodios baseado em um parametro enviado pelo cliente do nome de podcast
