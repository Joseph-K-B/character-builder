import React from 'react';
import Stats from './Stats';

function StatList ({
    arr
 }){
     const catchPhrases = arr.map(({
         catchPhrase
     })
    return (
        <>
            <li>
                <Stats 
                    key='list-item'
                    catchPhrase={catchPhrase}
                />
            </li>
        </>
    )
})

return 

export default StatList