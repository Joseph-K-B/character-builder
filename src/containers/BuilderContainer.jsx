import React, { useState } from "react";
import Character from "../components/Character/Character";
import Picker from "../components/Picker/Picker";

function BuilderContainer() {
    const [head, setHead] = useState('dog')
    const [torso, setTorso] = useState('leather')
    const [bottom, setBottom] = useState('jeans')

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
        </main>
        </>
    )
}

export default BuilderContainer;