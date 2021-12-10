import React from 'react';
import '../Stat/StatList.css'

function StatList({ 
    catchPhraseArr,
    headCount,
    torsoCount,
    bottomCount
 }){
     return (
        <>
        <section className='catchphrase-list'>
            <p aria-label='change-count'> 
                The head of your charachter has been updated {headCount} times,
                the torso updated {torsoCount}, and the legs updated {bottomCount} times.</p>
            <ul aria-label='catch-list'>Catchphrases</ul>
            {catchPhraseArr.map((catchPhrase) => (
                <li key={catchPhrase} aria-label='list-items'>
                    "{catchPhrase}"
                </li>
    ))}
        </section>
    </>
    );
}


export default StatList