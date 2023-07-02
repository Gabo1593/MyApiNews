const inputBusiness = document.getElementById("business");
const inputEntertainment = document.getElementById("entertainment");
const inputGeneral = document.getElementById("general");
const inputHealth = document.getElementById("health");
const inputScience = document.getElementById("science");
const inputSports = document.getElementById("sports");
const inputTechnology = document.getElementById("technology");
const sectionCategory = document.querySelector(".category");
let category;
sectionCategory.addEventListener("click",  reload)
function reload(){
    location.reload();
}
function categorys(){
    
    if (inputHealth.checked){
        category = "health"
    }else if(inputBusiness.checked){
        category = "business"
    }else if(inputEntertainment.checked){
        category = "entertainment"
    }else if(inputScience.checked){
        category = "science"
    }else if(inputSports.checked){
        category = "sports"
    }
    else if(inputTechnology.checked){
        category = "technology"
    }
    else{  category = "general";}
}
const background = categorys();

const key = "3d89c07fb5264605bc9dc9d3226758ba";
const country = "us";
let url = `https://newsapi.org/v2/top-headlines?country=${country}&apiKey=${key}&category=${category}`;
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