const menuToggle = document.querySelector('.toggle');
const showcase = document.getElementById('fullpage');

menuToggle.addEventListener('click', () => {
  menuToggle.classList.toggle('active');
  showcase.classList.toggle('active');
})




const apiKey = "VJ45JR5YGCV6MH9NL7AQSCRQX"

window.addEventListener('load', () => {
    let long;
    let lat;
    let temperatureDescription = document.querySelector(".temperature-description")
    let temperatureDegree = document.querySelector(".temperature-degree")
    let locationTimezone = document.querySelector(".location-timezone")
    let temperatureSection = document.querySelector(".degree-section")
    const temperatureSpan = document.querySelector(".temperature-span")

    let city="New York"

   
    
    
   // document.querySelector(".search button").addEventListener("click", function(){ 
    
    fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?key=${apiKey}`)
    .then(response => {
    return response.json()
    })
    .then(data => {
    console.log(data)
    const { temp, conditions, icon } = data.currentConditions
                //Set DOM elements from the API
                temperatureDegree.textContent = temp
                temperatureDescription.textContent = data.description
                locationTimezone.textContent = data.resolvedAddress.replace(/_/g, " ").replaceAll("/", " / ")

                //formula for celcius
                let celcius = (temp - 32)*(5/9)

                //set icons
                setIcons(icon, document.querySelector(".icon"))

                //change to c/f
                temperatureSection.addEventListener("click", () => {
                    if(temperatureSpan.textContent === "F"){
                        temperatureSpan.textContent = "C"
                        temperatureDegree.textContent = celcius.toFixed(1)
                    }else{
                        temperatureSpan.textContent = "F"
                        temperatureDegree.textContent = temp
                    }
                })

                console.log(icon)

                switch (icon) {
                    case "snow":
                      document.querySelector("#myVideo").setAttribute("src", "/videos/snow.mp4")
                      break;
                    case "cloudy":
                      document.querySelector("#myVideo").setAttribute("src", "/videos/cloudy.mp4") 
                
                      break;
                    case "partly-cloudy-day":
                      document.querySelector("#myVideo").setAttribute("src", "/videos/partlycloudyday.mp4")
                      break;
                    case "partly-cloudy-night":
                      document.querySelector("#myVideo").setAttribute("src", "/videos/cloudynight.mp4") 
                      break;
                    case "fog":
                      document.querySelector("#myVideo").setAttribute("src", "/videos/fog.mp4")
                      break;
                    case "rain":
                      document.querySelector("#myVideo").setAttribute("src", "/videos/rain.mp4")
                      break;
                    case "clear":
                      document.querySelector("#myVideo").setAttribute("src", "/videos/clearsky.mp4")
                      break;
                      case "clear-night":
                        document.querySelector("#myVideo").setAttribute("src", "/videos/clearnight.mp4")
                        break;
                     default:
                      document.querySelector("#myVideo").setAttribute("src", "/videos/clearsky.mp4")
                      break;
                  }

    })

    
    
    

    document.querySelector(".search button").addEventListener("click", () => {
        city = document.querySelector(".search-bar").value
        fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?key=${apiKey}`)
    .then(response => {
    return response.json()
    })
    .then(data => {
    console.log(data)
    const { temp, conditions, icon } = data.currentConditions
                //Set DOM elements from the API
                temperatureDegree.textContent = temp
                temperatureDescription.textContent = data.description
                locationTimezone.textContent = data.resolvedAddress.replace(/_/g, " ").replaceAll("/", " / ")

                //formula for celcius
                let celcius = (temp - 32)*(5/9)

                //set icons
                setIcons(icon, document.querySelector(".icon"))

                //change to c/f
                temperatureSection.addEventListener("click", () => {
                    if(temperatureSpan.textContent === "F"){
                        temperatureSpan.textContent = "C"
                        temperatureDegree.textContent = celcius.toFixed(1)
                    }else{
                        temperatureSpan.textContent = "F"
                        temperatureDegree.textContent = temp
                    }
                })

                console.log(icon)

                switch (icon) {
                  case "snow":
                    document.querySelector("#myVideo").setAttribute("src", "/videos/snow.mp4")
                    break;
                  case "cloudy":
                    document.querySelector("#myVideo").setAttribute("src", "/videos/cloudy.mp4") 
              
                    break;
                  case "partly-cloudy-day":
                    document.querySelector("#myVideo").setAttribute("src", "/videos/partlycloudyday.mp4")
                    break;
                  case "partly-cloudy-night":
                    document.querySelector("#myVideo").setAttribute("src", "/videos/cloudynight.mp4") 
                    break;
                  case "fog":
                    document.querySelector("#myVideo").setAttribute("src", "/videos/fog.mp4")
                    break;
                  case "rain":
                    document.querySelector("#myVideo").setAttribute("src", "/videos/rain.mp4")
                    break;
                  case "clear":
                    document.querySelector("#myVideo").setAttribute("src", "/videos/clearsky.mp4")
                    break;
                    case "clear-night":
                      document.querySelector("#myVideo").setAttribute("src", "/videos/clearnight.mp4")
                      break;
                   default:
                    document.querySelector("#myVideo").setAttribute("src", "/videos/clearsky.mp4")
                    break;
                }
    })
    })

    document.querySelector(".search button").addEventListener("keyup", (e) => {
        if (e.key === 'Enter'){
            city = document.querySelector(".search-bar").value
        fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?key=${apiKey}`)
    .then(response => {
    return response.json()
    })
    .then(data => {
    console.log(data)
    const { temp, conditions, icon } = data.currentConditions
                //Set DOM elements from the API
                temperatureDegree.textContent = temp
                temperatureDescription.textContent = data.description
                locationTimezone.textContent = data.resolvedAddress.replace(/_/g, " ").replaceAll("/", " / ")

                //formula for celcius
                let celcius = (temp - 32)*(5/9)

                //set icons
                setIcons(icon, document.querySelector(".icon"))

                //change to c/f
                temperatureSection.addEventListener("click", () => {
                    if(temperatureSpan.textContent === "F"){
                        temperatureSpan.textContent = "C"
                        temperatureDegree.textContent = celcius.toFixed(1)
                    }else{
                        temperatureSpan.textContent = "F"
                        temperatureDegree.textContent = temp
                    }
                })

                function setIcons(icon, iconID){
                    const skycons = new Skycons({color: "white"})
                    const currentIcon = icon.replace(/-/g, "_").toUpperCase() //replacing dash in the icon string to underscore and making everything uppercase so it works with the skycon
                    skycons.play()
                    return skycons.set(iconID, Skycons[currentIcon])
                }

                console.log(icon)

                switch (icon) {
                  case "snow":
                    document.querySelector("#myVideo").setAttribute("src", "/videos/snow.mp4")
                    break;
                  case "cloudy":
                    document.querySelector("#myVideo").setAttribute("src", "/videos/cloudy.mp4") 
              
                    break;
                  case "partly-cloudy-day":
                    document.querySelector("#myVideo").setAttribute("src", "/videos/partlycloudyday.mp4")
                    break;
                  case "partly-cloudy-night":
                    document.querySelector("#myVideo").setAttribute("src", "/videos/cloudynight.mp4") 
                    break;
                  case "fog":
                    document.querySelector("#myVideo").setAttribute("src", "/videos/fog.mp4")
                    break;
                  case "rain":
                    document.querySelector("#myVideo").setAttribute("src", "/videos/rain.mp4")
                    break;
                  case "clear":
                    document.querySelector("#myVideo").setAttribute("src", "/videos/clearsky.mp4")
                    break;
                    case "clear-night":
                      document.querySelector("#myVideo").setAttribute("src", "/videos/clearnight.mp4")
                      break;
                   default:
                    document.querySelector("#myVideo").setAttribute("src", "/videos/clearsky.mp4")
                    break;
                }
    })
        }
        
    })
   
    

    
    
        
        
    

    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(position => {
            long = position.coords.longitude
            lat = position.coords.latitude


            const api = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${lat},${long}?key=${apiKey}&contentType=json`
            

            

            fetch(api)
            .then(response => {
            return response.json()
            })
            .then(data => {
                console.log(data)
                const { temp, conditions, icon } = data.currentConditions
                //Set DOM elements from the API
                temperatureDegree.textContent = temp
                temperatureDescription.textContent = data.description
                locationTimezone.textContent = data.timezone.replace(/_/g, " ").replaceAll("/", " / ")

                //formula for celcius
                let celcius = (temp - 32)*(5/9)

                //set icons
                setIcons(icon, document.querySelector(".icon"))

                //change to c/f
                temperatureSection.addEventListener("click", () => {
                    if(temperatureSpan.textContent === "F"){
                        temperatureSpan.textContent = "C"
                        temperatureDegree.textContent = celcius.toFixed(1)
                    }else{
                        temperatureSpan.textContent = "F"
                        temperatureDegree.textContent = temp
                    }
                })
            })
            })

        
    }

    
        
    
        
        
    



    function setIcons(icon, iconID){
        const skycons = new Skycons({color: "white"})
        const currentIcon = icon.replace(/-/g, "_").toUpperCase() //replacing dash in the icon string to underscore and making everything uppercase so it works with the skycon
        skycons.play()
        return skycons.set(iconID, Skycons[currentIcon])
    }
}) 



let long;
    let lat;
    let temperatureDescription = document.querySelector(".temperature-description")
    let temperatureDegree = document.querySelector(".temperature-degree")
    let locationTimezone = document.querySelector(".location-timezone")
    let temperatureSection = document.querySelector(".degree-section")
    const temperatureSpan = document.querySelector(".temperature-span")

    let city="New York"

   
    
    
   // document.querySelector(".search button").addEventListener("click", function(){ 
    
    fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?key=${apiKey}`)
    .then(response => {
    return response.json()
    })
    .then(data => {
    console.log(data)
    const { temp, conditions, icon } = data.currentConditions
                //Set DOM elements from the API
                temperatureDegree.textContent = temp
                temperatureDescription.textContent = data.description
                locationTimezone.textContent = data.resolvedAddress.replace(/_/g, " ").replaceAll("/", " / ")

                //formula for celcius
                let celcius = (temp - 32)*(5/9)

                //set icons
                setIcons(icon, document.querySelector(".icon"))

                //change to c/f
                temperatureSection.addEventListener("click", () => {
                    if(temperatureSpan.textContent === "F"){
                        temperatureSpan.textContent = "C"
                        temperatureDegree.textContent = celcius.toFixed(1)
                    }else{
                        temperatureSpan.textContent = "F"
                        temperatureDegree.textContent = temp
                    }
                })

                function setIcons(icon, iconID){
                    const skycons = new Skycons({color: "white"})
                    const currentIcon = icon.replace(/-/g, "_").toUpperCase() //replacing dash in the icon string to underscore and making everything uppercase so it works with the skycon
                    skycons.play()
                    return skycons.set(iconID, Skycons[currentIcon])
                }

                console.log(icon)

                switch (icon) {
                  case "snow":
                    document.querySelector("#myVideo").setAttribute("src", "/videos/snow.mp4")
                    break;
                  case "cloudy":
                    document.querySelector("#myVideo").setAttribute("src", "/videos/cloudy.mp4") 
              
                    break;
                  case "partly-cloudy-day":
                    document.querySelector("#myVideo").setAttribute("src", "/videos/partlycloudyday.mp4")
                    break;
                  case "partly-cloudy-night":
                    document.querySelector("#myVideo").setAttribute("src", "/videos/cloudynight.mp4") 
                    break;
                  case "fog":
                    document.querySelector("#myVideo").setAttribute("src", "/videos/fog.mp4")
                    break;
                  case "rain":
                    document.querySelector("#myVideo").setAttribute("src", "/videos/rain.mp4")
                    break;
                  case "clear":
                    document.querySelector("#myVideo").setAttribute("src", "/videos/clearsky.mp4")
                    break;
                    case "clear-night":
                      document.querySelector("#myVideo").setAttribute("src", "/videos/clearnight.mp4")
                      break;
                   default:
                    document.querySelector("#myVideo").setAttribute("src", "/videos/clearsky.mp4")
                    break;
                }
                })

