import React, { useState } from "react";
import Character from "../components/Character/Character";
import Picker from "../components/Picker/Picker";
import Stats from "../components/Stat/Stats";

function BuilderContainer() {
    const [head, setHead] = useState('dog')
    const [torso, setTorso] = useState('leather')
    const [bottom, setBottom] = useState('jeans')
    const [catchPhrase, setCatchPhrase] = useState('')
    const [catchPhraseArr, setCatchPhraseArr] = useState([])

    // const onButtonClick = () => {
    //     console.log('BUTTON')
    // }

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
                setCatchphrase={setCatchPhrase}
            />
        </main>
        </>
    )
}

export default BuilderContainer;