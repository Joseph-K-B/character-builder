import React from "react";
import '../Picker/Picker.css'

function Picker({
    head,
    setHead,
    headCount,
    setHeadCount,
    torso,
    setTorso,
    torsoCount,
    setTorsoCount,
    bottom,
    setBottom,
    bottomCount,
    setBottomCount
}) {
    const heads = ['dog', 'cat']
    const torsos = ['leather', 'suit']
    const bottoms = ['jeans']

    const handleHeadChange= (e) => {
        setHead(e.target.value)
        setHeadCount(headCount + 1)
    };

    const handleTorsoChange= (e) => {
        setTorso(e.target.value)
        setTorsoCount(torsoCount + 1)
    };

    const handleBottomChange= (e) => {
        setBottom(e.target.value)
        setBottomCount(bottomCount + 1)
    };
    
    return (
        <section className='image-controls'>
            <div>
                <label htmlFor='head'>Head</label>
                <select id='head' name='head' key='head-select' value={head} onChange={handleHeadChange}>
                    {heads.map((pic) => (
                        <option key={pic}>{pic}</option>
                    ))}
                </select>
            </div>
            <div>
            <label htmlFor='torso'>Torso</label>
                <select id='torso' name='torso' key='torso-select' value={torso} onChange={handleTorsoChange}>
                    {torsos.map((pic) => (
                        <option key={pic}>{pic}</option>
                    ))}
                </select>
            </div>
            <div>
            <label htmlFor='torso'>Bottom</label>
                <select id='bottom' name='bottom' key='bottom-select' value={bottom} onChange={handleBottomChange}>
                    {bottoms.map((pic) => (
                        <option key={pic}>{pic}</option>
                    ))}
                </select>
            </div>
        </section>
    )
}

export default Picker