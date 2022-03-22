import React, { useState, useEffect } from 'react';

import axios from 'axios';

function Form(){
    
        const [userName, setuserName] = useState('');

    async function handleSubmit() {
        
        await axios.get('http://www.omdbapi.com/?s=${userName}&apikey=3fb68cfd')
        .then((response) => {
            let resp = response.data.Search
            console.log(resp)
            

        })
        .catch((error) => {
            console.error("Error fetching data: ", error)
            
        })
    };
    
    useEffect(() => {handleSubmit()}, []);
    
    return(
        <div className='form-field'>
            <h6>Search</h6>
            <div className='form'>
                <form onSubmit={handleSubmit}>
                    <input type="text" 
                    placeholder=' ' 
                    value={ userName } 
                    onChange={ event => setuserName(event.target.value ) }
                    required />
                </form>
            </div>
        </div>
    )
}

export default Form;