import React, { useState } from "react";
import Character from "../components/Character/Character";
import Picker from "../components/Picker/Picker";
import Stats from "../components/Stat/Stats";
import StatList from "../components/Stat/StatsList";
import '../containers/BuilderContainer.css'

function BuilderContainer() {
    const [head, setHead] = useState('dog');
    const [torso, setTorso] = useState('leather');
    const [bottom, setBottom] = useState('jeans');
    const [catchPhrase, setCatchPhrase] = useState('');
    const [catchPhraseArr, setCatchPhraseArr] = useState([]);
    const [headCount, setHeadCount] = useState(0);
    const [torsoCount, setTorsoCount] = useState(0);
    const [bottomCount, setBottomCount] = useState(0);

    const handleClick = () => {
        setCatchPhraseArr((prevState) => [...prevState, catchPhrase]);
    }

    return (
        <>
        <main>
            <Picker
                className='image-controls'
                head={head}
                setHead={setHead}
                headCount={headCount}
                setHeadCount={setHeadCount}
                torso={torso}
                setTorso={setTorso}
                torsoCount={torsoCount}
                setTorsoCount={setTorsoCount}
                bottom={bottom}
                setBottom={setBottom} 
                bottomCount={bottomCount}
                setBottomCount={setBottomCount}
            />
            <Character
                className='image-display'
                head={head}
                setHead={setHead}
                torso={torso}
                setTorso={setTorso}
                bottom={bottom}
                setBottom={setBottom} 
            />
            <Stats
                className='stat-controls' 
                catchPhrase={catchPhrase}
                setCatchPhrase={setCatchPhrase}
                handleClick={handleClick}
            />
            <StatList
                className='stat-display'
                key={catchPhrase}
                headCount={headCount}
                torsoCount={torsoCount} 
                bottomCount={bottomCount} 
                catchPhraseArr={catchPhraseArr}
            />
        </main>
        </>
    )
}

export default BuilderContainer;