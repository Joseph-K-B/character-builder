import React from 'react';
import Stats from './Stats';

function StatList({ catchPhraseArr }){
    catchPhraseArr.map((catchPhrase) => {
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

return <ul aria-label='catch-list'>{catchPhraseArr}</ul>
}


export default StatList