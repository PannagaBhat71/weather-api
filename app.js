alert("pls write appropriate city and press the search button. To get weather detailes");
let key = "fe793bf3851cd662671f940c8f1fdddb";
let card = document.querySelector(".card-style");
let h1 = document.querySelector(".h1");
let p1 = document.querySelector(".p1");
let p2 = document.querySelector(".p2");
let p3 = document.querySelector(".p3");
let p4 = document.querySelector(".p4");
let img = document.querySelector(".img");
const getFacts = async() =>{
    const cityinput = document.querySelector(".cityinput").value;
    card.style.display = "flex";
    let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityinput}&appid=${key}`)
    let data = await response.json();
    h1.innerText = data.name;
    let celsius = data.main.temp;
    temp(celsius);


    let discription = data.weather[0].description;
    p2.innerText= discription;
    icon(discription);

    let humidity = data.main.humidity;
    p3.innerText= "humidity:"+humidity+"%";

    let wind = data.wind.speed;
    p4.innerText="wind speed:"+""+wind+"m/s";

    console.log(data);
}

function temp(t){
    t = parseInt(t-273.15);
    
    p1.innerText = `${t}°C`;
}
function icon(d){
    if(d=="clear sky"){
        img.src= "clear.png";
    }else if(d=="overcast clouds"){
        img.src= "cloudy.png";

    }else if(d== "light rain"){
        img.src= "rainy.png";
    }else if(d== "few clouds"){
        img.src= "cloudy.png";
    }else if(d== "broken clouds"){
        img.src= "cloudy.png";
    }else if(d== "scattered clouds"){
        img.src= "cloudy.png";
    }
        

}

