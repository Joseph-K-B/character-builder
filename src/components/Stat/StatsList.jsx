import React from 'react';

function StatList({ 
    catchPhraseArr
 }){
     return (
     <div>
<ul aria-label='catch-list'>Catchphrases</ul>
    {catchPhraseArr.map((catchPhrase) => (
        <>
            <li key={catchPhrase} data-testid='list-items'>
                "{catchPhrase}"
            </li>
        </>
    ))}
</div>
    );
}


export default StatList