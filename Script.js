let speed=document.getElementById("speed");
let img=document.getElementById("img");
let humidity=document.getElementById("humidity");
let search=document.getElementById("search");
let temp=document.getElementById("temp");
let City=document.getElementById("City");
let btn=document.getElementById("btn");
let hide=document.getElementById("hide");
btn.addEventListener("click",()=>{
    let apikey="87892ee0aa83c4e56a73be951d1103bf";
    console.log(search.value)
    let url=`https://api.openweathermap.org/data/2.5/weather?q=${search.value}&appid=${apikey}&units=metric`;
    
    const getdata=async()=>{
        const response= await fetch(url);
        const data=await response.json();
        if(response.status == 404){
            alert ("this wrong Word you type here");
        }
        console.log(data.wind.speed+"Km/h");
        console.log(data.main.humidity+"%");
        console.log(data.main.temp+"C")
        hide.style.display="block";
        temp.innerHTML=data.main.temp+"C";
        City.innerHTML=data.name;
        speed.innerHTML=data.wind.speed+"Km/h";
        humidity.innerHTML=data.main.humidity+"%";
        
        if(data.weather[0].main== "Clouds"){
            img.src="images/Cloud.png";

        }else if(data.weather[0].main == "Clear"){
            img.src="images/Sun.png";

        }else if(data.weather[0].main == "Rain"){
            img.src="images/Rain2.png"

        }else if(data.weather[0].main == "Drizzle"){
            img.src="images/Rain.png";

        }else if(data.weather[0].main=="Mist"){
            img.src="images/mist.png";
        }
    };
    getdata();
})