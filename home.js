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
                      document.querySelector("#myVideo").setAttribute("src", "https://firebasestorage.googleapis.com/v0/b/ianreasweather.appspot.com/o/snow.mp4?alt=media&token=68bd99d5-4924-4d42-be55-8d4aa3c2524e")
                      break;
                    case "cloudy":
                      document.querySelector("#myVideo").setAttribute("src", "https://firebasestorage.googleapis.com/v0/b/ianreasweather.appspot.com/o/cloudy.mp4?alt=media&token=8593e653-ad23-4088-ad06-bb91f5ed4073") 
                
                      break;
                    case "partly-cloudy-day":
                      document.querySelector("#myVideo").setAttribute("src", "https://firebasestorage.googleapis.com/v0/b/ianreasweather.appspot.com/o/partlycloudyday.mp4?alt=media&token=fb30860c-4b59-4058-bb5b-e92b0ee49500")
                      break;
                    case "partly-cloudy-night":
                      document.querySelector("#myVideo").setAttribute("src", "https://firebasestorage.googleapis.com/v0/b/ianreasweather.appspot.com/o/cloudynight.mp4?alt=media&token=af11bd83-4ac8-4c6f-80d6-66e99c1944d1") 
                      break;
                    case "fog":
                      document.querySelector("#myVideo").setAttribute("src", "https://firebasestorage.googleapis.com/v0/b/ianreasweather.appspot.com/o/fog.mp4?alt=media&token=315ec33d-8c2e-4c8d-b6b3-8ec19f278b64")
                      break;
                    case "rain":
                      document.querySelector("#myVideo").setAttribute("src", "https://firebasestorage.googleapis.com/v0/b/ianreasweather.appspot.com/o/rain.mp4?alt=media&token=e996a1d7-d4c3-4cf3-ba9a-749bf06df8a4")
                      break;
                    case "clear":
                      document.querySelector("#myVideo").setAttribute("src", "https://firebasestorage.googleapis.com/v0/b/ianreasweather.appspot.com/o/clearsky.mp4?alt=media&token=9627c8a2-24f5-4b36-ae24-2111591b3f6c")
                      break;
                      case "clear-night":
                        document.querySelector("#myVideo").setAttribute("src", "https://firebasestorage.googleapis.com/v0/b/ianreasweather.appspot.com/o/clearnight.mp4?alt=media&token=69599bca-4472-4282-b41c-9ce9f886162e")
                        break;
                     default:
                      document.querySelector("#myVideo").setAttribute("src", "https://firebasestorage.googleapis.com/v0/b/ianreasweather.appspot.com/o/clearsky.mp4?alt=media&token=9627c8a2-24f5-4b36-ae24-2111591b3f6c")
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

