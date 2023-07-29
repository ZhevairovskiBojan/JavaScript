let input = document.createElement("input");
input.setAttribute("type", "text");
input.setAttribute("placeholder", "Ime na grad");
document.body.appendChild(input);

let button = document.createElement("button");
button.setAttribute('type', 'Click');
button.innerText = 'Click';
document.body.appendChild(button);

let p = document.createElement("p");
p.innerText = 'Pritisni na kopceto';
document.body.appendChild(p);

button.addEventListener('click', fetchWeather);

async function fetchWeather () {
    let input = document.querySelector('input');
    let city = input.value;
    const result = await fetch (`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=5cd5799692e9625b7115ef06970bb8a6&units=metric`);
    const data = await result.json(); 
    let p = document.querySelector("p");
    p.innerHTML = `Temperaturata vo ${city} e ${data.main.temp} Cº`;
}


