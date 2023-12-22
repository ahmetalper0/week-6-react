import { useState } from 'react';
import '../TempratureConverter.css'

function TemperatureConverter() {

  const [celsius, setCelsius] = useState();
  const [result, setResult] = useState();

  const handleInputChange = (e) => {
    setCelsius(e.target.value);
  };

  const convertToKelvin = () => {
    if (!isNaN(celsius)) {
      const kelvin = parseFloat(celsius) + 273.15;
      setResult(kelvin);
    } else {
      setResult('Lütfen geçerli bir değer girin.');
    }
  };
  
  const convertToFahrenheit = () => {
    if (!isNaN(celsius)) {
      const fahrenheit = (parseFloat(celsius) * 9/5) + 32;
      setResult(fahrenheit);
    } else {
      setResult('Lütfen geçerli bir değer girin.');
    }
  };
  
  return (
  
    <div>
      <h2>Sıcaklık Dönüştürücü</h2>
      <div>Celsius</div>
      <input type="text" placeholder="Celsius değerini girin" onChange={handleInputChange}/>
      <br />
      <button type="submit" onClick={convertToKelvin}>Kelvin Dönüştür</button>
      <br />
      <button type="submit" onClick={convertToFahrenheit}>Fahrenheit Dönüştür</button>
      <div>Sonuç : {result}</div>
    </div>

  )
 
}

export default TemperatureConverter;