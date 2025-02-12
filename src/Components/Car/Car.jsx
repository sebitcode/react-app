import { useState } from "react";

// function Car() {
//     const [car, setCar] = useState({
//         year: 2024,
//         make: "Ford",
//         model: "Mustang"
//     });

//     function handleYearChange(event) {
//         setCar(c => ({...c, year: event.target.value}))
//     }
//     function handleMakeChange(event) {
//         setCar(c => ({...c, make: event.target.value}))
//     }
//     function handleModelChange(event) {
//         setCar(c => ({...c, model: event.target.value}))
//     }

//     return <div>
//             <p>Your favorite car is: {car.year} {car.make} {car.model}</p>

//             <input type="number" value={car.year} onChange={handleYearChange} />
//             <input type="text" value={car.make} onChange={handleMakeChange} />
//             <input type="text" value={car.model} onChange={handleModelChange} />
//            </div>
// }

function Car() {

    const [cars, setCars] = useState([]);
    const [carYear, setCarYear] = useState(new Date().getFullYear());
    const [carMake, setCarMake] = useState("");
    const [carModel, setCarModel] = useState("");

    function handleAddCar() {
        const newCar = {year: carYear, make: carMake, model: carModel};
        setCars(prevCars => [...prevCars, newCar]);

        setCarYear(new Date().getFullYear());
        setCarMake("");
        setCarModel("");
    };
    function handleRemoveCar(index) {
        setCars(cars.filter((_, i) => i !== index))
    };
    function handleYearChange(event) {
        setCarYear(event.target.value)
    };
    function handleMakeChange(event) {
        setCarMake(event.target.value)
    };
    function handleModelChange(event) {
        setCarModel(event.target.value)
    };

    return <div>
                <h2>List of Car Objects</h2>
                <ul>
                    {cars.map((car, index) => 
                    <li key={index} onClick={() => handleRemoveCar(index)}>
                        {car.year} {car.make} {car.model}
                    </li> )}
                </ul>
                <input type="number" name="year" value={carYear} onChange={handleYearChange} /><br />
                <input type="text" name="make" placeholder="Enter car make" value={carMake} onChange={handleMakeChange} /><br />
                <input type="text" name="model" placeholder="Enter car model" value={carModel} onChange={handleModelChange} /><br />
                <button onClick={handleAddCar}>Add Car</button>
           </div>

}

export default Car