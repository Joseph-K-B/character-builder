/* eslint-disable jsx-a11y/no-redundant-roles */
import React from "react";
import '../Stat/Stats.css'

function Stats({
    catchPhrase,
    setCatchPhrase,
    handleClick
}) {
    return (
        <>
        <section className='stat-controls'>
            <h1>Add Catchphrase</h1>
            <span className='catch-group'>
            <input
                id='catchphrase'
                name='catchphrase'
                className='input'
                aria-label='catchphrase-input'
                data-testid='catchphrase-input' 
                type='text' 
                value={catchPhrase}
                onChange={(e) => setCatchPhrase(e.target.value)}    
            />
            </span>
            <label htmlFor='catchphrase' />
            <button type='button' onClick={handleClick}>Submit</button>
        </section>
            </>
    )
}
export default Stats