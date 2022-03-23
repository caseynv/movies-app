import React from 'react';




function Movieslist1(props) {

    const movie1 = props.movie;
    const mo1 = movie1.filter((mo) => mo.Type === 'movie')
    console.log(mo1)
    return (
        <div>
            <div className='movieslist'>
                
            {mo1.map((movi, i) => 
                    <div className='movie-sect' key={i}>
                    {movi.Title} 
                    </div>
                )}
            </div>
        </div>
    );
  }
  
  export default Movieslist1;