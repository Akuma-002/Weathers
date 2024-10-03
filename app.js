let location_ = document.querySelector("#location");
let form = document.querySelector("form");
let outname = document.querySelector("#name");
let outcountry = document.querySelector("#country");
let temp = document.querySelector("#temp")
let realfeel = document.querySelector("#realfeel");
let state = document.querySelector("#state");



form.addEventListener("submit", async (event) => {
    event.preventDefault();
    let locationValue = location_.value;
    console.log(locationValue);
    try{
        let url = `https://api.weatherapi.com/v1/current.json?key=57776c8a01e04047b2533626242909&q=${locationValue}&aqi=no`
        let result = await fetch(url);
        // const config = {Headers: {accept : }}
        let data = await result.json();
        console.log(data);
        outname.innerText = data.location.name;
        outcountry.innerText = data.location.country;
        temp.innerText = `${data.current.temp_c}° C`;
        console.log(data.current.temp_c);
        realfeel.innerText = `Feels Like ${data.current.feelslike_c}° C`;
        console.log(data.current.feelslike_c);
        state.innerText = data.location.region;
        console.log(data.location.region);
        }
        catch (e){
            alert(`error ${e}`);
        }
});



