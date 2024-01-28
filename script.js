let cityName1=document.getElementById("cityName1");
let cityName2=document.getElementById("cityName2");
let button=document.getElementById("button");
let city1=document.getElementById("city1");
let city2=document.getElementById("city2");
let temp1=document.getElementById("tem1");
let temp2=document.getElementById("tem2");



async function getData(cityName){
    
   let promise=await fetch(`http://api.weatherapi.com/v1/current.json?key=0b291b9afdfb4f60a3f123406242701 &q=${cityName}&aqi=yes`);

   return await  promise.json();

}


button.addEventListener("click", async function(){
     let ans1=await getData(cityName1.value);
     let ans2=await getData(cityName2.value);
     city1.innerText=`${ans1.location.name},${ans1.location.region},${ans1.location.country}`;
     temp1.innerHTML=`<h2 id="temp1">temprature(*c):${ans1.current.temp_c} </h2>`;

     city2.innerText=`${ans2.location.name},${ans2.location.region},${ans2.location.country}`;
     temp2.innerHTML=`<h2 id="temp2">temprature(*c):${ans2.current.temp_c} </h2>`;
     

    

});

