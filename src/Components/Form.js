import React, { useState } from 'react';
import './form.css';

const Form = () => {

    const [elementList, setElementList] = useState([])
    const [Name, setName] = useState('')
    const [Department, setDepartment] = useState('')
    const [Rating, setRating] = useState('')
 

    const handleSubmit = (details) => {
        details.preventDefault();

        const info = { Name, Department, Rating }
        if (Name && Department && Rating) {
            setElementList((total) => [...total, info])
            setName("")
            setDepartment("")
            setRating("")
        }
    }


    return (
        <div>
            <h1 className='heading'>Employee FeedBack Form</h1>
            <div className="row ">
                <div className="col">
                    <label > Name :</label>
                    <input type="text" className="form-control" placeholder="Name" aria-label="Name" value={Name} onChange={(e) => setName(e.target.value)} />
                </div>
                <br />
                <div className="col">
                    <label > Department :</label>
                    <input type="text" className="form-control" placeholder="Department" aria-label="Department" value={Department} onChange={(e) => setDepartment(e.target.value)} />
                </div>
                <br/>
                <div className="col">
                    <label > Rating :</label>
                    <input type="number" className="form-control" placeholder="number" aria-label="number" value={Rating} onChange={(e) => setRating(e.target.value)} />
                </div>

            </div>
            <br/>
            <button className='btn' onClick={handleSubmit}>Submit</button>

            <hr className='line'/>

            <div className='data'>
                {
                    elementList.map((data) =>
                        <div className='output'>
                            <h3 className='output-text'> Name : {data.Name} | Department : {data.Department} | Rating : {data.Rating} </h3>
                        </div>
                        )
                }
            </div>
        </div>
    )
}

export default Form