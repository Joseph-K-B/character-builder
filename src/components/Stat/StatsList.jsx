import React from 'react';
import Stats from './Stats';

function StatList ({
    catchPhraseArr, 
 }){

    const arr = catchPhraseArr.map(({catchPhrase = null}) => {
    return (
        <>
            <li>
                <Stats
                    value={catchPhrase}
                    key='list-item'
                />
            </li>
        </>
    )
})

return <ul aria-label='catch-list'>{arr}</ul>
}


export default StatList