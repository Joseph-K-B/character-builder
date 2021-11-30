import React, { useState } from "react";
import Character from "../components/Character/Character";
import Picker from "../components/Picker/Picker";
import Stats from "../components/Stat/Stats";
import StatList from "../components/Stat/StatsList";

function BuilderContainer() {
    const [head, setHead] = useState('dog')
    const [torso, setTorso] = useState('leather')
    const [bottom, setBottom] = useState('jeans')
    const [catchPhrase, setCatchPhrase] = useState('')
    const [catchPhraseArr, setCatchPhraseArr] = useState([])

    const handleClick = () => {
        console.log('BUTTON')
        setCatchPhraseArr((prevState) => [...prevState, catchPhrase]);
    }

    return (
        <>
        <main>
            <Picker
            head={head}
            setHead={setHead}
            torso={torso}
            setTorso={setTorso}
            bottom={bottom}
            setBottom={setBottom} />
            <Character
            head={head}
            setHead={setHead}
            torso={torso}
            setTorso={setTorso}
            bottom={bottom}
            setBottom={setBottom} />
            <Stats 
                catchPhrase={catchPhrase}
                setCatchPhrase={setCatchPhrase}
                handleClick={handleClick}
            />
            <StatList
                key={catchPhrase} 
                catchPhraseArr={catchPhraseArr}
            />
        </main>
        </>
    )
}

export default BuilderContainer;