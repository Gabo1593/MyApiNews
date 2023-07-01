const key = "3d89c07fb5264605bc9dc9d3226758ba";
const country = "us";
let url = `https://newsapi.org/v2/top-headlines?country=${country}&apiKey=${key}`;
const showNews = document.getElementById("news");
fetch(url).then((responde)=> responde.json()).then(dato =>{
    console.log(dato);
    let news = (dato.articles);
    news.map(function(numero){
        let div = document.createElement("news");
        div.innerHTML = ` <br>
                             <h1>${numero.title}</h1>
                            <img style="max-width:800px" src=${numero.urlToImage}><br>
                            <h2>${numero.description}</h2>
                            <h3>${numero.url}</h3>
        `;
        showNews.appendChild(div);
    })
})