
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
        this.recreational = 'https://www.boredapi.com/api/activity?type=recreational',
        this.relaxation = 'https://www.boredapi.com/api/activity?type=relaxation',
        this.diy = 'https://www.boredapi.com/api/activity?type=diy',


       this.setupListeners();
       this.getUsersLocation();
       this.darkMode();
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
        this.celc.innerHTML = Math.floor(data.current.temp_c) + '°C';
        this.humiditiy.textContent = `Humidity: ${data.current.humidity} %`;
        this.wind.textContent = `Wind: ${data.current.wind_mph} mph`;
        this.weatherIcon.src = data.current.condition.icon;
        this.weathercondition.innerHTML = data.current.condition.text;
        this.pickActivity();
    }

    async pickActivity(){

        const temp = parseInt(this.celc.innerHTML);
        let endpoint = '';
        
        if(temp > 30){
            endpoint = this.recreational;
        } else if(temp >= 18 || temp <= 25){
            endpoint = this.relaxation;
        } else if(temp <= 11){
            endpoint = this.relaxation;
        }

        if(endpoint !== ''){
            const response = await fetch(endpoint);
            const jsondata = await response.json();
            const actions = jsondata.activity;
            this.activity.innerHTML = actions;
        }


    }

    async getUsersLocation() {
        const successCallback = async (position) => {
            const lat = position.coords.latitude;
            const lon = position.coords.longitude;
    
            const apiURL = `https://api.weatherapi.com/v1/current.json?key=${this.apiKey}&q=${lat},${lon}`;
            const response = await fetch(apiURL);
            const data = await response.json();
    
            // Update the DOM with weather data
            this.city.innerHTML = data.location.name;
            this.celc.innerHTML = Math.floor(data.current.temp_c) + '°C';
            this.humiditiy.textContent = `Humidity: ${data.current.humidity} %`;
            this.wind.textContent = `Wind: ${data.current.wind_mph} mph`;
            this.weatherIcon.src = data.current.condition.icon;
            this.weathercondition.innerHTML = data.current.condition.text;
            this.pickActivity();
            console.log(data)
        };
        const errorCallback = (error) => {
            console.error(`Geolocation error: ${error.message}`);
            // ... handle error appropriately ...
        };

        const options = {
            enableHighAccuracy: true,
            timeout: 10000,
          };
         navigator.geolocation.getCurrentPosition(successCallback, errorCallback,options);
    }

 darkMode(){
    const btn = document.querySelector('#theme-btn');
    const dark = `<span class="material-icons">dark_mode</span>`
    const light = `<span class="material-icons">light_mode</span>`
    const limg =  `<img src="./img/Vector.png" alt="" style="height: 30px;" >`
    const dimg =  `<img src="./img/Vector-dm-01.png" alt="" style="height: 30px;" >`
    const logo = document.querySelector('.logo');

    let theme = localStorage.getItem("T_SITE_THEME") || "light";
    theme === "light" ? setLightTheme() : setDarkTheme();

    function setDarkTheme(){
        document.body.classList.add('dark');
        logo.innerHTML = `${limg} Activity Forecast`;
        btn.innerHTML = dark;
        localStorage.setItem('T_SITE_THEME', 'dark');
        theme = 'dark';
    }

    function setLightTheme(){
        document.body.classList.remove('dark');
        logo.innerHTML = `${dimg} Activity Forecast`;
        btn.innerHTML = light;
        localStorage.setItem('T_SITE_THEME', 'light');
        theme = 'light';
    }

    btn.addEventListener('click', () => {
        if(theme === 'light'){
            setDarkTheme();
        } else {
            setLightTheme();
        }
    })

 }
}