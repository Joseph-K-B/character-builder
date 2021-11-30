import React from 'react';
import Stats from './Stats';

function StatList({ 
    catchPhraseArr
 }){
     return (
     <div>
    {catchPhraseArr.map((catchPhrase) => (
        <>
            <li key={catchPhrase}>
                {catchPhrase}
            </li>
        </>
    ))}
{/* <ul aria-label='catch-list'>{catchPhraseArr}</ul> */}
</div>
    );
}


export default StatList