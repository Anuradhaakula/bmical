import React, {useState} from 'react'

const BMI = () => {
    const[age,setAge]=useState()
    const[weight,setWeight]=useState()
    const[height,setHeight]=useState()
    const[bmi,setBmi]=useState()
    const[msg,setMsg]=useState('')

    const reload=()=>{
        window.location.reload()
    }

    const handleCalculations=(e)=>{
        e.preventDefault()
        
        const heightInMeters = height / 100; // Convert height to meters
        const bmiValue = weight / (heightInMeters * heightInMeters);
        setBmi(bmiValue.toFixed(2));
        
        if (bmiValue < 18.5){
            setMsg("You're UnderWeight")
        }
        else if(bmiValue >=18.5 && bmiValue < 24.9){
            setMsg("You're NormalWeight")
        }
        else if(bmiValue >=25 && bmiValue < 29.9){
            setMsg("You're OverWeight")
        }
        else{
            setMsg("obese")
        }
    }
  return (

    <div className='app'>
      <div className='Container'>
        <h1 className='title'>BMI Calculator</h1>
        <form onSubmit={handleCalculations}>
            <div>
                <label className='labels'>Age:</label>
                <input className='bmi-input' type="number" placeholder="Age...." value={age} onChange={(e)=>setAge(e.target.value)}/>
            </div>
            <div>
                <label className='labels'>Weight(kg):</label>
                <input className='bmi-input' type="number" placeholder="Weight...." value={weight} onChange={(e)=>setWeight(e.target.value)}/>
            </div>
            <div>
                <label className='labels'>Height(cm):</label>
                <input className='bmi-input' type="number" placeholder="Height...." value={height} onChange={(e)=>setHeight(e.target.value)}/>
            </div>
            <div>
                <button className='btn' type='submit'>Calculate</button>
                <button className='btn btn-reload' type='submit' onClick={reload}>Reload</button>
            </div>
            <div className='result'>
                <h3>Age:{age}</h3>
                <h3>Your BMI is:{bmi}</h3>
                <p className='p-msg'>{msg}</p>

            </div>
        </form>
      </div>
    </div>
  )
}

export default BMI
