import React from 'react'
// import "./style.css"
import weatherbackground from "../../images/background.svg"

export default function WeatherForm() {

    let [state, setState]= React.useState({
        Temperature:"",
        Humidity:"",
        WindSpeed:"",
        Pressure:"",
        Visibility:""
    })

    let [showState, setShowState]= React.useState("")

    function updation(event){
        const {name, type, checked, value}=  event.target
        setState(previous=>{
            return {
                ...previous,
                [name]: type === "checkbox" ? checked : value
            }
        })
    }

    const submission = async (e) => {
        e.preventDefault();

        const response = await fetch('http://127.0.0.1:5000/predict', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(state),
        });

        const data = await response.json();
        setShowState(data.prediction);
    };

    return (
        <div    style={{
            backgroundImage: `url(${weatherbackground})`,
            backgroundSize: '400px', // Image size is set to auto to allow repeating
            backgroundRepeat: 'repeat', // Allows the image to repeat
            backgroundPosition: 'center', // Centers the image
            backgroundRepeat:"repeat"
        }}
         className='flex flex-col justify-center items-center '
         >
            <div
             className=' bg-white w-[380px] flex flex-col items-center my-12 py-10 shadow-[0_0_8px_gray] md:w-[500px]'
            >
                <h1 className='font-semibold text-lg'>Weather Condition Prediction</h1>
                 <div>
                <form onSubmit={submission} className='flex flex-col leading-[6vh] my-[46px] mx-[30px] w-[80%] text-black text-[17px]'>
                    <label>{`Temperature (°C ):`}</label>
                    <input
                        type="number"
                        min="-10"
                        max="50"
                        placeholder='Enter Temperature (-10-50)'
                        onChange={updation}
                        name='Temperature'
                        value={state.Temperature}
                        className='w-[300px] h-8 p-[6px] my-[10px] text-[12px] border border-gray-300 rounded-md shadow-md transition-all duration-300 ease-in-out focus:border-[rgb(2,154,2)] focus:shadow-[0_0_8px_rgba(2,154,2,0.5)] focus:outline-none'
                    />
                    <label>{`Humidity (%):`}</label>
                    <input
                        type="number"
                        min="30"
                        max="100"
                        placeholder='Enter Humidity (30-100)'
                        onChange={updation}
                        name='Humidity'
                        value={state.Humidity}
                        className='w-[300px] h-8 p-[6px] my-[10px] text-[12px] border border-gray-300 rounded-md shadow-md transition-all duration-300 ease-in-out focus:border-[rgb(2,154,2)] focus:shadow-[0_0_8px_rgba(2,154,2,0.5)] focus:outline-none'
                    />
                    <label>{`Wind Speed (km/h):`}</label>
                    <input
                        type='number'
                        min="0"
                        max="20"
                        placeholder='Enter Wind Speed (0-20)'
                        onChange={updation}
                        name='WindSpeed'
                        value={state.WindSpeed}
                        className='w-[300px] h-8 p-[6px] my-[10px] text-[12px] border border-gray-300 rounded-md shadow-md transition-all duration-300 ease-in-out focus:border-[rgb(2,154,2)] focus:shadow-[0_0_8px_rgba(2,154,2,0.5)] focus:outline-none'
                    />
                    <label>{`Pressure (hPa):`}</label>
                    <input
                        type='number'
                        min="900"
                        max="1050"
                        placeholder='Enter Pressure (900-1050)'
                        onChange={updation}
                        name='Pressure'
                        value={state.Pressure}
                        className='w-[300px] h-8 p-[6px] my-[10px] text-[12px] border border-gray-300 rounded-md shadow-md transition-all duration-300 ease-in-out focus:border-[rgb(2,154,2)] focus:shadow-[0_0_8px_rgba(2,154,2,0.5)] focus:outline-none'
                    />
                    <label>{`Visibility (km):`}</label>
                    <input
                        type='number'
                        min="0"
                        max="10"
                        placeholder='Enter Visibility (0-10)'
                        onChange={updation}
                        name='Visibility'
                        value={state.Visibility}
                        className='w-[300px] h-8 p-[6px] my-[10px] text-[12px] border border-gray-300 rounded-md shadow-md transition-all duration-300 ease-in-out focus:border-[rgb(2,154,2)] focus:shadow-[0_0_8px_rgba(2,154,2,0.5)] focus:outline-none'
                    />
                    <button className="bg-green-600 text-white mt-2 p-1 border-none rounded w-[300px] h-10 text-xs cursor-pointer hover:bg-green-700">
                        Predict Weather Condition
                    </button>
                </form>
                </div>
                {showState&&<h2>{showState}</h2>}
            </div>
        </div>
    )
}
