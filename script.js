const btnConverter = document.querySelector("#btnConverter");
const resultado = document.querySelector("#resultado");

console.log(btnConverter);


btnConverter.addEventListener("click", ()=>{
    const temperaturaCelsius = parseFloat(document.querySelector("#temperaturaCelsius").value);
    let temperaturaFahrenheit = (temperaturaCelsius*9)/5+32;
    resultado.innerHTML = `A temperatura de ${temperaturaCelsius}ºC corresponde a ${temperaturaFahrenheit}ºF. `

})