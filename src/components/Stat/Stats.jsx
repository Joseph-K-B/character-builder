/* eslint-disable jsx-a11y/no-redundant-roles */
import React from "react";
import '../Stat/Stats.css'

function Stats({
    catchPhrase,
    setCatchPhrase,
    handleClick
}) {
    return (
        <section className='stat-controls'>
            <input
                id='catchphrase'
                name='catchphrase'
                aria-label='catchphrase-input'
                data-testid='catchphrase-input' 
                type='text' 
                value={catchPhrase}
                onChange={(e) => setCatchPhrase(e.target.value)}    
            />
            <label htmlFor='catchphrase' />
            <button type='button' onClick={handleClick}>Submit</button>
        </section>
    )
}
export default Stats