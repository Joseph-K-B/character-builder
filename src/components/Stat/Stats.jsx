import React from "react";

function Stats({
    catchPhrase,
    setCatchphrase
}) {
    const onButtonClick = () => {
        console.log('BUTTON')
    }
    return (
        <section>
            <input
                id='catchphrase'
                name='catchphrase' 
                type='text' 
                value={catchPhrase}
                onChange={(e) =>setCatchphrase(e.target.value)}    
            />
            <label htmlFor='catchphrase' />
            <button onClick={onButtonClick}>Submit</button>
        </section>
    )
}
export default Stats