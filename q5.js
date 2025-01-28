const Temperature={
  
    toFahrenheit:(temp)=>{
        return "Fahrenheit Temperature:"+((temp * 9/5) + 32);
    },
    toCelsius: (temp)=>{
        return "Celsius Temperature:" + ((temp - 32) * 5/9);
    }
}
console.log(Temperature.toCelsius(100.4));
console.log(Temperature.toFahrenheit(38));