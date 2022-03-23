import React, {useState, useEffect} from 'react';
import Movieslist from './Movieslist';
import Movieslist1 from './Movieslist1';
import axios from 'axios';

function Form(){
    
        const [moviename, setMoviename] = useState('');
        const [movie, setMovie] = useState([])

        async function handleSubmit(event) {
        event.preventDefault();
        await axios.get(`http://www.omdbapi.com/?s=${moviename}&apikey=3fb68cfd`)
        .then((response) => {
            let resp = response.data.Search
            setMovie(resp)

        })
        .catch((error) => {
            console.error("Error fetching data: ", error)
            
        })
    };
    useEffect (() => {
        handleSubmit()}, []
    )
    return(
        <>
            <div className='form-field'>
                <h6>Search</h6>
                <div className='form'>
                    <form onSubmit={handleSubmit} >
                        <input type="text" 
                            placeholder=' ' 
                            value={ moviename } 
                            onChange={ (event) => setMoviename(event.target.value ) }
                            required />
                    </form>
                </div>
            </div>
            <div>
                <p>Series</p>
                
                <Movieslist movie={movie}/>
            </div>
            <div>
                <p>Movie</p>
                <Movieslist1 movie={movie}/>
            </div>
        </>
    )
}

export default Form;