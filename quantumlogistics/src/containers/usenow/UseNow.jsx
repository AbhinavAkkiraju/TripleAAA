import React from 'react';
import { Feature } from '../../components';
import { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './UseNow.css';

const UseNow = () => {
    const [startinglocation, setstartinglocation] = useState("");
    const [destinationlocation, setsestinationlocation] = useState("")
    const [weight, setweight] = useState("")
    const [ep, setep] = useState("")
    const [sp, setsp] = useState("")
    const [cp, setcp] = useState("")

    const handleSubmit = (event) => {
        event.preventDefault();
        alert(`${startinglocation}${destinationlocation}`)
        //fetch('http://athesto-dev.ddns.net/?city1=' + {startinglocation} + '&city2=' + {destinationlocation})
    }
    return (
        <div className="usenow section-margin" id="usenow">
            <div className="usenow-feature">
                <Feature title="USE NOW" />
            </div>
            <div className='break'></div>
            <div className="usenow-input">
                <form onSubmit={handleSubmit}>
                    <input onChange={(e) => setstartinglocation(e.target.value)} value={startinglocation} className='startinglocation' type="text" placeholder='Enter Starting Location (City)...' />
                    <input onChange={(e) => setsestinationlocation(e.target.value)} value={destinationlocation} className='destinationlocation' type="text" placeholder='Enter Destination (City)...' />
                    <input onChange={(e) => setweight(e.target.value)} value={weight} className='weight' type="text" placeholder='Enter Weight of Cargo (Tons)...' />
                    <input onChange={(e) => setep(e.target.value)} value={ep} className='economicpreference' type="text" placeholder='Enter Economic Preference (1-100)...' />
                    <input onChange={(e) => setsp(e.target.value)} value={sp} className='speedpreference' type="text" placeholder='Enter Speed Preference (1-100)...' />
                    <input onChange={(e) => setcp(e.target.value)} value={cp} className='carbonpreference' type="text" placeholder='Enter Carbon Preference (1-100)...' />
                    <input type="submit" className='gradient__background nopercent' value="GO" />
                </form>
            </div>
            <div className="usenow-output">
                <label className='truckdistance outlable'> Distance Travelled by Truck (km):
                    <input type="text" value={weight} className="startinglocation outtext" />
                </label>
                <label className='aircraftdistance outlable'> Distance Travelled by Aircraft (km):
                    <input type="text" value={weight} className="startinglocation outtext" />
                </label>
                <label className='boatdistance outlable'> Distance Travelled by Boat (km):
                    <input type="text" value={weight} className="startinglocation outtext" />
                </label>
                <label className='traindistance outlable'> Distance Travelled by Train (km):
                    <input type="text" value={weight} className="startinglocation outtext" />
                </label>
                <label className='traindistance outlable'> Estimated Carbon Emissions (g):
                    <input type="text" value={weight} className="startinglocation outtext" />
                </label>
                <label className='traindistance outlable'> Estimated Cost (USD):
                    <input type="text" value={weight} className="startinglocation outtext" />
                </label>
                <label className='traindistance outlable'> Estimated Travel Time (Hr):
                    <input type="text" value={weight} className="startinglocation outtext" />
                </label>
            </div>
        </div>
    )
}

export default UseNow