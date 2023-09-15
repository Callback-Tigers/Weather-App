import React, {useState} from "react";
import summer from "./img/summer.jpg"
import winter from "./img/winter.jpg"
import rainy from "./img/rainy.jpg"



const App = () => {

    const [lat, setLat] = useState(null)
    const [long, setLong] = useState(null)
    const [hemisphere, setHemisphere] = useState(null)
    const [month, setMonth] = useState(new Date().getMonth()+1)

    let imgStyle={
        width: "700px"
    }

      function getLocation(){

           if(navigator.geolocation){
                navigator.geolocation.getCurrentPosition(
                    (position)=>{
                            setLat(position.coords.latitude)
                            setLong(position.coords.longitude)

                            if(position.coords.latitude > 0){
                                setHemisphere("Northen Hemisphere")
                            }
                            else if(position.coords.longitude < 0){
                                setHemisphere("Southern Hemisphere")
                            }
                            else{
                                setHemisphere("Equator")
                            }
                    }
                )
           }

        //    function winterSummer(){

        //    }

      }
     


    return (
        <div>
              <h1>Weather App</h1>
                <h2>Latitude: {lat}</h2>
                <h2>Longitude: {long}</h2>
                <h2>Hemisphere: {hemisphere}</h2>
                <h2>Month: {month}</h2>
             <button onClick={getLocation}>Get Location</button>

             {
                 hemisphere!=null &&  (
                    (hemisphere == "Northen Hemisphere"  && month>=5 && month<=7) || (hemisphere == "Southern Hemisphere"  && month>=6 && month<=8) )
                    &&
                     <div>
                          <h1>Summer</h1>
                          <img style={imgStyle} src={summer} alt="Summer Season" />
                    </div>
                 
             }
             {
                 hemisphere!=null &&  hemisphere == "Northen Hemisphere"  && month>=8 && month<=10 &&
                     <div>
                          <h1>Rainy Season</h1>
                          <img style={imgStyle} src={rainy} alt="Rainy Season" />
                    </div>
                 
             }
        </div>
    );

}

export default App;




// let a = 10 

// setTimeout(()=>++a, 1000) 


// if(a == 11){
//     console.log("Hello")
// }
// else{
//     console.log("bye")
// }


// Northern Hemisphere: 

// may to July -summer
// aug - oct-rainy
// nov- jan - winter 
// feb - April - automn