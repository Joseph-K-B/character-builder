import React, { useState } from "react";
import Character from "../components/Character/Character";
import Picker from "../components/Picker/Picker";

function BuilderContainer() {
    const [head, setHead] = useState('dog')

    return (
        <main>
            <Picker
            head={head}
            setHead={setHead} />
            <Character
            head={head}
            setHead={setHead} />
        </main>
    )
}

export default BuilderContainer;