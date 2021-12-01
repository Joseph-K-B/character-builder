/* eslint-disable jsx-a11y/no-redundant-roles */
import React from "react";

function Stats({
    catchPhrase,
    setCatchPhrase,
    catchPhraseArr,
    setCatchPhraseArr,
    handleClick
}) {
    // const onButtonClick = () => {
    //     console.log('BUTTON')
    //     const newCatchPhrase = {catchPhrase}
    //     const newCatchPhraseArr = (prevState) => ([...prevState, newCatchPhrase])
    //     return newCatchPhraseArr
    // }
    return (
        <section>
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