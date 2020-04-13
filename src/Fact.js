import React from 'react';

const Fact = ( {fact, newfact} ) => {
    return (
    <div className='tc ma4'>
        <h3>{fact}</h3>
        <button className='grow br3' onClick={newfact}>New Fact</button>
    </div>
);
}



export default Fact;