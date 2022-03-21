import React, { useState, useEffect } from 'react';

/*import { Icon } from '@iconify/react';*/
import axios from 'axios';


function Form() {

  const [movies, setMovies] = useState([])
    async function apiAdvice() {
        
        await axios.get('http://www.omdbapi.com/?s=Superman&type=series&apikey=3fb68cfd')
        .then((response) => {
            let resp = response.data.Search
            console.log(resp)
            setMovies(resp)

        })
        .catch((error) => {
            console.error("Error fetching data: ", error)
            
        })
    };
    
    useEffect(() => {apiAdvice()}, []);
    return (
      <>
        {movies.map((movie, i) => (
          <div>
            <div>{movie.Title}</div>
            <img src={movie.Poster} alt='Poster' />
          </div>
        )
        )}
      </>
    );
  }
  
  export default Form;