// function openFourm(){
//     document.getElementById("o").style.display= "block";
// }
// function closeFourm(){
//     document.getElementById("o").style.display= "none";
// 
let text = document.getElementById("txt");
const year = document.getElementById("txt1");
const element = document.getElementById("myBtn");
element.addEventListener("click",() =>movie(text,year));

const cont = document.getElementById("detailed");

const movie = async(n,movieYear) => {
    const yearr= movieYear.value;
    const resp = await fetch(`http://www.omdbapi.com/?s=${n.value}&apikey=d8324453`)
    const data = await resp.json();
    // console.log(data);
    const title = data;
    const titles = [];
    const posters =[];
    length=data["Search"].length;
    console.log(length);
    for(i=0; i<length; i++){
        if(yearr==data["Search"][i].Year || yearr ==""){
            titles.push([data["Search"][i].Title]);
            posters.push([data["Search"][i].Poster]);
    
        }
    }
    console.log(title["Search"][0])
    console.log(title["Search"][0].Title)
    console.log(title["Search"][0].Poster)
    console.log(title["Search"][0].Type)
    console.log(title["Search"][0].Year)

    const length1=titles.length;
    console.log(length1);
    
    for(let i=0; i<length1; i++){
        let html1 = `<div><img src="${posters[i]}"width="500" height="600"> <h1>${titles[i]}</h1></div>`;

        cont.insertAdjacentHTML("beforeend", html1);
    
    }
  

}



