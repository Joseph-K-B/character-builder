import React from "react";

function Picker({
    head,
    setHead,
    torso,
    setTorso,
    bottom,
    setBottom
}) {
    const heads = ['dog', 'cat']
    const torsos = ['leather', 'suit']
    const bottoms = ['jeans']
    return (
        <section>
            <div>
                <label htmlFor='head'>Head</label>
                <select id='head' name='head' key='head-select' value={head} onChange={(e) => setHead(e.target.value)}>
                    {heads.map((pic) => (
                        <option key={pic}>{pic}</option>
                    ))}
                </select>
            </div>
            <div>
                <select name='torso' key='torso-select' value={torso} onChange={(e) => setTorso(e.target.value)}>
                    {torsos.map((pic) => (
                        <option key={pic}>{pic}</option>
                    ))}
                </select>
            </div>
            <div>
                <select name='bottom' key='bottom-select' value={bottom} onChange={(e) => setBottom(e.target.value)}>
                    {bottoms.map((pic) => (
                        <option key={pic}>{pic}</option>
                    ))}
                </select>
            </div>
        </section>
    )
}

export default Picker