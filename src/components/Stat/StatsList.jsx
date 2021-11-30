import React from 'react';
import Stats from './Stats';

function StatList ({
    catchPhrase,
    setCatchPhrase,
    catchPhraseArr, 
 }){

    const arr = catchPhraseArr.map(({catchPhrase}) => {
    return (
        <>
            <li>
                <Stats
                    value={catchPhrase}
                    onChange={(e) => setCatchPhrase(e.target.value)} 
                    key='list-item'
                    catchPhrase={catchPhrase}
                />
            </li>
        </>
    )
})

return <ul aria-label='catch-list'>{arr}</ul>
}


export default StatList