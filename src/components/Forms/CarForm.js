import React, { useState } from "react";
import carbackground from "../../images/carbackground.png"
function CarForm() {
  const [formData, setFormData] = useState({
    manufacturer: "",
    model: "",
    prod_year: "",
    category: "",
    fuel_type: "",
    mileage: "",
    drive_wheels: "",
    doors: "",
    wheel: "",
    color: "",
    airbags: "",
  });
  const [prediction, setPrediction] = useState(null);

  const handleChange = (e) => {
    let { name, type, checked, value } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch("http://127.0.0.1:5000/predict", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const data = await response.json();
    setPrediction(data.prediction);
  };

  return (
    <div
    style={{
      backgroundImage: `url(${carbackground})`,
      backgroundSize: '400px', // Image size is set to auto to allow repeating
      backgroundRepeat: 'repeat', // Allows the image to repeat
      backgroundPosition: 'center', // Centers the image
      backgroundRepeat:"repeat"
  }}
   className='flex flex-col justify-center items-center '
    >
    <div className=" bg-white w-[380px] flex flex-col items-center my-12 py-10 shadow-[0_0_8px_gray] md:w-[500px]">
      <h1 className='font-semibold text-lg'>Car Price Prediction</h1>
      <div >
        <form
          onSubmit={handleSubmit}
          className="flex flex-col leading-[6vh] my-[46px] mx-[30px] w-[80%] text-black text-[17px]"
        >
          <label>Manufacturer:</label>
          <input
            type="text"
            name="manufacturer"
            value={formData.manufacturer}
            onChange={handleChange}
            className="w-[300px]  h-8  p-[6px] my-[10px] text-[12px] border border-gray-300 rounded-md shadow-md transition-all duration-300 ease-in-out focus:border-green-500 focus:shadow-[0_0_8px_rgba(2,154,2,0.5)] focus:outline-none"
          />

          <label>Model:</label>
          <input
            type="text"
            name="model"
            value={formData.model}
            onChange={handleChange}
            className="w-[300px]  h-8 p-[6px] my-[10px] text-[12px] border border-gray-300 rounded-md shadow-md transition-all duration-300 ease-in-out focus:border-green-500 focus:shadow-[0_0_8px_rgba(2,154,2,0.5)] focus:outline-none"
          />

          <label>Production Year:</label>
          <input
            type="number"
            name="prod_year"
            value={formData.prod_year}
            onChange={handleChange}
            className="w-[300px] h-8  p-[6px] my-[10px] text-[12px] border border-gray-300 rounded-md shadow-md transition-all duration-300 ease-in-out focus:border-green-500 focus:shadow-[0_0_8px_rgba(2,154,2,0.5)] focus:outline-none"
          />

          <label htmlFor="carCategory">Category:</label>
          <select
            id="carCategory"
            onChange={handleChange}
            name="category"
            value={formData.category}
            className="w-[300px] p-[7px] my-[10px] text-[12px] border border-gray-300 rounded-md shadow-md transition-all duration-300 ease-in-out focus:border-green-500 focus:shadow-[0_0_8px_rgba(2,154,2,0.5)] focus:outline-none"
          >
            <option value="">Choose options</option>
            <option value="4">Jeep</option>
            <option value="3">Hatchback</option>
            <option value="8">Sedan</option>
            <option value="5">Microbus</option>
            <option value="9">Universal</option>
            <option value="1">Coupe</option>
            <option value="6">Minivan</option>
            <option value="0">Sedan</option>
            <option value="2">Cabriolet</option>
            <option value="7">Goods wagon</option>
            <option value="Pickup">Pickup</option>
          </select>

          <label htmlFor="fuelType">Fuel Type:</label>
          <select
            id="fuelType"
            name="fuel_type"
            value={formData.fuel_type}
            onChange={handleChange}
            className="w-[300px] p-[7px] my-[10px] text-[12px] border border-gray-300 rounded-md shadow-md transition-all duration-300 ease-in-out focus:border-green-500 focus:shadow-[0_0_8px_rgba(2,154,2,0.5)] focus:outline-none"
          >
            <option value="">Choose options</option>
            <option value="2">Hybrid</option>
            <option value="5">Petrol</option>
            <option value="1">Diesel</option>
            <option value="0">CNG</option>
            <option value="4">LPG</option>
            <option value="6">Plug-in Hybrid</option>
            <option value="3">Hydrogen</option>
          </select>

          <label>Mileage:</label>
          <input
            type="number"
            name="mileage"
            value={formData.mileage}
            onChange={handleChange}
            className="w-[300px] h-8  p-[6px] my-[10px] text-[12px] border border-gray-300 rounded-md shadow-md transition-all duration-300 ease-in-out focus:border-green-500 focus:shadow-[0_0_8px_rgba(2,154,2,0.5)] focus:outline-none"
          />

          <label htmlFor="driveWheels">Drive Wheels:</label>
          <select
            id="driveWheels"
            name="drive_wheels"
            value={formData.drive_wheels}
            onChange={handleChange}
            className="w-[300px] p-[7px] my-[10px] text-[12px] border border-gray-300 rounded-md shadow-md transition-all duration-300 ease-in-out focus:border-green-500 focus:shadow-[0_0_8px_rgba(2,154,2,0.5)] focus:outline-none"
          >
            <option value="">Choose options</option>
            <option value="0">4x4</option>
            <option value="1">Front</option>
            <option value="2">Rear</option>
          </select>

          <label htmlFor="doors">Doors:</label>
          <select
            id="doors"
            name="doors"
            value={formData.doors}
            onChange={handleChange}
            className="w-[300px] p-[7px] my-[10px] text-[12px] border border-gray-300 rounded-md shadow-md transition-all duration-300 ease-in-out focus:border-green-500 focus:shadow-[0_0_8px_rgba(2,154,2,0.5)] focus:outline-none"
          >
            <option value="">Choose options</option>
            <option value="1">4</option>
            <option value="0">2</option>
            <option value="2">{`>5`}</option>
          </select>

          <label htmlFor="wheel">Wheel:</label>
          <select
            id="wheel"
            name="wheel"
            value={formData.wheel}
            onChange={handleChange}
            className="w-[300px] p-[7px] my-[10px] text-[12px] border border-gray-300 rounded-md shadow-md transition-all duration-300 ease-in-out focus:border-green-500 focus:shadow-[0_0_8px_rgba(2,154,2,0.5)] focus:outline-none"
          >
            <option value="">Choose options</option>
            <option value="0">Left-hand drive</option>
            <option value="1">Right-hand drive</option>
          </select>

          <label htmlFor="carColor">Color:</label>
          <select
            id="carColor"
            onChange={handleChange}
            name="color"
            value={formData.color}
            className="w-[300px] p-[7px] my-[10px] text-[12px] border border-gray-300 rounded-md shadow-md transition-all duration-300 ease-in-out focus:border-green-500 focus:shadow-[0_0_8px_rgba(2,154,2,0.5)] focus:outline-none"
          >
            <option value="">Choose options</option>
            <option value="12">Silver</option>
            <option value="1">Black</option>
            <option value="14">White</option>
            <option value="7">Grey</option>
            <option value="2">Blue</option>
            <option value="13">Sky blue</option>
            <option value="6">Green</option>
            <option value="11">Red</option>
            <option value="15">Yellow</option>
            <option value="3">Brown</option>
            <option value="0">Beige</option>
            <option value="8">Orange</option>
            <option value="5">Golden</option>
            <option value="10">Purple</option>
            <option value="4">Carnelian red</option>
            <option value="9">Pink</option>
          </select>

          <label>Airbags:</label>
          <input
            type="number"
            name="airbags"
            value={formData.airbags}
            onChange={handleChange}
            min="0"
            max="16"
            className="w-[300px]  h-8 p-[6px] my-[10px] text-[12px] border border-gray-300 rounded-md shadow-md transition-all duration-300 ease-in-out focus:border-green-500 focus:shadow-[0_0_8px_rgba(2,154,2,0.5)] focus:outline-none"
          />

          <button
            type="submit"
            className="bg-green-600 text-white mt-2 p-1 border-none rounded w-[300px] h-10 text-xs cursor-pointer hover:bg-green-700"
          >
            Predict
          </button>
        </form>
      </div>
      {prediction && (
        <div>
          <h2>Predicted Price: {prediction}</h2>
        </div>
      )}
    </div>
    </div>
  );
}

export default CarForm;
