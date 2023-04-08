
export class Weather{
    constructor(apiKey) {
        this.apiKey = apiKey,
        this.apiUrl = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=`;
        this.searchBox = document.querySelector('.search'),
        this.city = document.querySelector('.city'),
        this.celc = document.querySelector('.celc'),
        this.weatherIcon = document.getElementById('weather-icon'),
        this.wind = document.querySelector('.wind'),
        this.humiditiy = document.querySelector('.humidity'),
        this.weathercondition = document.querySelector('.weatcond'),
        this.activity = document.querySelector('.activity'),

       this.setupListeners()
    }

    setupListeners(){
        this.searchBox.addEventListener('keydown',async(event) => {
            if (event.key === 'Enter'){
                event.preventDefault();
                this.checkWeather(this.searchBox.value);
                this.searchBox.value = '';
            }
        })
    }

    async checkWeather(city){
        const response = await fetch(`${this.apiUrl}${city}`);
        let data = await response.json();

        this.city.innerHTML = data.location.name;
        this.celc.textContent = Math.floor(data.current.temp_c);
        this.humiditiy.textContent = `Humidity: ${data.current.humidity} %`;
        this.wind.textContent = `Wind: ${data.current.wind_mph} mph`;
        this.weatherIcon.src = data.current.condition.icon;
        this.weathercondition.innerHTML = data.current.condition.text;
    }


}
