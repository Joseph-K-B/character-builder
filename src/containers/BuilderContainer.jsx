import React, { useState } from "react";
import Character from "../components/Character/Character";
import Picker from "../components/Picker/Picker";

function BuilderContainer() {
    const [head, setHead] = useState('')

    return (
        <main>
            <Picker
            head={head}
            setHead={setHead} />
            <Character />
        </main>
    )
}

export default BuilderContainer;