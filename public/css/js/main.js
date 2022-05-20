const cityName=document.getElementById('cityName');
const submitBtn=document.getElementById('submitBtn');
const city_name=document.getElementById('city_name');

const getInfo=async(event)=>
{
    event.preventDefault();
    let cityVal=cityName.ariaValueMax;
     if(cityVal=="")
     {
       cityName.innerText=`Please enter city name before search`
     }
     else
     {
        let url= `https://api.openweathermap.org/data/2.5/weather?q=pune&units=metric&appid=39f650044139ea55f09f364be4218ffe`;
        const response=await fetch(url);

     }
}

submitBtn.addEventListener('click',getInfo);