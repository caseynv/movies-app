import React from 'react';




function Movieslist(props) {

  const movie1 = props.movie;
    const moo1 = movie1.filter((moo) => moo.Type === 'series')
    console.log(moo1)
    return (
        <div className='movieslist'>
            
          {moo1.map((movi1, i) => 
                <div className='movie-sect' key={i}>
                  {movi1.Title} 
                </div>
            )}
        </div>
        
    );
  }
  
  export default Movieslist;